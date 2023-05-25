import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import classes from './FooterMain.module.css';

function FooterMain() {
  return (
    <>
      <div className={classes.footer_upper}>
        <Container>
          <Card className={classes.card}>
            <Card.Header className={classes.card_header}>
              <Card.Title>DISCLAIMER</Card.Title>
            </Card.Header>
            <Card.Body className={classes.card_body}>
              <Card.Text>
                <span>
                  WYG is not a sportsbook operator but rather an informational
                  site regarding sports betting for entertainment purposes.
                  Sports betting and gambling laws vary by situs and change
                  continuously. WYG does not provide any information as to the
                  legalities in your location. As result, it is the User’s
                  responsibility to verify the local laws of the products and
                  services offered by the pre-vetted vendors.{' '}
                </span>
                <br />
                <br />
                <span>
                  The pre-vetted vendors of the products and services offered by
                  WYG are proven to be reliable and trustworthy. WYG may (or may
                  not) collect a share of the sales. Vendors will periodically
                  change. There is no charge to view any of the products /
                  services.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <div className={classes.footer_lower}>
        <Container>
          <div className="d-block mt-5">Wager responsibly.</div>
          <div>
            Any tips, suggestions or comments for WYG??, email us at:{' '}
            <a href="support@whoyagot.net">support@whoyagot.net</a>
          </div>
          <div className="d-block mt-5">Gambling Problem?? 1-800-GAMBLER.</div>
          <div>
            Published by Who Ya Got?? Copyright 2022 All rights reserved.
          </div>
          <div>
            Designated branding and trademarks by Who Ya Got and its partners
            are the property of their respective owners.
          </div>
        </Container>
      </div>
      <Navbar className={classes.navbar_custom}></Navbar>
    </>
  );
}

export default FooterMain;
