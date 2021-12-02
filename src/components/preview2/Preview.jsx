import React from 'react';
import './Preview.css';

export default function Preview({ top, middle, bottom }) {
  return (
    <div className="Preview">
      <div className="charSection top">
        <img className="image" src={`${process.env.PUBLIC_URL}/assets/${top}.png`} alt="top" />
      </div>
      <div className="charSection middle">
        <img
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${middle}.png`}
          alt="middle"
        />
      </div>
      <div className="charSection bottom">
        <img
          className="image"
          src={`${process.env.PUBLIC_URL}/assets/${bottom}.png`}
          alt="bottom"
        />
      </div>
    </div>
  );
}
