import React, { useState } from "react";
import { Link } from "react-router-dom";
function RegisterUser() {
  const [regUsername, setRegUsername] = useState("");
  const [email, setEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [storeUser, setStoreUser] = useState([]);

  const handleRegister = () => {
    setStoreUser([...storeUser, {regUsername, email, regPassword}]);
    console.log({regUsername, regPassword, email});
    console.log(storeUser);
    
  };

  return (
    <>
      <div className="register-user">
        <form className="user-form">
          <div className="title">
            <h1>Register User</h1>
          </div>
          <input
            type="text"
            name="username"
            value={regUsername}
            onChange={(e) => {
              setRegUsername(e.target.value);
            }}
            placeholder="Enter your username"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            value={regPassword}
            onChange={(e) => {
              setRegPassword(e.target.value);
            }}
            placeholder="Enter your user password"
          />
          <Link to="/contacts" onClick={handleRegister} className="login">
            Register
          </Link>
        </form>
      </div>
    </>
  );
}
export default RegisterUser;
