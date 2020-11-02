import React, { useState } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Arrow from "react-ionicons/lib/IosArrowBack";
import Spinner from "../spinner";
import Navbar from "../../components/layout/Navbar";
import FormLayout from "../form-elements/formLayout";
import InputComponent from "../form-elements/InputComponent";
import TextAreaComponent from "../form-elements/textAreaComponent";
import { addExperience } from "../../redux/actions/profileAction";

const AddExperience = ({
  loading,
  addExperience,
  history,
  param,
  user,
  message,
}) => {
  const [state, setState] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    description: "",
    errors: {},
  });
  const { company, title, location, from, to, description, errors } = state;
  const id = user && user.profile ? user.profile._id : null;

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
    addExperience(state, id, history, param);
  };

  const addExperienceStyle = {
    backgroundColor: "rgb(250, 245, 245)",
  };

  return (
    <div style={addExperienceStyle}>
      <Navbar />
      <div className="container">
        <Link to="/user/dashboard">
          <Arrow fontSize="30px" />
        </Link>
        <FormLayout
          title="Add Experience"
          text="Fill in some credentials about you"
        />
        <small> * = fields marked with * are required</small>
        <form onSubmit={onSubmit}>
          <InputComponent
            type="text"
            name="company"
            value={company}
            onChange={onChange}
            placeholder=" * company"
            errors={errors.company}
            className="form-control form-control-lg"
          />

          <InputComponent
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder=" * Job title"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            placeholder=" * Location"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            placeholder=" * from"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            placeholder="to"
            className="form-control form-control-lg"
          />
          <TextAreaComponent
            name="description"
            value={description}
            onChange={onChange}
            placeholder="brief summary about your position"
            className="form-control form-control-lg"
          />
          {message && <p className="bg-danger text-white p-2">{message}</p>}

          <input
            type="submit"
            value="Submit"
            className="form-control form-control-lg mb-5"
          />
        </form>
      </div>
    </div>
  );
};

// AddExperience.propTypes = {
//   profile: PropTypes.object.isRequired,
//   addExperience: PropTypes.func.isRequired
// };

const mapDispatchToProp = {
  addExperience,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
    message: state.display.message,
    user: state.users.user,
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(withRouter(AddExperience));
