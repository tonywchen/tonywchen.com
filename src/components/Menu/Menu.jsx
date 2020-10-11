import React, { useContext } from 'react';
import Link from 'react-router';

const Hello = () => {
  const { hello } = useContext(PortfolioContext);

  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Hello;