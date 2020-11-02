import React from "react";
import { Link } from "react-router-dom";
import BriefCase from "react-ionicons/lib/IosBriefcase";
import Paper from "react-ionicons/lib/MdPaper";
import Pin from "react-ionicons/lib/MdAlert";

const ProfileDashboard = () => {
  return (
    <>
      <div className="container">
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link to="/user/create-profile" className="nav-link text-dark">
                  <Pin className="pt-2" />
                  Create Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/add-experience" className="nav-link text-dark">
                  <BriefCase className="pt-2" />
                  Add Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user/add-education" className="nav-link text-dark">
                  <Paper className="pt-2" />
                  Add Education
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;
