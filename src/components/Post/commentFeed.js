import React from "react";
import CommentItem from "./commentItem";

const CommentFeed = ({ data }) => {
  const renderComment = () => {
    return data.map((item) => (
      <CommentItem {...item} key={data._id}/>
    ));
  };

  return (
    <div className="comment-feed">
      {data && data.length > 0 ? (
        <div>
          {renderComment()}
        </div>
      ) : (
        <p>No comments yet..!</p>
      )}
    </div>
  );
};

export default CommentFeed;
