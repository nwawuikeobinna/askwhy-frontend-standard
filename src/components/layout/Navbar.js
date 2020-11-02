import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { signout } from "../../redux/actions/signoutAction";
import { connect } from "react-redux";

const Navbar = ({ signout }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    signout();
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Ask<span>W</span>hy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/user/dashboard">
                  {" "}
                  Dashboard
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
               <li className="nav-item">
                <a href="/user/profiles">Developers</a>
              </li>
              <li className="nav-item">
                <a href="/user/posts">Posts</a>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item">
                <a href="/" onClick={onLogoutClick}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const mapDispatchToProp = {
  signout,
};

export default connect(null, mapDispatchToProp)(Navbar);
