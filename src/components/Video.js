import React from 'react';
import './Video.css'

const Video = () => {
  return (
    <section className="video">
      <iframe className="video-iframe" src="https://www.youtube.com/embed/XOacA3RYrXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
    );
}

export default Video;