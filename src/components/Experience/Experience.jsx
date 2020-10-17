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
        <div className="company-list">
          {companies.map((company) => {
            const { key, name, dateRange, titles, projects } = company;

            return (
              <div className="company" key={key}>
                <div className="company-header">
                  <Row>
                    <Col sm="12" md="8">
                      <h4 className="company-name">{ name }</h4>
                    </Col>
                    <Col sm="12" md="4">
                      <div className="date-range text-xs-left text-md-right">
                        <Moment>{dateRange.from}</Moment>
                        <span>-</span>
                        <Moment>{dateRange.to}</Moment>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="title-list">
                  {titles.map((title) => {
                    const { key, name, dateRange } = title;
                    
                    return (
                      <Row key={key}>
                        <Col xs="12">
                          <h6 className="title-name text-inline">{ name }</h6>
                          &nbsp;
                          {dateRange && (
                            <span className="date-range">
                              <Moment>{dateRange.from}</Moment> <span>-</span> <Moment>{dateRange.to}</Moment>
                            </span>
                          )}
                        </Col>
                      </Row>
                    )
                  })}
                </div>

                <div className="project-list">
                  {projects.map((project) => {
                    const { key, name, highlights, techStacks } = project;
                    
                    return (
                      <div key={key} className="project">
                        <Row>
                          <Col xs="12" md="9">
                            <h5 className="project-header">
                              <span className="project-decorator">Project</span>
                              <span className="text-highlight project-name">{ name }</span>
                            </h5>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12" md="8" lg="9">
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
                          <Col xs="12" md="4" lg="3">
                            { techStacks && (
                              <div className="tech-stack-container">
                                <div className="tech-stack-header">
                                  Tech Stacks
                                </div>
                                <div className="tech-stack-list">
                                  {
                                    techStacks.map(({name, level}) => {
                                      const classNames = `tech-stack tech-stack--level-${level}`;

                                      return (
                                        <div key={name} className={classNames}>
                                          {name}
                                        </div>
                                      );
                                    })
                                  }
                                </div>
                              </div>
                            )}
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;