import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../../redux/actions/postAction";
import CommentForm from "./commentForm";
import CommentFeed from "./commentFeed";
import Navbar from "../../components/layout/Navbar";
import ArrowBack from "react-ionicons/lib/MdArrowBack";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const { getPost, match, post } = props;
  const { id } = match.params;
  const { comments } = post || {};

  useEffect(() => {
    getPost(id);
  }, [getPost]);

  return (
    <>
      <Navbar />
      <Link to="/user/posts">
        <ArrowBack fontSize="30px" className="mb-4" />
      </Link>
      <CommentForm id={id} />
      <CommentFeed data={comments} />
    </>
  );
};

const mapDispatchToProp = {
  getPost,
};

const mapStateToProps = ({ posts }) => {
  return {
    post: posts.post,
  };
};
export default connect(mapStateToProps, mapDispatchToProp)(SinglePost);
