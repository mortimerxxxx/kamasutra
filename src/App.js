import React from 'react';
import './App.css';
import Header from './Camponents/Header/Header';
import Nav from "./Camponents/Nav/Nav";
import Profile from "./Camponents/Profile/Profile";
import Dialogs from "./Camponents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Footer from "./Camponents/Footer/Footer";
import Settings from "./Camponents/Settings/Settings";
import News from "./Camponents/News/News";
import Music from "./Camponents/Music/Music";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className="content-wrapper">
                    <Nav />
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/news" component={News}/>
                    <Route path="/settings" component={Settings}/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;