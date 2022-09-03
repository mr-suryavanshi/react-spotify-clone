import React, { useEffect, useState } from "react";
import "./Profile.css";
import { getProfile} from "../../API/Index";

const Profile = () => {
  const [data, setData] = useState();
  
  useEffect(()  => {
    (async () => {
      const profileData = await getProfile();
      setData(profileData)
    })();
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
