import { Avatar } from "@material-ui/core";
import React from 'react';
import './Story.css';
function Story({ image, profileSrc, title }) {
    return (

        <div>
            <div style={{ backgroundImage: `url(${image})` }} className="story">
                <Avatar className="story__avatar" src={profileSrc} />
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Story
