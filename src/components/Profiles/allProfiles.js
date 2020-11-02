import React, { useEffect } from "react";
import "./index.css";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Spinner from "../spinner";
import Navbar from "../layout/Navbar";
import { getProfiles } from "../../redux/actions/profileAction";
import ProfileFeed from "./profileFeed";

const AllProfiles = ({ getProfiles, loading, profiles }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  if (loading) {
    return <Spinner />;
  } 

  return (
    <>
      <Navbar />
      <div className="profile-header">
        <h1>Developers Profile</h1>
        <p>Coalesce with other developers</p>
        <ProfileFeed data={profiles} />
      </div>
    </>
  );
};

AllProfiles.propTypes = {
  // getProfiles: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
};

const mapDispatchToProp = {
  getProfiles,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
    users: state.users.user,
    errors: state.errors,
    profiles: state.profiles.profiles,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(AllProfiles);
