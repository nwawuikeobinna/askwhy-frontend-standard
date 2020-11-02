import React from "react";
import './index.css'

const ProfileItem = ({
  handle,
  githubusername,
  status,
  location,
  skills,
  _id,
}) => {
  return (
    <div>
      <div className="container">
        <div className="card mb-4 ml-3 mr-3 border-dark">
          <div className="card-body text-left">
            <div key={_id}>
              <h4 className="card-text">{handle}</h4>
              <p >{status}</p>
              <p>{location}</p>
              <p>{skills}</p>
              <p>{githubusername}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
