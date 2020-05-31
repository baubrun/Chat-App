const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require("./router");
const pino = require("pino")
const expressPino = require("express-pino-logger")
const logger = pino({level: process.env.LOG_LEVEL || "info"})
const expressLogger = expressPino({ logger})
const {
  addUser,
  getUser,
  getUsersInChatRoom,
  removeUser
} = require("./users");
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
require("dotenv").config()
const mysql = require("mysql")
const multer = require("multer")
const upload = multer()






/*==============
Middleware
===============*/
app.use(router);
app.use(cookieParser())
app.use(session({
  secret: "library",
  resave: false,
  saveUninitialized: true,
}))
require("./config/passport")(app)
app.use(expressLogger)


/*==============
DB
===============*/
const db = mysql.createConnection({
  host: "localhost",
  password: process.env.MYSQL_KEY,
  database: "onparle",
  user: "root"
})

db.connect((err) => {
  const logMsg = "DB Connection."
  if (!err) {
    logger.info(logMsg)
  } else {
    console.info(err, logMsg)
  }
})




/*==============
Sockets
===============*/

io.on("connection", (socket) => {
  socket.on("joinChat", ({
    chatRoom,
    name
  }, cb) => {
    const {
      error,
      user
    } = addUser({
      chatRoom,
      id: socket.id,
      name,
    });

    if (error) {
      return cb(error);
    }

    socket.join(user.chatRoom);

    socket.emit("message", {
      text: `Hi ${user.name}. Welcome to the ChatRoom ${user.chatRoom}!`,
      user: "Admin",
    });

    socket.broadcast.to(user.chatRoom).emit("message", {
      text: `${user.name} joins the chat.`,
      user: "Admin",
    });

    io.to(user.chatRoom).emit("chatRoomData", {
      chatRoom: user.chatRoom,
      users: getUsersInChatRoom(user.chatRoom),
    });

    cb();
  });

  socket.on("sendMessage", (msg, cb) => {
    const user = getUser(socket.id);

    io.to(user.chatRoom).emit("message", {
      user: user.name,
      text: msg,
    });

    cb();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.chatRoom).emit("message", {
        user: "Admin",
        text: `${user.name} left the chat.`,
      });

      io.to(user.chatRoom).emit("chatRoomData", {
        chatRoom: user.chatRoom,
        users: getUsersInChatRoom(user.chatRoom),
      });

    }

  });
});


/*==============
GET===============*/

app.get("/", upload.none(), (req, res) => {
  const {
    username,
    password
  } = req.body
  // const logMsg = "INSERT INTO users"
  // db.query("INSERT INTO users (username, password) values (?,?)", [username, password], (err, rows) => {
  //   if (!err) {
  //     logger.info(rows, logMsg)
  //   } else {
  //     logger.info(logMsg)
  //   }
  // })
  console.log(username, password)
})

/*==============
POST
===============*/

app.post("/", upload.none(), (req, res) => {
  const {
    username,
    password
  } = req.body
  const logMsg = "INSERT INTO users"
  db.query("INSERT INTO users (username, password) values (?,?)", [username, password], (err, rows) => {
    if (!err) {
      logger.info(rows, logMsg)
    } else {
      logger.info(logMsg)
    }
  })
})


/*==============
Server
===============*/
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => logger.info(`Server running on port ${PORT}!\n`));