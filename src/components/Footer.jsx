import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import classes from './Footer.module.css';

function Footer() {
  return (
    <>
      <div className={classes.footer_upper}>
        <Container>
          <Row>
            <Col m={12} className="text-center">
              <b>
                Published by Who Ya Got?? Copyright 2023 All rights reserved.
              </b>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar className={classes.navbar_custom}></Navbar>
    </>
  );
}

export default Footer;
