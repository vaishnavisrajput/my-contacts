import React from "react";
import {Link, useNavigate} from "react-router-dom";


function UserLogin(){
    const navigate = useNavigate();
    const handleClick = () => {
            
            navigate('/contacts');
        }
    return(
       
        <>
            <div className="user-login">
            <div className="title">
                <h1>My Contacts</h1>
                <p>Managing Contacts Just Got Easier</p>
            </div>
            <div className="user-form">
                <input type="username" name="username" placeholder="Enter username" />
                <input type="password" name="password" placeholder="Enter user password" />
                <button onClick={handleClick} className="login">Login</button>
                <Link to="/register" className = "login">New user? Register.</Link>
                
            </div>
            </div>
        </>
    )
}

export default UserLogin