import React from "react";
import './index.css'
import { connect } from "react-redux";
import Navbar from "../../../layout/Navbar";
import { getCurrentProfile, deleteAccount } from "../../../../redux/actions/profileAction";
import Spinner from "../../../spinner";
import PropTypes from "prop-types";
import ProfileDashboard from "./profileDashboard";
import ExperienceDashboard from "./experienceDashboard";
import EducationDashboard from "./educationDashboard";

const Dashboard = ({ user, loading, deleteAccount}) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Dashboard</h2>
        {user && (
          <div className="user-heading">
            <p>
              {" "}
              Welcome <strong>{user.name}</strong>
            </p>
          </div>
        )}

        <ProfileDashboard user={user} />
        {user && <ExperienceDashboard user={user} />}
        <EducationDashboard user={user} />
        <button onClick={() => deleteAccount()} className="btn btn-danger mb-5">
          Delete My Account
        </button>

        
      </div>
    </>
  );
};

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapDispatchToProp = {
  getCurrentProfile,
  deleteAccount
};

const mapStateToProp = (state) => {
  return {
    user: state.users.user,
    loading: state.request.loading,
    profile: state.profiles.profile,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Dashboard);
