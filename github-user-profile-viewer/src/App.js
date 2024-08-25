import React, { useState } from "react";
import axios from "axios";
import UserProfile from "./components/UserProfile";
import RepositoryList from "./components/RepositoryList";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [username, setUsername] = useState("");

  const fetchUserData = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
        return axios.get(response.data.repos_url);
      })
      .then((response) => setRepositories(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>GitHub User Profile Viewer</h1>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="username-input"
        />
        <button onClick={fetchUserData} className="fetch-button">
          Fetch User
        </button>
      </div>
      {user && <UserProfile user={user} />}
      {repositories.length > 0 && (
        <RepositoryList repositories={repositories} />
      )}
    </div>
  );
}

export default App;
