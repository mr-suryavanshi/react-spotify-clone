import React, { useEffect, useState } from "react";
import BellIcon from "../Icons/BellIcon";
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {getProfile ,getDashboardPlaylist} from "../../API/Index";

function DashboardHome({ setSelected }) {
  const [profilePicture, setProfilePicture] = useState({});
  const [playList, setPlayList] = useState({});
  const dispatch = useDispatch()

  const action = {
    type: "LOGGED_IN",
    isLoggedIn: true
  }
  dispatch(action);
  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      const profileData = await getProfile();
      setProfilePicture(profileData)
    })();

    (async() => {
      const Playlist = await getDashboardPlaylist()
      setPlayList(Playlist.playlists)
    })()
    console.log("isLoggedIn",isLoggedIn)
      if(!isLoggedIn){
        navigate("/");
      }
  }, []);

  return (
    <div className="dashboard-section">
      <div className="dashboard-header">
        Good Evening !
        <span>
          <BellIcon height={25} width={25} />
          <img
            src={profilePicture?.images?.[0]?.url}
            onClick={() => setSelected("profile")} alt=""
          />
        </span>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-items">
          <div className="item-header">
            Featured playlist
            <button type="button" className="see-all" onClick={() => setSelected("playlist")}>
              See All
            </button>
          </div>
          <div className="card-container">
            {playList?.items?.map((item) => {
              return (
                <div className="cards" key={item.id}>
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
}

export default DashboardHome;
