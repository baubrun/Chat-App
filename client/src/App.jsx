import React, {useState}from 'react'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {JoinChat} from "./components/JoinChat"
import {Chat} from "./components/Chat"
import {Login} from "./components/Login"

import "./App.css"


const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={Login} />
            <Route path="/JoinChat" exact={true} component={JoinChat}>
                {/* {!loggedIn ? <Redirect to="/" /> : <JoinChat />} */}
            </Route>
            <Route path="/chat" exact={true} component={Chat} />
            
        </BrowserRouter>
    )
}



export default App