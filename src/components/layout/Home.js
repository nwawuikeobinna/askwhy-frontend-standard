import React from "react";
import "./index.css";

const Home = () => {
  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div className="home">
      <div className="container">
        <h2 className="home-header">
          Ask<span>W</span>hy
        </h2>
        <p className="home-paragraph">
          Ask<span>W</span>hy makes it quantril to share ideas, interact,
          communicate, reach out to other developers and most importantly solve
          problems.
        </p>
        <button type="button" className="btn btn-outline-secondary btn-md"> 
          <a href="/register" style={linkStyle}>
            Get Started
          </a>
        </button>
        <h2 className="text-center mt-5">How Does Ask<span>W</span>hy Works?</h2>
        <div className="home-card">
          <div className="row">
            <div className="col-sm-">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Interact</h5>
                  <p className="card-text">
                   Communicate and interact with other developers, share knowledge and work effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-">
              <span className="card">
                <div className="card-body">
                    <h5 className="card-title">Post</h5>
                  <p className="card-text">
                    The community can share content by posting. Posts often provide humor, start posting today.!
                  </p>
                </div>
              </span>
            </div>
            <div className="col-sm-">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Comment</h5>
                  <p className="card-text">
                    The community comments on posts and help get solution to onerous coding questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Share Ideas</h5>
                  <p className="card-text">
                    Share knowledge and ideas with the community and other developers to enable creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
