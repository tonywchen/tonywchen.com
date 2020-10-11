import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';

const Hobby = () => {
  const { hobby } = useContext(PortfolioContext);
  const { title, hobbies } = hobby;

  return (
    <section id="hobby">
      <Container>
        <h1 className="hobby-title">
          { title }
        </h1>
        <div className="hobby-list">
          {hobbies.map((hobby) => {
            const { key, name, description, images, action, link } = hobby;

            return (
              <Row key={key}>
                <Col>
                  <h4>{ name }</h4>
                  <div>
                      {description}
                  </div>
                  <a href={link} target="_blank">{ action }</a>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Hobby;