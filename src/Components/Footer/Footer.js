import React, { useState } from "react";
import "./Footer.css";
import PlayIcon from "../Icons/PlayIcon";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Footer = ({ play, setPlay, allTracks }) => {

  const handlePreviousClick = () => {
    const currentIndex = allTracks.findIndex(track => track.id === play.id);
    if(currentIndex > 0 ){
      setPlay(allTracks[currentIndex-1]);
    }
  }

  const handleNextClick = () => {
    const currentIndex = allTracks.findIndex(track => track.id === play.id);
    if(allTracks.length > currentIndex+1)
    setPlay(allTracks[currentIndex+1]);
  }

  return (
    <div className="footer">
      <div className="song-icon">
        <img src={play?.album?.images?.[2].url} alt="" />
      </div>
      <div className="song">
        <span id="song-name">{play?.name}</span>
        <span id="artist-name">{play?.artists?.[0].name}</span>
      </div>
      <div className="play">
        <PlayIcon />
      </div>
       <AudioPlayer
        autoPlay
        src={play?.preview_url}
        onPlay={e => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={() => handleNextClick()}
        onClickPrevious ={()=> handlePreviousClick()}
      />
    </div>
  );
};

export default Footer;
