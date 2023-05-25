import { Card, Col, Row } from 'react-bootstrap';
import classes from './Dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faFolder,
  faQuestion,
  faRocket,
  faStar,
  faThumbsUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

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
              Here’s an overview of all your projects so far. You can easily
              manage all your work through your personalized dashboard.
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
            <span className={classes.label}>Active Projects</span>
            <span className={classes.subtitle_secondary}>3</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faFolder} />
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
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Closed Projects</span>
            <span className={classes.subtitle_secondary}>12</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span className={`${classes.icon_secondary}`}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Accepted Lead</span>
            <span className={classes.subtitle_secondary}>23</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <span
                  className={`${classes.icon_secondary} ${classes.icon_green}`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Rejected Lead</span>
            <span className={classes.subtitle_secondary}>2</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <span
                  className={`${classes.icon_secondary} ${classes.icon_red}`}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Pending Lead</span>
            <span className={classes.subtitle_secondary}>9</span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faRocket} />
                </span>
                <span
                  className={`${classes.icon_secondary} ${classes.icon_orange}`}
                >
                  <FontAwesomeIcon icon={faQuestion} />
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
