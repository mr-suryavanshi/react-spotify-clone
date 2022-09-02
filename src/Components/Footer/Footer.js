import React from "react";
import "./Footer.css";
import PlayIcon from "../Icons/PlayIcon";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {useSelector ,useDispatch} from "react-redux"

const Footer = ({ setPlay, allTracks }) => {

  const play = useSelector(state => state.play)
  const dispatch = useDispatch();
  console.log("useSelector play",play)

  const handlePreviousClick = () => {
    const currentIndex = allTracks.findIndex(track => track.id === play.id);
    if(currentIndex > 0 ){
      const previous = allTracks[currentIndex-1];
      const action = {
        type: 'CURRENT_SONG',
        play: previous
      }
      dispatch(action)
      console.log("perivious",play);
    }
  }


  // const dispatch = useDispatch()

  const handleNextClick = () => {
    const currentIndex = allTracks.findIndex(track => track.id === play.id);
    if(allTracks.length > currentIndex+1){
      const next = allTracks[currentIndex+1];
      const action = {
        type: 'CURRENT_SONG',
        play: next
      }
      dispatch(action)
    }
    // setPlay(allTracks[currentIndex+1]);
    console.log("Next",play);
  }

  // const handleCurrentTrack = () => {
  //   const action = {
  //     type: 'CURRENT_SONG',
  //     play: play
  //   }
  //   dispatch(action)
  //   console.log("dispatch play: ",play)
  // }
  
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
        onClickNext={() =>handleNextClick()}
        onClickPrevious ={()=> handlePreviousClick()}
      />
    </div>
  );
};

export default Footer;
