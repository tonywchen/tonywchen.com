import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy'

import PortfolioContext from '../../context/context';

const Hello = () => {
  const { hello } = useContext(PortfolioContext);
  const { title, intro } = hello;

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
          <div className="nav-title">tonywchen.com</div>
          <div className="nav-toggle pull-right d-lg-none" onClick={toggleCollapsed}>
            <svg viewBox="0 0 24 24">
              <path d="M4.13503329,8.28388044 L11.9582566,16.1071037 C12.0558877,16.2047348 12.2141789,16.2047348 12.31181,16.1071037 L20.1350333,8.28388044" stroke-width="2" stroke-linecap="round" fill-rule="nonzero"></path>
            </svg>
          </div>
        </Container>
      </div>
      <nav>
          <ScrollSpy items={['hello', 'experience', 'skill', 'hobby', 'contact']} currentClassName="nav-link--current" offset={-400}>
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