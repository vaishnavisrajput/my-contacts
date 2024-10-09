import React from "react"

function Contacts(){
    return(
        <>
            <div className="contacts">
            
                <div className="user-form">
                <input className="" type="fullname" name="fullname" placeholder="Enter contact name" />
                <input type="email" name="email" placeholder="Enter contact email" />
                <input type="phone" name="phone" placeholder="Enter contact phone number" />
                <button className="login">Save Contact</button>
                </div>
                </div>
        </>
    )
}
export default Contacts