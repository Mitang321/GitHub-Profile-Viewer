import React, { useState } from "react";
import "./StarredList.css";

function StarredList({ starred }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = starred.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(starred.length / itemsPerPage);

  return (
    <div className="starred-list">
      <h2>Starred Repositories</h2>
      <ul>
        {currentItems.map((repo) => (
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
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StarredList;
