import React from 'react';
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src="https://media.squawka.com/images/en/2019/12/07202837/son-heung-min-tottenham-burnley-2019.jpg" title="Son"/>
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={SupervisorAccountIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
    </div>
  )
}

export default Sidebar;
