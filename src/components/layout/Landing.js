import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Home from "./Home";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  Ask<span>W</span>hy
                </h1>
                <p className="lead"> Ask<span>W</span>hy is an open community for developers. We help you get answers to your coding questions, share knowledge with everyone and connect them to solutions that enables performance, growth and recognition</p>
                <hr />
                <Link to="/register" className=" mr-2">
                  <button type="button" className="btn btn-outline-secondary btn-lg text-white">Sign up</button>
                </Link>
                <Link to="/login">
                <button type="button" className="btn btn-outline-secondary btn-lg text-white">Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
};

export default Landing;
