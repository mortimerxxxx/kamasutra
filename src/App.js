import React from 'react';
import './App.css';
import Header from './Camponents/Header';
import Nav from "./Camponents/Nav";
import Profile from "./Camponents/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <div className="content-wrapper">
                <Nav />
                <Profile />
            </div>
        </div>
    );
}

export default App;
