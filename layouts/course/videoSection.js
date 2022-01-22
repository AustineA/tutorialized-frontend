import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const VideoHolder = () => {
  const video = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  const videoUrl = useSelector(state => state.nowPlaying);
  const canPlay = useSelector(state => state.canPlay);
  const cover = useSelector(state => state.cover);

  const pay = () => {
    if (canPlay) video.current.play();
  };

  const rightClick = e => {
    e.preventDefault();
  };

  useEffect(() => {
    pay();
  }, [videoUrl]);

  useEffect(() => {
    //   console.log(video.current.playbackRate);
    // setWidth(window.innerWidth - 400);

    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // console.log(width);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="video-holder" style={{ width: width }}>
      <video
        ref={video}
        key={videoUrl}
        controlsList="nodownload"
        controls
        width="80%"
        height="584"
        poster={cover}
        onContextMenu={rightClick}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoHolder;
