import './animated.css';

import React, { useState, useEffect, ReactNode } from 'react';

const SliderTransition = ({ children }: { children: ReactNode }) => {
  const [currentChildren, setCurrentChildren] = useState(children);
  const [nextChildren, setNextChildren] = useState<ReactNode | null>(null);
  const [transitionState, setTransitionState] = useState('entered');

  useEffect(() => {
    console.log('setting next children', children !== currentChildren);
    if (children !== currentChildren) {
      setNextChildren(children);
      setTransitionState('exiting');
    }
  }, [children, currentChildren]);

  useEffect(() => {
    console.log('transition state', transitionState);
    if (transitionState === 'exiting') {
      setTimeout(() => {
        setCurrentChildren(nextChildren);
        setNextChildren(null);
        setTransitionState('entering');
      }, 500); // match with your transition duration
    } else if (transitionState === 'entering') {
      setTimeout(() => {
        setTransitionState('entered');
      }, 500); // match with your transition duration
    }
  }, [transitionState, nextChildren]);

  return (
    <>
      {transitionState}
      <div className="slider-container">
        <div
          className={`content ${transitionState === 'exiting' && 'slide-out'}`}
        >
          {currentChildren}
        </div>
        {nextChildren && (
          <div
            className={`content entering ${
              transitionState === 'entering' && 'slide-in'
            }`}
          >
            {nextChildren}
          </div>
        )}
      </div>
    </>
  );
};

export default SliderTransition;

export function DropdownButtons() {
  const [contentKey, setContentKey] = useState(0);

  const changeContent = () => {
    setContentKey((key) => key + 1);
  };

  return (
    <div>
      <SliderTransition>
        <div key={contentKey}>Content {contentKey}</div>
      </SliderTransition>
      <button onClick={changeContent}>Change Content</button>
    </div>
  );
}
