import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="Username"></input>
        <input required type="email" placeholder="Email"></input>
        <input required type="password" placeholder="Password"></input>
        <button>Register</button>
        <p>Error!!</p>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
