import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src="https://www.hulu.com/static/hitch/s3/attachments/ckit1rms100id1u6pd7eayq3o-palm-springs.jpg" alt=''/>
            <p>This is a film about coding</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
