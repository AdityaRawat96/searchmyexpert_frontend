import { Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeForm from '../components/HomeForm';
import SubscriptionForm from '../components/SubscriptionForm';
import classes from './Home.module.css';

function Home() {
  return (
    <div className="backgroud-custom-dark">
      <Header />
      <Row className={classes.header_container}>
        <Col md={8} sm={{ span: 8, order: 'last' }}>
          <div className={classes.header_row}>
            <span className={`text-center ${classes.title_text}`}>
              WhoYaGot??
            </span>
            <span className={classes.subtitle_text}>
              Up Your Game on Sports Wagering
            </span>
          </div>
          <HomeForm />

          <SubscriptionForm />
        </Col>
        <Col md={4} sm={{ span: 4, order: 'first' }} className="text-center">
          <img
            className="d-block p-5 img-fluid"
            src="assets/animations/american-football.gif"
            alt="American football"
          />
          <img
            className="d-block p-5 img-fluid"
            src="assets/animations/hockey.gif"
            alt="Hockey"
          />
          <img
            className="d-block p-5 img-fluid"
            src="assets/animations/basketball.gif"
            alt="Basketball"
          />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default Home;
