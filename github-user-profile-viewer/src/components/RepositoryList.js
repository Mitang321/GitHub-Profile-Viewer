import React, { useState } from "react";
import "./RepositoryList.css";
import RepositoryDetailsModal from "./RepositoryDetailsModal.js";

function RepositoryList({ repositories }) {
  const [sortOption, setSortOption] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const itemsPerPage = 5;

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedRepositories = [...repositories].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    } else if (sortOption === "stars-asc") {
      return a.stargazers_count - b.stargazers_count;
    } else if (sortOption === "stars-desc") {
      return b.stargazers_count - a.stargazers_count;
    }
    return 0;
  });

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleCloseModal = () => {
    setSelectedRepo(null);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRepos = sortedRepositories.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="repository-list">
      <h2>Repositories</h2>
      <div className="sort-options">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="stars-asc">Stars (Ascending)</option>
          <option value="stars-desc">Stars (Descending)</option>
        </select>
      </div>
      <ul>
        {currentRepos.map((repo) => (
          <li key={repo.id} className="repository-item">
            <div onClick={() => handleRepoClick(repo)} className="repo-details">
              <h3>{repo.name}</h3>
              <p>{repo.description || "No description"}</p>
            </div>
            <div className="repo-meta">
              <span className="repo-language">{repo.language}</span>
              <span className="repo-stars">⭐ {repo.stargazers_count}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({
          length: Math.ceil(repositories.length / itemsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {selectedRepo && (
        <RepositoryDetailsModal
          repo={selectedRepo}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default RepositoryList;
