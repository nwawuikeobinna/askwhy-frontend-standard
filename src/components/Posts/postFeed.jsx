import React from "react";
import PostItem from "./postItem";

const PostFeed = ({ posts }) => {
  const renderPost = (data) => {
    return data.map((item) => <PostItem {...item} />);
  };

  return (
    <div className="post-feed">
      {posts && posts.length > 0 ? (
        <div>
          <p>{renderPost(posts)}</p>
        </div>
      ) : (
        <p>No post yet..!</p>
      )}
    </div>
  );
};

export default PostFeed;
