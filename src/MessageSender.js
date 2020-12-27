import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from "@material-ui/core"
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from "firebase"

function MessageSender() {

    const [{ user }, dispatch] = useStateValue()

    const [input, setInput] = useState("")
    const [imageURL, setImgaeURL] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        });

        setInput("");
        setImgaeURL("")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form action="">
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`} />
                    <input value={imageURL} onChange={e => setImgaeURL(e.target.value)} type="text" placeholder="image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">Hidden Button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon style={{ color: "red" }} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsIcon style={{ color: "orange" }} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
