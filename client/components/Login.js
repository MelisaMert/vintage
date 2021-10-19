import React, { useContext } from 'react';
import { LoginContext } from '../components/Contexts/LoginContext';
export default function Login() {
    // i want to grap the login context and i want to grap the set username variable
    const { setUserName, setShowProfile } = useContext(LoginContext);

    return (<>
    
        <input
            type="text"
            style={{ backgroundColor: "bisque", padding: "5px" }}
            placeholder="Username..."
            onChange={(event) => {
                setUserName(event.target.value)
            }}
        />
        <input
            type="text"
            style={{ backgroundColor: "bisque", padding: "5px" }}
            placeholder="Password..."
        />
        <button
            onClick={() => {
                setShowProfile(true);
            }}
        >LOGIN
        </button>
    </>)
}