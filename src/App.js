import "./styles.css";
import { Routes, Route, Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import User from "./components/users";
import Demo from "./components/demo";
import Auth from "./components/Auth";

const Layout = () => {
  const token = sessionStorage.getItem("token");

  return (
    <>
      {token === "123456" ? (
        <>
          <Navbar />
          <Outlet />
        </>
      ) : (
        <Navigate to="/auth" />
      )}
    </>
  );
};

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="demo" element={<Demo />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button style={{ marginTop: "2rem" }} onClick={() => navigate("/")}>
          Go To Home
        </button>
        <button style={{ marginTop: "2rem" }} onClick={() => navigate("/user")}>
          Go To User
        </button>
        <button style={{ marginTop: "2rem" }} onClick={() => navigate("/demo")}>
          Go To Demo
        </button>
        <button style={{ marginTop: "2rem" }} onClick={() => navigate("/auth")}>
          Go To Auth
        </button>
      </div>
    </>
  );
}
