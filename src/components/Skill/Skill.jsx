import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';

const Skill = () => {
  const { skill } = useContext(PortfolioContext);
  const { title, domains } = skill;

  return (
    <section id="skill">
      <Container>
        <h1 className="skill-title">
          { title }
        </h1>
        <div className="skill-list">
          <Row>
          {domains.map((domain) => {
            const { key, name, skills } = domain;

            return (
              <Col key={key} xs={12} sm={6} md={3}>
                <h4>{ name }</h4>
                <Row>
                  {skills.map((skill) => {
                    return (
                      <Col key={skill} xs={6} sm={12} className="skill">
                        { skill }
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            );
          })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skill;