import React from "react";
import { FaUserAlt, FaStar, FaCodeBranch } from "react-icons/fa";
import "./UserStats.css";

function UserStats({ user }) {
  return (
    <div className="user-stats">
      <h2>User Statistics</h2>
      <div className="stats-container">
        <div className="stat-item">
          <FaCodeBranch className="stat-icon" />
          <div className="stat-content">
            <h3>{user.public_repos}</h3>
            <p>Public Repositories</p>
          </div>
        </div>
        <div className="stat-item">
          <FaUserAlt className="stat-icon" />
          <div className="stat-content">
            <h3>{user.followers}</h3>
            <p>Followers</p>
          </div>
        </div>
        <div className="stat-item">
          <FaStar className="stat-icon" />
          <div className="stat-content">
            <h3>{user.following}</h3>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStats;
