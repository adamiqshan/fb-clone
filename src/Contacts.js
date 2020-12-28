import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./Contacts.css"


function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts__top">
                <h4>Contacts</h4>
                <div className="contacts__icons">
                    <VideoCallIcon />
                    <SearchIcon />
                    <MoreHorizIcon />
                </div>
            </div>

        </div>
    )
}

export default Contacts
