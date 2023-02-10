import React from 'react';
import { Link } from 'react-router-dom';

const ReturnButton = () => {
  return (
    <Link to='/homepage'>
      <button id="homebutton">Return to Homepage</button>
    </Link>
  );
};

export default ReturnButton;