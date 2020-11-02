import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getPosts } from "../../redux/actions/postAction";
import AddPostForm from "../Posts/addPostForm";
import PostFeed from "../Posts/postFeed";
import Spinner from "../spinner";
// import { deletePost } from "../../redux/actions/postAction";
import Navbar from "../layout/Navbar";

const AllPosts = (props) => {
  const { getPosts, posts, loading } = props;

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <AddPostForm />
        <PostFeed posts={posts} />
      </div>
      {/* <button onClick={onDeletePost}>Delete post</button> */}
    </div>
  );
};

const mapDispatchToProp = {
  getPosts,
  // deletePost,
};

const mapStateToPops = (state) => {
  return {
    posts: state.posts.posts,
    user: state.users.user,
    loading: state.request.loading,
  };
};

export default connect(mapStateToPops, mapDispatchToProp)(AllPosts);
