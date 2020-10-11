import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import ScrollSpy from 'react-scrollspy'

import PortfolioContext from '../../context/context';

const Hello = () => {
  const { hello } = useContext(PortfolioContext);
  const { title, intro } = hello;

  return (
    <header>
      <nav>
          <ScrollSpy items={['hello', 'experience', 'skill', 'hobby', 'contact']} currentClassName="nav-link--current" offset={-400}>
            <li className="nav-link"><a href="#hello">Home</a></li>
            <li className="nav-link"><a href="#experience">Experience</a></li>
            <li className="nav-link"><a href="#skill">Skills</a></li>
            <li className="nav-link"><a href="#hobby">Hobbies</a></li>
            <li className="nav-link"><a href="#contact">Contact</a></li>
          </ScrollSpy>
      </nav>
    </header>
  );
};

export default Hello;