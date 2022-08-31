import React from "react";
import SpotifyLogoGreen from "../Icons/SpotifyLogoGreen";
import LogoutIcon from "../Icons/LogoutIcon";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import SidebarMenuItems from "./SidebarMenuItems";
function SideBar({ selected, setSelected }) {
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    setSelected(item);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <SpotifyLogoGreen />
      </div>
      <div className="sidebar-menu">
        {SidebarMenuItems.map((items) => {
          return (
            <div
              key={items.id}
              className={
                selected === items.id ? "menu-item isActive" : "menu-item"
              }
              onClick={() => handleMenuClick(items.id)}
            >
              <div className="icon">
                <items.icon
                  color={selected === items.id ? "#1ED760" : "#ffff"}
                />
              </div>
              <span className="item-click">{items.name}</span>
            </div>
          );
        })}
      </div>
      <div className="logout" type="submit">
        <LogoutIcon />
        <span
          onClick={() => {
            navigate("/");
          }}
          className="logout-click"
        >
          Logout
        </span>
      </div>
    </div>
  );
}

export default SideBar;
