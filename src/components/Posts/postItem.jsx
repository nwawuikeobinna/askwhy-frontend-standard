import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { likePost } from "../../redux/actions/postAction";
// import CommentFeed from "../Post/commentFeed";

const PostItem = ({
  comments,
  likes,
  text,
  handle,
  // user,
  // name,
  date,
  _id,
  likePost,
}) => {
  const onLikeClick = (id) => {
    likePost(id);
    console.log("Id = ", id);
  };

  return (
    <>
      <div className="card w-40 mb-4">
        <h5 className="card-header bg-dark text-white mb-3">{handle}</h5>
        <div key={_id}>
          <p className="card-text ml-3">{text}</p>
          <span className="ml-3">
            {" "}
            <button
              type="button"
              className="btn btn-outline-dark mb-3"
              onClick={() => onLikeClick(_id)}
            >
              {likes.length} Like
            </button>
          </span>

          <span className="ml-3">
            <Link to={`/post/${_id}`} className="btn btn-outline-dark mb-3">
              {comments.length} Comments
            </Link>
          </span>
          <div className="card-footer">
            <Moment format="MMM/Do/YY">
              <h6 className="ml-3">{date}</h6>
            </Moment>
          </div>
        </div>
        {/* <CommentFeed data={comments}/> */}
      </div>
    </>
  );
};

const mapDispatchToProp = {
  likePost,
};

export default connect(null, mapDispatchToProp)(PostItem);
