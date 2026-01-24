import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await axios.post(
      "http://localhost:3002/api/auth/login",
      { email, password },
      { withCredentials: true }
    );

    if (data.success) {
      toast.success(data.message);
      console.log("Login successful, navigating to /home");      // toast shows
      navigate("/home");                // navigate immediately
    } else {
      toast.error(data.message);
    }
  } catch (err) {
    console.log(err);
    toast.error("Login failed");
  }
};

  return (
    <div style={{display: 'flex', justifyContent: ' center'}}>
        <div className="form_container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Enter password"
          onChange={handleOnChange}
        />
        <button type="submit">Login</button>
        <span>
          Don’t have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
