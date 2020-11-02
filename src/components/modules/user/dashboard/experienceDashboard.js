import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ExperienceDashboard = ({ user }) => {
  const { experience } = user.profile || {};

  const renderExperience = () => {
    return experience.map((item) => (
      <tr key={item._id}>
        <td>{item.company}</td>
        <td>{item.location}</td>
        <td>
          <Moment format="YYYY/MM/DD">{item.to}</Moment>
        </td>
        {/* <td>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td> */}
      </tr>
    ));
  };

  return (
    <div>
      <h4>Experience Skillset</h4>
      {experience && experience.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>To</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderExperience()}</tbody>
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
