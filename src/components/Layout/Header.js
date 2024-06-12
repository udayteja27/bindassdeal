// src/components/Layout/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearSession, getSession } from "../../utils/session";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const user = getSession();

  const handleLogout = () => {
    clearSession();
    navigate("/");
  };

  return (
    <header className="header">
      <h1 className="title">Bindassdeals</h1>
      <nav>
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <button className="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
