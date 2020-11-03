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
        <div className="card mb-4 ml-3 mr-3 ">
          <div className="card-body text-left">
            <div key={_id}>
              <h4 className="card-text">{handle}</h4>
              <h6> <span>Status</span> - {status}</h6>
              <h6> <span>Location</span> - {location}</h6>
              <h6> <span>Skills</span> - {skills}</h6>
              <h6> <span>Githubusername</span> - {githubusername}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileItem;
