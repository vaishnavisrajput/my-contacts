import React from "react";

function RegisterUser() {
  return (
    <>
      <div className="register-user">
        <form className="user-form" >
          <input type="username" name="username" placeholder="Enter your username" />
          <input type="email" name="email" placeholder="Enter your email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your user password"
          />
          <button className="login">Login</button>
          <button className="login">New user? Register.</button>
        </form>
      </div>
    </>
  );
}
export default RegisterUser;
