import React, {useState} from 'react';
import Login from '../../components/Login';
import Profile from '../../components/Profile';
import {LoginContext} from '../../components/Contexts/LoginContext';

export default function Home(){
    const [showProfile, setShowProfile] = useState(false);
    const [userName, setUserName] = useState("");
    return(<>
       <LoginContext.Provider value={{userName, setUserName, setShowProfile}}>
           {showProfile ? <Profile/>  : <Login /> }
       </LoginContext.Provider>
       </>);
}