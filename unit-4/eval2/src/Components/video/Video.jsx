import Button from "../common/Button";
import React, {useState, useRef} from "react";

function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const VideoPlayer = useRef();

const handleStart = () => {
  
  VideoPlayer.current.play()
}
const handlePause = () => {
  VideoPlayer.current.pause()
}
const handleSkip = () => {
  
}

  return (
    <div>
      <video ref={VideoPlayer} data-testid="video-container" width="400" controls>
        <source
          src="https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/28028/guf8bBRwEwJsL01geZELebV0BmSX3jqkKNPVpLNV.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <Button handleStart={handleStart}>PLAY</Button>
        <Button handleStart={handlePause}>PAUSE</Button>
        <Button handleStart={handleSkip}>SKIP 30 SECONDS</Button>
      </div>
    </div>
  );
}

export default VideoPlayer;
