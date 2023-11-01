import React from 'react';
import PropTypes from 'prop-types';

const VideoLink = ({ url }) => (
  <div className="video-responsive">
    <iframe
      width="97%"
      src={url}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Video link"
    />
  </div>
);

VideoLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default VideoLink;
