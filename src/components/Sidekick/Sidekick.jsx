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

const getIcon = (shape) => {
  switch (shape) {
    case 'triangle':
      return (
        <svg viewBox="0 0 24 24">
          <path fill="#c8765a" d="M12.2119996,4.33919932 L21.7609377,19.6175003 C21.8341152,19.7345844 21.798522,19.888822 21.6814378,19.9619996 C21.6417049,19.9868326 21.595793,20 21.5489381,20 L2.45106191,20 C2.31299072,20 2.20106191,19.8880712 2.20106191,19.75 C2.20106191,19.7031451 2.21422927,19.6572332 2.23906233,19.6175003 L11.7880004,4.33919932 C11.861178,4.22211519 12.0154156,4.1865219 12.1324997,4.25969948 C12.164692,4.27981966 12.1918794,4.30700704 12.2119996,4.33919932 Z"></path>
        </svg>
      );
    case 'square':
      return (
        <svg viewBox="0 0 24 24">
          <rect fill="#c8c58d" x="4" y="4" width="16" height="16" rx="0.5"></rect>
        </svg>     
      );
    case 'star':
      return (
        <svg viewBox="0 0 24 24">
          <path fill="#6cb38a" d="M12,17.75 L5.98091054,20.7705852 C5.85750659,20.8325135 5.70726509,20.7826777 5.64533676,20.6592737 C5.62109807,20.6109735 5.6131628,20.5561196 5.62271987,20.5029304 L6.76918916,14.1223392 L1.92354138,9.61369724 C1.82245854,9.51964453 1.8167595,9.36145591 1.91081221,9.26037307 C1.94999873,9.21825749 2.00251075,9.19094473 2.05949181,9.18304126 L8.76718111,8.25266078 L11.7779265,2.42951684 C11.8413392,2.30686904 11.9921711,2.25884951 12.1148189,2.32226221 C12.1608151,2.34604367 12.198292,2.38352064 12.2220735,2.42951684 L15.2328189,8.25266078 L21.9405082,9.18304126 C22.0772701,9.20201062 22.1727598,9.32825575 22.1537904,9.46501764 C22.145887,9.5219987 22.1185742,9.57451072 22.0764586,9.61369724 L17.2308108,14.1223392 L18.3772801,20.5029304 C18.4016978,20.6388254 18.3113277,20.7687844 18.1754328,20.7932021 C18.1222436,20.8027592 18.0673897,20.7948239 18.0190895,20.7705852 L12,17.75 Z"></path>
        </svg>
      );
    case 'circle':
      return (
        <svg viewBox="0 0 24 24">
          <circle fill="#969bcb" cx="12" cy="12" r="9"></circle>
        </svg>
      );
  }
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
        const style = {};

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
            { getIcon(badge.shape) }
          </span>
        );
      })}
    </span>
  );
};

export default Sidekick;