import React from 'react'
import '../styles.css';


export const StudyHeader: React.FC<{ word: string, isReverse: boolean }> = ({ word, isReverse }) => {
  return (
    <div className="relative py-3 flex overflow-hidden gap-5">
      {[0, 1].map(() => {
        return (
          <div className={`shrink-0 flex justify- min-w-full`}
            style={{
              animation: 'scroll-study 25s linear infinite',
              animationDirection: isReverse ? 'reverse' : 'normal',
            }}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  className={`flex gap-10 px-7 font-extrabold tracking-wide text-7xl uppercase 
                ${isEven ? 'text-white' : 'text-transparent'} `}
                  style={{ WebkitTextStroke: !isEven ? '1px #fff' : 'none' }}
                >
                  {word}
                </div>
              );
            })}


          </div>
        )
      })}
    </div>
  );
};

export default StudyHeader;