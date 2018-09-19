import React from "react";

const VideoDetail = ({ title, description }) => {
  return (
    <div>
      <br />
      <h1>{title}</h1>
      <p className="text-align-justify">{description}</p>
    </div>
  );
};

export default VideoDetail;
