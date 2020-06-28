import React from 'react';

const Loader = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: ' center',
        alignItems: 'center',
      }}
    >
      <div class="loader">Loading...</div>
    </div>
  );
};

export default Loader;
