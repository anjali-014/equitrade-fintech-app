import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, , removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.get(
          "http://localhost:3002/api/auth/verify",
          { withCredentials: true }
        );

        if (data.status) {
          setUsername(data.user);
          toast.success(`Welcome ${data.user}`);
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyUser();
  }, [cookies, navigate, removeCookie]);

  const logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <>
      <div className="home_page">
        <h2>Welcome {username}</h2>
        <button onClick={logout}>Logout</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
