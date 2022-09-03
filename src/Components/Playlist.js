import React , { useEffect, useState }from "react";
import { getProfile, getPlaylist } from "../API/Index";

const Playlist = ({setSelected}) => {
  const [profilePicture, setProfilePicture] = useState({});
  const [playList, setPlayList] = useState({});
  useEffect(() => {
    (async () => {
      const profileData = await getProfile();
      setProfilePicture(profileData)
    })();
  }, []);

  useEffect(() => {
    (async() => {
      const featuredPlaylist = await getPlaylist()
      setPlayList(featuredPlaylist.playlists)
    })()
    }, []);
  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        Featured Platlist !
      </div>
      <div className="dashboard-content">
        <div className="dashboard-items">
          <div className="card-container">
            {playList?.items?.map((item) => {
              return (
                <div className="cards">
                  <div className="card-top">
                    <img src={item?.images[0]?.url} alt=""/>
                  </div>
                  <div className="card-bottom">
                    <div className="card-heading">{item?.name}</div>
                    <div className="card-description">{item?.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;