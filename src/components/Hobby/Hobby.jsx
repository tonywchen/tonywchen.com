import React, { useContext, useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';

import PortfolioContext from '../../context/context';
import Img from "gatsby-image";

const Hobby = () => {
  const data = useStaticQuery(graphql`
    query allImageContent {
      allImageSharp {
        edges {
          node {
            fluid {
              originalName
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const { hobby } = useContext(PortfolioContext);
  const { title, hobbies } = hobby;

  const [selectedHobby, setSelectedHobby] = useState({});

  useEffect(() => {
    if (!selectedHobby.key) {
      const defaultHobby = hobbies && hobbies[0] ? hobbies[0] : {};
      setSelectedHobby(defaultHobby);
    }
  });

  const getImage = (imageName) => {
    const result = data.allImageSharp.edges.find(
      element => element.node.fluid.originalName === imageName
    );

    return result;
  };

  return (
    <section id="hobby">
      <Container>
        <h1 className="section-title hobby-title">
          { title }
        </h1>
        <Row noGutters>
          <Col xs={11} sm={3} md={3} lg={3}>
            <Row noGutters>
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
          { selectedHobby && (
            <Col xs={12} sm={9} md={8} lg={7}>
            <div className="hobby-content">
              { 
                selectedHobby.images && (
                <Img className="hobby-image" key={selectedHobby.images[0]} fluid={ getImage(selectedHobby.images[0]).node.fluid } />
              )}
              <div className="hobby-description">
                { selectedHobby.description }
              </div>
              <div className="hobby-link">
                <a href={ selectedHobby.link }  target="_blank" >{ selectedHobby.action }</a>
              </div>
            </div>
          </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Hobby;