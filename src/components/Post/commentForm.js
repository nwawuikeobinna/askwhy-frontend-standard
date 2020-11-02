import React, { useState } from "react";
import InputComponent from "../form-elements/InputComponent";
import Spinner from "../spinner";
import { addComment } from "../../redux/actions/postAction";
import { connect } from "react-redux";

const CommentForm = ({ addComment, loading, id }) => {
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
    addComment(id, state); 
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container">
        <div className="card mb-4">
          <div className="card-header">write a comment</div>
          <div className="card-body">
            <form onSubmit={onSubmitClick}>
              <InputComponent
                type="text"
                name="text"
                value={text}
                onChange={onChange}
                placeholder="comment"
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
  addComment,
};

const mapStateToProp = (state) => {
  return {
    loading: state.request.loading,
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(CommentForm);
