import React, { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {currentUser} = useContext(AuthContext)

  return (
    <div>
      <nav>
        <div className="left">
          <a className="logo">
            <img src="/logo.png" alt="" />
            <span>FindUs</span>
          </a>
          <a href="/Home">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
          <a href="/People">People</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user"><img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            </div>
          ) : (
            <>
              <a href="/login">Sign in</a>
              <a href="/register" className="register">
                Sign up
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/Home">Home</a>
            <a href="/About">About</a>
            <a href="/Contact">Contact</a>
            <a href="/People">People</a>
            <a href="/Signin">Sign in</a>
            <a href="/Signup">Sign up</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
