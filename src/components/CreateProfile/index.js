import React, { useState } from "react";
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FormLayout from "../form-elements/formLayout";
import Spinner from "../spinner";
import InputComponent from "../form-elements/InputComponent";
import TextAreaComponent from "../form-elements/textAreaComponent";
import { withRouter } from "react-router-dom";
import { createProfile } from "../../redux/actions/profileAction";
import Navbar from "../../components/layout/Navbar";
import Arrow from "react-ionicons/lib/IosArrowBack";

const CreateProfile = ({ loading, createProfile, history, param, message }) => {
  const [state, setState] = useState({
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    githubusername: "",
    facebook: "",
    linkedin: "",
    twitter: "",
  });

  const {
    handle,
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    facebook,
    linkedin,
    twitter,
  } = state;

  if (loading) {
    return <Spinner />;
  }

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(state, history, param);
  };

  const profileStyle = {
    backgroundColor: "rgb(250, 245, 245)",
  };

  return (
    <div style={profileStyle}>
      <Navbar />
      <Link to="/user/dashboard">
        <Arrow fontSize="30px" />
      </Link>
      <FormLayout
        title="Create Your Profile"
        text="Let's get some information about you.!"
        className="mt-1"
      >
        <small> * = required field</small>
        <form onSubmit={onSubmit}>
          <label htmlFor="handle">Handle</label>
          <InputComponent
            type="text"
            name="handle"
            value={handle}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder=" * profile handle"
          />
          <label htmlFor="handle">Status</label>
          <InputComponent
            type="text"
            name="status"
            value={status}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder=" * status/position"
          />
          <label htmlFor="handle">Company</label>
          <InputComponent
            type="text"
            name="company"
            value={company}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder="name of company"
          />
          <label htmlFor="handle">Location</label>
          <InputComponent
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder="location handle"
          />
          <label htmlFor="handle">Website</label>
          <InputComponent
            type="text"
            name="website"
            value={website}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder="your company website here"
          />
          <label htmlFor="handle">Skills</label>
          <InputComponent
            type="text"
            name="skills"
            value={skills}
            onChange={onChange}
            className="form-control form-control-lg"
            placeholder=" * your main specialities"
          />
          <small className="">
            Make use of comma seperated values when including your specialities
            (ie. python, react)
          </small>
          <InputComponent
            type="text"
            name="githubusername"
            value={githubusername}
            onChange={onChange}
            className="form-control form-control-lg mt-3"
            placeholder="githubusername"
          />
          <TextAreaComponent
            name="bio"
            value={bio}
            onChange={onChange}
            placeholder="brief bio"
          />
          <div className="bg-dark">
            <small className="text-white">
              optional : Provide the links to your social accounts
            </small>
            <InputComponent
              type="text"
              name="facebook"
              value={facebook}
              onChange={onChange}
              placeholder="facebook url"
            />
            <InputComponent
              type="text"
              name="linkedin"
              value={linkedin}
              onChange={onChange}
              placeholder="linkedin url"
            />
            <InputComponent
              type="text"
              name="twitter"
              value={twitter}
              onChange={onChange}
              placeholder="twitter url"
            />
          </div>
          {message && <p className="bg-danger text-white p-2">{message}</p>}

          <input
            type="submit"
            value="Submit"
            className="form-control form-control-lg bg-dark text-white mb-5"
          />
        </form>
      </FormLayout>
    </div>
  );
};

const mapDispatchToProp = {
  createProfile,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
    message: state.display.message,
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(withRouter(CreateProfile));
