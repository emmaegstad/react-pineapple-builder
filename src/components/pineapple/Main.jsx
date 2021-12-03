import React, { useState } from 'react';
import './Main.css';
import Preview from '../preview2/Preview';
import Editor from '../editor2/editor';
import Counter from '../counter2/Counter';

export default function Main() {
  const [top, setTop] = useState('top-1');
  const [middle, setMiddle] = useState('middle-1');
  const [bottom, setBottom] = useState('bottom-1');
  const [topCount, setTopCount] = useState(0);
  const [middleCount, setMiddleCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);
  const [catchphrase, setCatchphrase] = useState('');
  const [phraseList, setPhraseList] = useState([]);

  return (
    <main className="Main">
      <Preview {...{ top, middle, bottom }} />
      <Editor
        {...{
          top,
          setTop,
          middle,
          setMiddle,
          bottom,
          setBottom,
          topCount,
          setTopCount,
          middleCount,
          setMiddleCount,
          bottomCount,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          phraseList,
          setPhraseList,
        }}
      />
      <Counter {...{ topCount, middleCount, bottomCount, phraseList }} />
    </main>
  );
}
