import React from "react";
import "./UserProfile.css";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <img src={user.avatar_url} alt={user.login} className="profile-image" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
    </div>
  );
}

export default UserProfile;
