import React from "react";
import "./UserProfile.css";

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar_url} alt={user.login} className="profile-image" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-bio">{user.bio || "No bio available"}</p>
      </div>
      <div className="profile-details">
        {user.location && (
          <p>
            <strong>Location:</strong> {user.location}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
