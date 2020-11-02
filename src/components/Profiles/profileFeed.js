import React from "react";
import ProfileItem from "./profileItem";

const ProfileFeed = ({ data }) => {
  const renderProfile = () => {
    return data.map((item) => <ProfileItem {...item} key={item._id} />);
  };

  return (
    <div>
      {data && data.length > 0 ? (
        <div>{renderProfile()}</div>
      ) : (
        <p>No Profiles yet.!</p>
      )}
    </div>
  );
};

export default ProfileFeed;
