import React, { useState, useEffect, useRef } from 'react';

const BADGES = {
  design: {
    color: '#c8765a',
    shape: 'triangle'
  },
  frontend: {
    color: '#c8c58d',
    shape: 'square'
  },
  backend: {
    color: '#6Cb38a',
    shape: 'star'
  },
  database: {
    color: '#969bcb',
    shape: 'circle'
  }
};

const observerOptions = {
  rootMargin: '-10% 0% -10% 0%',
  threshold: 1
};

const Sidekick = ({ tags, inline, silent, times, delay, force }) => {
  const sidekickRef = useRef();

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const badges = tags
    .map((tag) => {
      return BADGES[tag];
    })
    .filter((badge) => {
      return !!badge;
    });

  let observer = null;
  const checkInView = () => {
    if (silent) {
      return;
    }

    if (force) {
      setShouldAnimate(true);
      return;
    }

    if (observer == null) {
      observer = new IntersectionObserver((entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setShouldAnimate(true);
            observer.unobserve(sidekickRef.current);
          }
        }
      }, observerOptions);

      observer.observe(sidekickRef.current);
    }

    return () => {
      if (observer != null) {
        observer.unobserve(sidekickRef.current);
      }
    }
  };

  useEffect(checkInView);

  const sidekickClassNames = (inline)? 'sidekick inline' : 'sidekick';

  return (
    <span className={sidekickClassNames} ref={sidekickRef}>
      {badges.map((badge, i) => {
        const style = {
          backgroundColor: badge.color
        };

        if (!silent) {
          const animationDelay = (i * 0.05);
          const baseAnimationDelay = (delay)? delay : 0;
          const animationDelayString = `${baseAnimationDelay + animationDelay}s`;
          style.animationDelay = animationDelayString;

          if (shouldAnimate) {
            style.animationName = 'bounce';
            style.animationIterationCount = (times)? times : 1;
          }
        }

        const badgeClassNames = (force)? 'sidekick-badge' : 'sidekick-badge sidekick-badge--disable-mobile'

        return (
          <span className={badgeClassNames} style={style} key={i}> 
          </span>
        );
      })}
    </span>
  );
};

export default Sidekick;