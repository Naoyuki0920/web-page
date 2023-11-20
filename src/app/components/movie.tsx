"use client";

import React, { useRef, useEffect } from "react";
export default function Movie() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <React.StrictMode>
      <video
        controls
        muted
        ref={videoRef}
        width="200"
        height="100%"
        border-radius="10px"
        moz-border-radius="10px"
        webkit-border-radius="10px"
      >
        <source src="./movie/app.mp4" type="video/mp4" />
      </video>
    </React.StrictMode>
  );
}
