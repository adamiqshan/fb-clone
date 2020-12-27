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
import { useStateValue } from "./StateProvider"

function Sidebar() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
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
