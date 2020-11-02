import React from "react";
import Moment from "react-moment";

const CommentItem = ({ date, text, handle, _id }) => {
  return (
    <>
      <div className="container">
        <div className="card mb-4 ml-3 mr-3">
          <div className="card-body">
            <div key={_id}>
              <p className="card-text">{text}</p>
              <p className="card-text">{handle}</p>
              <span className="text-center">
                <Moment format="MMM/Do/YY">{date}</Moment>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentItem;
