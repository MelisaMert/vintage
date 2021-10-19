import React, {useContext} from 'react';
import {LoginContext}  from '../components/Contexts/LoginContext';

export default function Profile(){
    const {userName} = useContext(LoginContext);
 
    return(
        <>
        <h1>Profile</h1>
        <h2>Username : {userName}</h2>
        </>
    )
}