import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "https://jsonplaceholder.typicode.com/users"
        });

        if (data) {
          sessionStorage.setItem("token", "123456");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  });
  return (
    <>
      <div> This is Authpage ! </div>
    </>
  );
};

export default Auth;
