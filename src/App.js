import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Online from "./components/Online/Online";


const App = (props) => {
    return (

        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state}/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                />}
                />
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />}
                />
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/online' render={() => <Online state={props.state.sidebar}/>}/>
            </div>
        </div>

    );
};

export default App;
