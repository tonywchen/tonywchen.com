import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Sidekick from '../Sidekick/Sidekick';

const Skill = () => {
  const { skill } = useContext(PortfolioContext);
  const { title, domains } = skill;

  return (
    <section id="skill">
      <Container>
        <h1 className="section-title skill-title">
          { title }
        </h1>
        <div className="skill-list">
          <Row>
          {domains.map((domain, i) => {
            const { key, name, skills } = domain;

            return (
              <Col key={key} xs={12} sm={6} md={3}>
                <div className="domain">
                  <h4>{ name }</h4>
                  <Sidekick tags={[key]} delay={i * 0.1}></Sidekick>
                  <Row>
                    {skills.map((skill) => {
                      return (
                        <Col key={skill} xs={6} sm={12} className="skill">
                          { skill }
                        </Col>
                      );
                    })}
                  </Row>
                </div>
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