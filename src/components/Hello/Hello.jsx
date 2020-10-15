import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import PortfolioContext from '../../context/context';

import Sidekick from '../Sidekick/Sidekick';

const Hello = () => {
  const { hello } = useContext(PortfolioContext);
  const { title, intro } = hello;

  return (
    <section id="hello">
      <Container>
        <h1 className="section-title hello-title">
          { title }
        </h1>
        <p className="hello-intro text-large-1" dangerouslySetInnerHTML={{ __html: intro }}>
        </p>
        <Sidekick tags={['design', 'frontend', 'backend', 'database']} times={3} />
      </Container>
    </section>
  );
};

export default Hello;