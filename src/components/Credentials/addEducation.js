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
import { addEducation } from "../../redux/actions/profileAction";

const AddEducation = ({ loading, addEducation, user, history, message}) => {
  const [state, setState] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    description: "",
  });
  const { school, degree, fieldofstudy, from, to, description } = state;
  const id = user && user.profile ? user.profile._id : null;

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addEducation(state, id, history);
  };

  if (loading) {
    return <Spinner />;
  }

  const addEducationStyle = {
    backgroundColor: "rgb(250, 245, 245)",
  };

  return (
    <div style={addEducationStyle}>
      <Navbar />
      <div className="container">
        <Link to="/user/dashboard">
          <Arrow fontSize="30px" />
        </Link>
        <FormLayout
          title="Add Education"
          text="Fill in some credentials about you"
        />
        <small> * = fields marked with * are required</small>
        <form onSubmit={onSubmit} autoComplete="off">
          <InputComponent
            type="text"
            name="school"
            value={school}
            onChange={onChange}
            placeholder=" * school"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="text"
            name="degree"
            value={degree}
            onChange={onChange}
            placeholder=" * degree"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="text"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
            placeholder=" * fieldofstudy"
            className="form-control form-control-lg"
          />
          <InputComponent
            type="date"
            name="from"
            value={from}
            onChange={onChange}
            placeholder="from"
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
            placeholder="brief summary about your Education"
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

const mapDispatchToProp = {
  addEducation,
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
)(withRouter(AddEducation));
