import React from "react";
import "./RepositoryDetailsModal.css";

function RepositoryDetailsModal({ repo, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content show" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{repo.name}</h2>
        <p>{repo.description || "No description available"}</p>
        <ul>
          <li>
            <strong>Created at:</strong>{" "}
            {new Date(repo.created_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Last updated:</strong>{" "}
            {new Date(repo.updated_at).toLocaleDateString()}
          </li>
          <li>
            <strong>Open issues:</strong> {repo.open_issues_count}
          </li>
          <li>
            <strong>Forks:</strong> {repo.forks_count}
          </li>
          {repo.topics && (
            <li>
              <strong>Topics:</strong> {repo.topics.join(", ")}
            </li>
          )}
        </ul>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default RepositoryDetailsModal;
