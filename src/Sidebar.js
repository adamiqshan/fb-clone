import React from 'react'
import SidebarRow from "./SidebarRow"
import "./Sidebar.css"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://avatars2.githubusercontent.com/u/24975326?s=460&u=95470c58edf65201755a40424c894d8b6e56b24c&v=4' title="Adam Iqshan" />
            <SidebarRow icon={<LocalHospitalIcon />} title="COVID-19 Info center" />
            <SidebarRow icon={<EmojiFlagsIcon />} title="Pages" />
            <SidebarRow icon={<PeopleIcon />} title="Friends" />
            <SidebarRow icon={<ChatIcon />} title="Messenger" />
            <SidebarRow icon={<StorefrontIcon />} title="Marketplace" />
            <SidebarRow icon={<VideoLibraryIcon />} title="Videos" />
            <SidebarRow icon={<ExpandMoreIcon />} title="More Items" />
        </div>
    )
}

export default Sidebar
