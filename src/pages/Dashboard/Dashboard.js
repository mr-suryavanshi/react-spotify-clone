import React, { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";
import DashboardHome from "../../Components/SideBar/DashboardHome";
import Profile from "../../Components/Profile/Profile";
import Search from "../../Components/Search/Search";
import Playlist from "../../Components/Playlist";
import "./dashboard.css";
// import {useSelector} from "react-redux";


function Dashboard() {
  const [selected, setSelected] = useState("home");
  const [play, setPlay] = useState("");
  const [allTracks,setAllTracks] = useState([]);
  // const [play, setPlay] = useState("");

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <SideBar selected={selected} setSelected={setSelected} />
        </div>
        <div className="dashboard-home">
          {selected === "home" && <DashboardHome setSelected={setSelected}/>}
          {selected === "profile" && <Profile />}
          {selected === "search" && <Search play ={play} setPlay={setPlay} setAllTracks={setAllTracks}/>}
          {selected === "playlist" && <Playlist />}
        </div>
      </div>
      <div className="dashboard-footer">
        <Footer play ={play} setPlay={setPlay} setSelected={setSelected} allTracks={allTracks}/>
      </div>
    </div>
  );
}

export default Dashboard;
