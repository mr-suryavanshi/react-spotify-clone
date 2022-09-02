import React, { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const url = `https://api.spotify.com/v1/me`;
    const token = process.env.REACT_APP_ACCESS_TOKEN;
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Profile">
      <div className="profile-header">Profile</div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={data?.images?.[0].url} alt=""/>
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <div className="profile-username">{data?.display_name}</div>
            <div className="profile-email"></div>
            <button type="button">
              <a href={data?.external_urls?.spotify} target="blank">
                Open in spotify
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
