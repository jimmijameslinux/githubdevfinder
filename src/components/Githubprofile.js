import React from "react";
import "./Githubprofile.css";
import { useTheme } from "../context/ThemeContext";
import location from "../assets/location.png";
import locationdark from "../assets/locationdark.png";
import link from "../assets/link.png";
import linkdark from "../assets/linkdark.png";
import twitter from "../assets/twitter.png";
import twitterdark from "../assets/twitterdark.png";
import building from "../assets/building.png";
import buildingdark from "../assets/buildingdark.png";

function DateConversion(profile) {
  let date = new Date(profile);
  let options = { day: '2-digit', month: 'long', year: 'numeric' };
  let formattedDate = date.toLocaleDateString('en-GB', options);
  return formattedDate;

}

export const GithubProfile = ({ profile }) => {
  // let date = new Date(profile.created_at);
  // let options = { day: '2-digit', month: 'long', year: 'numeric' };
  // let formattedDate = date.toLocaleDateString('en-GB', options);
  const { darkMode } = useTheme();
  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt={profile.login} />
      <div className="profile-info">
        <div className="profile-header">
          <div>
            <h2>{profile.name}</h2>
            <p className="username">
              <a style={{textDecoration:"none"}} href={profile.html_url} target="_blank" rel="noreferrer">
                @{profile.login}
              </a>
            </p>
          </div>
          <p className="joined-date">Joined {DateConversion(profile.created_at)}</p>
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

        <div className="social">
          <div>
            <p style={{ opacity: `${profile.location ? "1" : "0.5"}` }}>
              <img className="location" src={darkMode ? location : locationdark} alt="locaion" />
              {profile.location || "Not Available"}
            </p>

            <p style={{ opacity: `${profile.blog ? "1" : "0.5"}` }}>
              <img className="link" src={darkMode ? link : linkdark} alt="locaion" />
              {
                profile.blog ?
                  <a href={profile.blog} target="_blank" rel="noopener noreferrer">
                    {profile.blog}
                  </a>
                  : "Not Available"
              }
            </p>
          </div>
          <div>

            <p style={{ opacity: `${profile.twitter_username ? "1" : "0.5"}` }}>
              <img className="twitter" src={darkMode ? twitter : twitterdark} alt="locaion" />
              {profile.twitter_username || "Not Available"}
            </p>

            <p style={{ opacity: `${profile.company ? "1" : "0.5"}` }}>
              <img className="building"
                src={darkMode ? building : buildingdark}
                alt="locaion" />
              {profile.company || "Not Available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
