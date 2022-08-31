import React , { useEffect, useState }from "react";

const Playlist = ({setSelected}) => {
  const [profilePicture, setProfilePicture] = useState({});
  const [playList, setPlayList] = useState({});
  const token = process.env.REACT_APP_ACCESS_TOKEN;
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
  }, []);

  useEffect(() => {
    const url = `	https://api.spotify.com/v1/browse/featured-playlists?limit=8`;

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