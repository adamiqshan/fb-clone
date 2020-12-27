import React from 'react'
import StoryReel from "./StoryReel"
import "./Feed.css"
import MessageSender from "./MessageSender"
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5103AQFhwRWxLj-qWQ/profile-displayphoto-shrink_200_200/0/1516648065432?e=1614816000&v=beta&t=TZEQtP7AolV_hTNEQQPUxiKcroPPK33ibaV0rWN9GNQ"
                username="adam"
                image="https://i.pinimg.com/originals/8d/da/77/8dda772088758d82e048cf4f56ca1d8a.png"
                message="first post" />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5103AQFhwRWxLj-qWQ/profile-displayphoto-shrink_200_200/0/1516648065432?e=1614816000&v=beta&t=TZEQtP7AolV_hTNEQQPUxiKcroPPK33ibaV0rWN9GNQ"
                username="adam"
                message="second post" />
        </div>
    )
}

export default Feed
