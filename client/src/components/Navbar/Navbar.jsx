import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;

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
          {user ? (
            <div className="user"><img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>John</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
            </div>
          ) : (
            <>
              <a href="/Signin">Sign in</a>
              <a href="/Signup" className="register">
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
