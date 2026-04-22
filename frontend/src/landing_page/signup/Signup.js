import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  // ✅ ONLY ONE FUNCTION CALL
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3002/api/auth/signup",
        { email, username, password }
      );

      console.log("RESPONSE:", res.data);

      if (res.data.success === true) {
        handleSuccess(res.data.message);

        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(res.data.message);
      }
    } catch (error) {
      console.error(error);
      handleError("Something went wrong");
    }

    // clear inputs
    setInputValue({
      email: "",
      username: "",
      password: "",
    });
  };

  // return (
  //   <div style={{ display: "flex", justifyContent: "center" }}>
  //     <div className="form_container">
  //       <h2>Signup Account</h2>

  //       {/* ❌ REMOVED onSubmit TO AVOID DOUBLE CALL */}
  //       <form>
  //         <div>
  //           <label>Email</label>
  //           <input
  //             type="email"
  //             name="email"
  //             value={email}
  //             placeholder="Enter your email"
  //             onChange={handleOnChange}
  //             required
  //           />
  //         </div>

  //         <div>
  //           <label>Username</label>
  //           <input
  //             type="text"
  //             name="username"
  //             value={username}
  //             placeholder="Enter your username"
  //             onChange={handleOnChange}
  //             required
  //           />
  //         </div>

  //         <div>
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             name="password"
  //             value={password}
  //             placeholder="Enter your password"
  //             onChange={handleOnChange}
  //             required
  //           />
  //         </div>

  //         {/* ✅ FIXED BUTTON */}
  //         <button type="button" onClick={handleSubmit}>
  //           Submit
  //         </button>

  //         <span>
  //           Already have an account?{" "}
  //           <Link to="/login">Login</Link>
  //         </span>
  //       </form>

  //       <ToastContainer />
  //     </div>
  //   </div>

  return (
  <div className="page-wrapper">
    <div className="form_container">
      <h2>Signup Account</h2>

      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>

        <span>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  </div>

  );
};

export default Signup;