import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';

import CopyButton from '../CopyButton/CopyButton';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContacQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const email = data.site.siteMetadata.email;


  return (
    <section id="contact">
      <Container>
        <h1 className="section-title contact-title">Find Me At</h1>
        <p>tony <strong>AT</strong> tonywchen.com</p>
        <CopyButton value={email}>
        </CopyButton>
      </Container>
    </section>
  );
};

export default Contact;
