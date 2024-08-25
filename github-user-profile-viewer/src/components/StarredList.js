import React from "react";
import "./StarredList.css";

function StarredList({ starred }) {
  return (
    <div className="starred-list">
      <h2>Starred Repositories</h2>
      <ul>
        {starred.map((repo) => (
          <li key={repo.id} className="starred-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div className="repo-details">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description"}</p>
              </div>
              <div className="repo-meta">
                <span className="repo-language">{repo.language}</span>
                <span className="repo-stars">⭐ {repo.stargazers_count}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StarredList;
