import React, { useState, useEffect } from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import "./Contacts.css"
import { Avatar } from "@material-ui/core"
import db from "./firebase"


function Contacts() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        db.collection("contacts").onSnapshot((snapshot) =>
            setContacts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );

    }, []);

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
            {contacts.map((contact) => (
                <div className="contacts__list">
                    <Avatar src={contact.data.profilePic} />
                    <h4>{contact.data.username}</h4>
                </div>

            ))}
        </div>

    )
}

export default Contacts