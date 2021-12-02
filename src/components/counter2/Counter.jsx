import React from 'react';
import './Counter.css';

export default function Counter({ topCount, middleCount, bottomCount, phraseList }) {
  return (
    <>
      <p className="counters">
        You have changed the top {topCount} times, the middle {middleCount} times, and the bottom{' '}
        {bottomCount} times. And nobody can forgot the classic catchphrases:
      </p>
      <div className="phrases">
        {phraseList.map((el) => {
          return <p key={el}>{el}</p>;
        })}
      </div>
    </>
  );
}
