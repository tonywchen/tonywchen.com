import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy'

const Hello = () => {

  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    if (isCollapsed) {
      uncollapseHeader();
    } else {
      collapseHeader();
    }
  };

  const collapseHeader = () => {
    document.body.style.overflow = 'unset';
    setCollapsed(true);
  };
  const uncollapseHeader = () => {
    document.body.style.overflow = 'hidden';
    setCollapsed(false);
  };


  const headerClassNames = (isCollapsed)? 'header--collapsed' : '';
  
  return (
    <header className={headerClassNames}>
      <div className="nav-header">
        <Container>
          <div className="brand-logo">
            <svg viewBox="0 0 192 76">
              <g fill="#1f282d">
                <path d="M32.0286055,31.3603744 L32.0286055,50.3307332 C32.0286055,52.6604381 32.4791373,54.4076905 33.3802145,55.5725429 C34.2812918,56.7373953 35.8998691,57.3198128 38.2359952,57.3198128 C39.0369528,57.3198128 39.8879574,57.2532508 40.7890346,57.1201248 C41.6901118,56.9869988 42.4409982,56.7873128 43.0417163,56.5210608 L43.2419547,68.5023401 C42.1072649,68.9017181 40.6722375,69.2511685 38.9368296,69.550702 C37.2014216,69.8502355 35.4660397,70 33.7306317,70 C30.3933087,70 27.5899994,69.5839875 25.3206198,68.7519501 C23.0512401,67.9199126 21.2324264,66.7217967 19.864124,65.1575663 C18.4958215,63.5933359 17.511326,61.7296 16.9106079,59.5663027 C16.3098897,57.4030053 16.0095352,54.9901329 16.0095352,52.3276131 L16.0095352,31.3603744 L8,31.3603744 L8,19.0795632 L15.909416,19.0795632 L15.909416,6 L32.0286055,6 L32.0286055,19.0795632 L50,19.0795632 L50,31.3603744 L32.0286055,31.3603744 Z" id="Path"></path>
                <polygon id="Path" points="144.028605 31 128.009535 31 120 31 120 19 127.909416 19 144.028605 19 162 19 162 31"></polygon>
                <polygon id="Path" points="114.719862 69 98.238806 69 88.4500574 37.875502 88.250287 37.875502 78.6613088 69 62.1802526 69 45 19 62.6796785 19 71.2698048 50.626506 71.5694604 50.626506 80.4592423 19 96.9402985 19 106.129736 50.626506 106.329506 50.626506 115.019518 19 132 19"></polygon>
                <path d="M162.151076,31.238646 C160.428965,31.238646 157.639316,33.0499965 156.24838,33.75 C154.857444,34.4500035 153.665232,35.3833275 152.671706,36.55 C151.678181,37.7166725 150.899931,39.066659 150.336933,40.6 C149.773935,42.133341 149.492441,43.766658 149.492441,45.5 C149.492441,47.233342 149.757377,48.866659 150.287257,50.4 C150.817137,51.933341 151.595387,53.2833275 152.62203,54.45 C153.648673,55.6166725 154.874003,56.53333 156.298056,57.2 C157.722109,57.86667 159.328285,58.2 161.116631,58.2 C162.772506,58.2 164.411799,57.8833365 166.034557,57.25 C167.657316,56.6166635 168.965438,55.700006 169.958963,54.5 L179,65.6 C176.946714,67.60001 174.297352,69.166661 171.051836,70.3 C167.806319,71.433339 164.362149,72 160.719222,72 C156.811356,72 153.168483,71.400006 149.790497,70.2 C146.41251,68.999994 143.481654,67.2500115 140.99784,64.95 C138.514026,62.6499885 136.560122,59.866683 135.136069,56.6 C133.712016,53.333317 133,49.633354 133,45.5 C133,41.433313 133.712016,37.766683 135.136069,34.5 C136.560122,31.233317 138.514026,28.4500115 140.99784,26.15 C143.481654,23.8499885 146.41251,22.0833395 149.790497,20.85 C153.168483,19.6166605 158.380883,19 162.18662,19 C162.219554,19 162.152086,31.2562275 162.151076,31.238646 Z" id="Path"></path>
                <circle id="Oval" fill-rule="nonzero" cx="183" cy="50" r="6"></circle>
              </g>
            </svg>
          </div>
          <div className="nav-toggle pull-right d-lg-none" onClick={toggleCollapsed}>
            <svg viewBox="0 0 24 24">
              <path d="M4.13503329,8.28388044 L11.9582566,16.1071037 C12.0558877,16.2047348 12.2141789,16.2047348 12.31181,16.1071037 L20.1350333,8.28388044" strokeWidth="2" strokeLinecap="round" fillRule="nonzero"></path>
            </svg>
          </div>
        </Container>
      </div>
      <nav>
        <ScrollSpy
          items={['hello', 'experience', 'skill', 'hobby', 'contact']}
          currentClassName="nav-link--current"
          scrolledPastClassName="nav-link--past"
          offset={-400}>
          <li className="nav-link" onClick={collapseHeader}><a href="#hello">Home</a></li>
          <li className="nav-link" onClick={collapseHeader}><a href="#experience">Experience</a></li>
          <li className="nav-link" onClick={collapseHeader}><a href="#skill">Skills</a></li>
          <li className="nav-link" onClick={collapseHeader}><a href="#hobby">Hobbies</a></li>
          <li className="nav-link" onClick={collapseHeader}><a href="#contact">Contact</a></li>
        </ScrollSpy>
      </nav>
    </header>
  );
};

export default Hello;