const users = [];

const addUser = ({ chatRoom, id, name }) => {
  name = name.trim().toLowerCase();
  chatRoom = chatRoom.trim().toLowerCase();

  const userExists = users.find(
    (u) => u.name === name && u.chatRoom === chatRoom
  );
  if (userExists) {
    return {
      error: "Username is taken.",
    };
  }

  const user = {
    chatRoom,
    id,
    name,
  };
  users.push(user);

  return { user };
};

const getUser = (id) => users.find((u) => u.id === id);

const getUsersInChatRoom = (chatRoom) => users.filter((u) => u.chatRoom === chatRoom);

const removeUser = (id) => {
  const idx = users.findIndex((u) => u.id === id);

  if (idx !== -1) {
    return users.splice(idx, 1)[0];
  }
};

module.exports = {
  addUser,
  getUser,
  getUsersInChatRoom,
  removeUser,
};
