import React from "react";

function UserLogin(){
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
                <button className="login">Login</button>
                <button className="login">New user? Register.</button>
                
            </div>
            </div>
        </>
    )
}

export default UserLogin