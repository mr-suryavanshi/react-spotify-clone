import React from "react";
import PlayIcon from "../Icons/PlayIcon";
import "./Search.css";

function SearchItem({ data, setPlay }) {

  const convertTimeStamp = (data) =>{
    const minutes = Math.floor(data/60000);
    const seconds = ((data % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
  }
  return (
    <div className="search-item">
      <div className="search-song-info">
        <div className="song-info-left">
          <div className="search-song-icon">
            <img src={data?.album.images?.[0].url} alt="" />
          </div>
          <div className="song">
            <div className="search-song">
              <span id="search-song-name">{data?.name}</span>
            </div>
            <span id="search-artist-name">{data?.name}</span>
          </div>
        </div>
        <div className="song-info-right">
          <div className="search-play-info">
            <div className="play-duration">{convertTimeStamp(data?.duration_ms)}</div>
            <div className="play" onClick={()=> {setPlay(data)} }>
              <PlayIcon width="25" height="25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;

