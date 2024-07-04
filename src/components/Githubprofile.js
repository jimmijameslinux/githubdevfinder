import React from "react";
import "./Githubprofile.css";

export const GithubProfile = ({ profile }) => {
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt={profile.login} />
      <div className="profile-info">
        <div className="profile-header">
          <h2>{profile.name}</h2>
          <p className="username">@{profile.login}</p>
          <p className="joined-date">Joined {new Date(profile.created_at).toLocaleDateString()}</p>
        </div>
        <p className="bio">{profile.bio || "This profile has no bio"}</p>
        <div className="profile-stats">
          <div>
            <h3>Repos</h3>
            <p>{profile.public_repos}</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>{profile.followers}</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>{profile.following}</p>
          </div>
        </div>
        <p>Location: {profile.location || "Not Available"}</p>
        <p>Website: 
          <a href={profile.blog} target="_blank" rel="noopener noreferrer">
            {profile.blog || "Not Available"}
          </a>
        </p>
        <p>Twitter: {profile.twitter_username || "Not Available"}</p>
        <p>Company: {profile.company || "Not Available"}</p>
      </div>
    </div>
  );
};
