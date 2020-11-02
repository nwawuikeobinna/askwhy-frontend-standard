import React from "react";
import PropTypes from "prop-types";

const EducationDashboard = ({ user }) => {

  const { education } = user.profile || {};

  const renderEducation = () => {
    return education.map((item) => (
      <tr key={item._id}>
        <td>{item.degree}</td>
        <td>{item.fieldofstudy}</td>
        <td>{item.school}</td>
        <td>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <h4>Education Skillset</h4>
      {education && education.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Degree</th>
              <th>Fieldofstudy</th>
              <th>School</th>
            </tr>
          </thead>
          <tbody>{renderEducation()}</tbody>
        </table>
      ) : (
        <p>No credentials found..</p>
      )}
    </div>
  );
};

PropTypes.EducationDashboard = {
  user: PropTypes.object.isRequired,
};

export default EducationDashboard;
