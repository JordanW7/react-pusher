import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section className="video">
      <iframe
        title="video"
        className="video-iframe"
        src="https://www.youtube.com/embed/XOacA3RYrXk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
};

export default Video;
