import { Card, Col, Row } from 'react-bootstrap';
import classes from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faCheck,
  faFolder,
  faQuestion,
  faRocket,
  faStar,
  faThumbsUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className={classes.Dashboard}>
      <Row>
        <Col md={6} sm={12} className="mb-3">
          <div className={classes.header}>
            <span className={classes.title}>
              Welcome back, <b>Simran Singh!</b>
            </span>
            <span>
              Stay connected with us and keep a close watch on the progress of
              your project!
            </span>
          </div>
        </Col>
        <Col md={6} sm={12} className="mb-3">
          <Card
            className={`${classes.card} ${classes.background_striped_dark}`}
          >
            <span className={classes.label}>Total Balance:</span>
            <div>
              <span className={classes.subtitle}>0.00</span>
              <span className={classes.currency}>INR</span>
            </div>
            <div className="w-100 text-end mt-5">
              <small>
                <Link to="/client/payments" className={classes.tansaction_link}>
                  Click Here
                </Link>{' '}
                to View All Transactions
              </small>
            </div>
          </Card>
        </Col>
      </Row>

      <Row className="mb-3 mt-5">
        <Col md={12} sm={12}>
          <h3 className="page-content-heading">Analytics Overview</h3>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Total Projects</span>
            <span className={classes.subtitle_secondary}>3</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faBox} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Active Projects</span>
            <span className={classes.subtitle_secondary}>1</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faBox} />
                </span>
                <span
                  className={`${classes.icon_secondary} ${classes.icon_orange}`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
