import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import JoinChat from "./components/JoinChat"
import Chat from "./components/Chat"

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} component={JoinChat}/>
            <Route path="/chat" exact={true} component={Chat} />
        </BrowserRouter>
    )
}



export default App