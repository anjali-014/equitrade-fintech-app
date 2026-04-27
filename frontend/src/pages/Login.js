// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = inputValue;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("Sending login:", email, password);

//       const res = await axios.post(
//         "http://localhost:3002/api/auth/login",
//         {
//           email: email.trim().toLowerCase(),
//           password: password.trim(),
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log("RESPONSE:", res.data);

//       if (res.data.success) {
//         toast.success(res.data.message);

//         // ✅ Correct redirect (inside React app)
//         setTimeout(() => {
//          navigate("/home");
//         }, 800);

//       } else {
//         toast.error(res.data.message);
//       }

//     } catch (err) {
//       console.log("LOGIN ERROR:", err.response?.data || err.message);

//       toast.error(
//         err.response?.data?.message || "Login failed"
//       );
//     }
//   };

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <div className="form_container">
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             placeholder="Enter email"
//             onChange={handleOnChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             value={password}
//             placeholder="Enter password"
//             onChange={handleOnChange}
//             required
//           />

//           <button type="submit">Login</button>

//           <span>
//             Don’t have an account?{" "}
//             <Link to="/signup">Signup</Link>
//           </span>
//         </form>

//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios"; // ✅ use centralized API
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending login:", email, password);

      const res = await API.post("/api/auth/login", {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      });

      console.log("RESPONSE:", res.data);

      if (res.data.success) {
        toast.success(res.data.message);

        setTimeout(() => {
          navigate("/home");
        }, 800);
      } else {
        toast.error(res.data.message);
      }

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);

      toast.error(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="form_container">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleOnChange}
            required
          />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleOnChange}
            required
          />

          <button type="submit">Login</button>

          <span>
            Don’t have an account?{" "}
            <Link to="/signup">Signup</Link>
          </span>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;