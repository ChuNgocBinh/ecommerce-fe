import React from 'react';
import './loader.sass';

function Loader() {
  return (
    <div className="loader_container">
      <div className="loader_box">
        <img src="/image/loader.gif" alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
