import React from 'react';

const TextMover: React.FC<{ word: string, direction: string }> = ({ word, direction }) => {
  return (
    <>
      <div className="">
        <div className="flex gap-10 px-7 font-extrabold tracking-wide text-7xl text-pink" style={{ 'writingMode': 'vertical-lr', 'animation': ' scroll-word 30s linear infinite' }}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
            return <div className="item">{word}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default TextMover;