import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Moment from 'react-moment';

import PortfolioContext from '../../context/context';

import Sidekick from '../Sidekick/Sidekick';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);
  const { title, companies } = experience;

  return (
    <section id="experience">
      <Container>
        <h1 className="section-title experience-title">
          { title }
        </h1>
        <div className="companies">
          {companies.map((company) => {
            const { key, name, dateRange, titles, projects } = company;

            return (
              <div className="company" key={key}>
                <Row>
                  <Col sm="12" md="6">
                    <h4>{ name }</h4>
                  </Col>
                  <Col sm="12" md="4">
                    <div className="text-right">
                      <Moment>{dateRange.from}</Moment>
                      <span>-</span>
                      <Moment>{dateRange.to}</Moment>
                    </div>
                  </Col>
                </Row>
                {titles.map((title) => {
                  const { key, name, dateRange } = title;
                  
                  return (
                    <Row key={key}>
                      <Col sm="12" md="6">
                        <h5>{ name }</h5>
                      </Col>
                      {dateRange && (
                        <Col sm="12" md="4">
                          <div className="text-right">
                            <Moment>{dateRange.from}</Moment>
                            <span>-</span>
                            <Moment>{dateRange.to}</Moment>
                          </div>
                        </Col>
                      )}
                    </Row>
                  )
                })}
                {projects.map((project) => {
                  const { key, name, highlights } = project;
                  
                  return (
                    <React.Fragment key={key}>
                      <Row>
                        <Col xs="12" md="10">
                          <h5>{ name }</h5>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" md="10">
                          <ul className="highlight-list">
                            {highlights.map((highlight) => {
                              const { key, description, tags } = highlight;

                              return (
                                <li key={key}>
                                  {description}
                                  <Sidekick tags={tags} inline={true}/>
                                </li>
                              )
                            })}
                          </ul>
                        </Col>
                      </Row>
                    </React.Fragment>
                  );
                })}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;