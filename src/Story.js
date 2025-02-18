import React from 'react'
import "./Story.css"
import Avatar from '@material-ui/core/Avatar';

function Story({ title, image, profileSrc }) {
    return (
        <div className="story" style={{ backgroundImage: `url(${image})` }}>
            <Avatar src={profileSrc} className="story__avatar" />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
