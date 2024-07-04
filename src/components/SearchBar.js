import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./SearchBar.css";
import { GithubProfile } from "./Githubprofile";

export const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchProfile = async ({ queryKey }) => {
    const [, term] = queryKey;
    const response = await fetch(`https://api.github.com/users/${term}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data: profile, isError, error, isLoading } = useQuery({
    queryKey: ["githubProfile", searchTerm],
    queryFn: fetchProfile,
    enabled: !!searchTerm,
  });

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(username);
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {profile && <GithubProfile profile={profile} />}
    </div>
  );
};
