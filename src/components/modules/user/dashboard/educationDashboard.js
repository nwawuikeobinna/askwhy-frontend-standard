import React from "react";
import PropTypes from "prop-types";
import './index.css'

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
      <h4 className="mb-4">Education Skillset</h4>
      {education && education.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="table-head">Degree</th>
              <th className="table-head">Fieldofstudy</th>
              <th className="table-head">School</th>
            </tr>
            {renderEducation()}
          </thead>
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
