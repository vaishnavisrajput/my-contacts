import React, { useState } from "react"

function Contacts(){
    const[fullName, setFullName] = useState("")
    const[email, setEmail] = useState("")
    const[phone, setPhone] = useState()
    const[contactDetails, setContactDetails] = useState([]);

    const handleContact = () => {
        setContactDetails([{fullName, email, phone}])
        console.log([contactDetails]);
        
    }

    return(
        <>
            <div className="contacts">
            <div className="title">
                <h1>Create New Contact</h1>
            </div>
                <div className="user-form">
                <input className=""
                type="fullname"
                name="fullname"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter contact name" />
                <input type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter contact email" />
                <input type="phone" 
                name="phone" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter contact phone number" />
                <button onClick={handleContact} className="login">Save Contact</button>
                </div>
                </div>
        </>
    )
}
export default Contacts