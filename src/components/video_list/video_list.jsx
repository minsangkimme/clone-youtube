import React from 'react'
import VideoItem from '../video_item/video_item';

function VideoList(props) {
    return (
        <ul>
            {props.videos.map(video => (<VideoItem key={video.id} video={video} />))}
        </ul>
    )
}

export default VideoList;
