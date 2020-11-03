import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const ExperienceDashboard = ({ user }) => {
  const { experience } = user.profile || {};

  const renderExperience = () => {
    return experience.map((item) => (
      <tr key={item._id}>
        <td>{item.company}</td>
         <td>{item.description}</td>
         <td>{item.location}</td>
        <td>{item.title}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h4 className="mb-4 ">Experience Skillset</h4>
      {experience && experience.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="table-head">Company</th>
              <th className="table-head">Description</th>
              <th className="table-head">Location</th>
              <th className="table-head">Title</th>
              <th></th>
            </tr>
            {renderExperience()}
          </thead>
        </table>
      ) : (
        <p>No credentials found..</p>
      )}
    </div>
  );
};

PropTypes.ExperienceDashboard = {
  user: PropTypes.object.isRequired,
};

export default ExperienceDashboard;
