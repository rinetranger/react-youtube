import React from 'react'
import Youtube from 'react-youtube'


const VideoPlay = ({id}) => {
    return (
        <div>
            <Youtube videoId={id} />
        </div>
    )
}

export default VideoPlay
