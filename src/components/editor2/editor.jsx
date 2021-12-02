import React from 'react';
import './Editor.css';

export default function Editor({
  top,
  setTop,
  middle,
  setMiddle,
  bottom,
  setBottom,
  setTopCount,
  setMiddleCount,
  setBottomCount,
  catchphrase,
  setCatchphrase,
  setPhraseList,
}) {
  const handleTop = (e) => {
    setTop(e.target.value);
    setTopCount((prevState) => prevState + 1);
  };
  const handleMiddle = (e) => {
    setMiddle(e.target.value);
    setMiddleCount((prevState) => prevState + 1);
  };
  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount((prevState) => prevState + 1);
  };
  const handleClick = () => {
    setPhraseList((prevState) => [...prevState, catchphrase]);
    setCatchphrase('');
  };

  return (
    <div className="Editor">
      <div className="selectors">
        <div className="form-control">
          <label>Top </label>
          <select value={top} onChange={handleTop}>
            <option value="top-1">One</option>
            <option value="top-2">Two</option>
            <option value="top-3">Three</option>
          </select>
        </div>
        <div className="form-control">
          <label>Middle </label>
          <select value={middle} onChange={handleMiddle}>
            <option value="middle-1">One</option>
            <option value="middle-2">Two</option>
            <option value="middle-3">Three</option>
          </select>
        </div>
        <div className="form-control">
          <label>Bottom </label>
          <select value={bottom} onChange={handleBottom}>
            <option value="bottom-1">One</option>
            <option value="bottom-2">Two</option>
            <option value="bottom-3">Three</option>
          </select>
        </div>
      </div>
      <div className="form-control">
        <label>Add a Catchphrase! </label>
        <input type="text" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
