import React, { useState, useContext } from "react";
import './LoginPopup.css';
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext); // ✅ correct casing
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";

    try {
      const response = await fetch(`${url}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setToken(result.token); // ✅ update context token
        localStorage.setItem("token", result.token); // ✅ persist token
        toast.success(currState === "Login" ? "Login Successful!" : "Registration Successful!");
        setShowLogin(false);
      } else {
        toast.error(result.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container" onSubmit={onLogin}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required />
          )}
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}> Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrState("Login")}> Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
