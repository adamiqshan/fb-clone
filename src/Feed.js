import React, { useState, useEffect } from 'react'
import StoryReel from "./StoryReel"
import "./Feed.css"
import MessageSender from "./MessageSender"
import Post from './Post'
import db from "./firebase"


function Feed() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        );
        // console.log(posts[0].data)
    }, []);


    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (

                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />

            ))}
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5103AQFhwRWxLj-qWQ/profile-displayphoto-shrink_200_200/0/1516648065432?e=1614816000&v=beta&t=TZEQtP7AolV_hTNEQQPUxiKcroPPK33ibaV0rWN9GNQ"
                username="adam"
                message="second post" />
        </div>
    )
}

export default Feed
