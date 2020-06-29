import React from 'react';
import './Loader.scss';

const Loader = (props) => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <div className="loader">Loading...</div>
    </div>
  );
};

export default Loader;
