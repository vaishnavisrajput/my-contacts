import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


function UserLogin(){
    const navigate = useNavigate();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[loginInfo, setLoginInfo] = useState({});



    const handleClick = (e) => {
        e.preventDefault();
           setLoginInfo({username, password});
          console.log({username, password});
          {username && password ? (
            navigate('/contacts')
          ) : (
            alert("Enter the details properly.")
          )}
            setUsername("");
            setPassword("");
        }
        
    return(
       
        <>
            <div className="user-login">
            <div className="title">
                <h1>My Contacts</h1>
                <p>Managing Contacts Just Got Easier</p>
            </div>
            <div >
                <form className="user-form">
                <input type="text" name="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username" />

                <input type="password" name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter user password" />
                <button onClick={handleClick} className="login">Login</button>
                <Link to="/register" className="login">New user? Register.</Link>
                
                </form>
                
            </div>
            </div>
        </>
    )
}

export default UserLogin