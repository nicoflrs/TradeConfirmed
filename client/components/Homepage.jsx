import React from "react";
import { Link } from "react-router-dom";
import backgroundVideo from '../media/video.mp4';

const Homepage = () => {
  return (
    <div class="video-container">
      <video autoPlay muted loop id="myVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div class="caption1">
        welcome to options tracker.
        <div class="caption2">
          <Link to='homepage'>
            <button id="homebuttonmain">click here to begin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;