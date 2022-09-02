import React, { useEffect, useState } from "react";
import BellIcon from "../Icons/BellIcon";
import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

function DashboardHome({ setSelected }) {
  const [profilePicture, setProfilePicture] = useState({});
  const [playList, setPlayList] = useState({});
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  const loggedIn = useSelector(state => state.loggedIn)

  const isLoggedIn = useSelector(state => state.isLoggedIn)
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://api.spotify.com/v1/me`;
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProfilePicture(data);
      })
      .catch((error) => {
        console.log("error", error);
        alert(error);
      });
      if(!isLoggedIn){
        navigate("/");
      }
  }, []);

  useEffect(() => {
    const url = `	https://api.spotify.com/v1/browse/featured-playlists?limit=4`;
    console.log(loggedIn)
    fetch(url, {
      method: "get",
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPlayList(data.playlists);
      })
      .catch((error) => console.log(error));
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
