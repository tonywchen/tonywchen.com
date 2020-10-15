import React, { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import { useEffect } from 'react';

const Hobby = () => {
  const { hobby } = useContext(PortfolioContext);
  const { title, hobbies } = hobby;

  const [selectedHobby, setSelectedHobby] = useState({});

  useEffect(() => {
    if (!selectedHobby.key) {
      const defaultHobby = hobbies && hobbies[0] ? hobbies[0] : {};
      setSelectedHobby(defaultHobby);
    }
  });

  return (
    <section id="hobby">
      <Container>
        <h1 className="section-title hobby-title">
          { title }
        </h1>
        <Row noGutters>
          <Col xs={11} lg={4}>
            <Row>
              {hobbies.map((hobby) => {
                const { key, name } = hobby;
                const classNames = (key === selectedHobby.key) ? 'hobby-name hobby-name--selected' : 'hobby-name';

                return (
                  <Col xs lg={12} key={key}>
                    <div className={classNames} onClick={() => { setSelectedHobby(hobby) }}>
                      { name }
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col xs={12} lg={6}>
            <div className="hobby-content">
              <div className="hobby-image">
              </div>
              <div className="hobby-description">
                { selectedHobby.description }
              </div>
              <a href={ selectedHobby.link } target="_blank" className="hobby-link">{ selectedHobby.action }</a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hobby;