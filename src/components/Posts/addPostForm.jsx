import React, { useState } from "react";
import InputComponent from "../form-elements/InputComponent";
import Spinner from "../spinner";
import { createPost } from "../../redux/actions/postAction";
import { connect } from "react-redux";

const AddPostForm = ({ createPost, loading }) => {
  const [state, setState] = useState({
    text: "",
  });

  const { text } = state;
  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitClick = (e) => {
    e.preventDefault();
    createPost(state);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <h2>Add Posts</h2>
        <div className="card mb-4">
          <div className="card-header">what's on your mind?</div>
          <div className="card-body">
            <form onSubmit={onSubmitClick}>
              <InputComponent
                type="text"
                name="text"
                value={text}
                onChange={onChange}
                placeholder="create a post"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-sm btn-dark"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProp = {
  createPost,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(AddPostForm);
