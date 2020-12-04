import React from 'react';
import './App.css';
import Header from './Camponents/Header/Header';
import Nav from "./Camponents/Nav/Nav";
import MyPosts from "./Camponents/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <div className="content-wrapper">
                <Nav />
                <MyPosts />
            </div>
        </div>
    );
}

export default App;