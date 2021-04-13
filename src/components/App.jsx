import React from 'react';
import Signup from './Signup';
import Login from './Login'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {

    return (
        <div>
            <BrowserRouter>
            <Route path="/" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            </BrowserRouter>
        </div>
    )
}

export default App;