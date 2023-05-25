import classes from './OverviewTab.module.css';

import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChartBar,
  faCircleUser,
  faDotCircle,
  faEnvelope,
  faGear,
  faPaperclip,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const OverviewTab = (props) => {
  return (
    <Card className={classes.overview_section}>
      <Card.Body>
        <Row>
          <Col md={8} sm={12} className="mb-3">
            <Row className="mb-3">
              <Col md={12}>
                <div className={classes.overview_details_label}>
                  <FontAwesomeIcon icon={faChartBar} className="mr-2" />
                  <span>Description</span>
                </div>
                <div className={classes.overview_details_value}>
                  <span>{props.project.title}</span>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <div className={classes.overview_details_label}>
                  <FontAwesomeIcon icon={faGear} className="mr-2" />
                  <span>Services</span>
                </div>
                <div className={classes.overview_details_value}>
                  <span>{props.project.service_type}</span>
                </div>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6} sm={12} className="mb-3">
                <div className={classes.overview_details_label}>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  <span>Created</span>
                </div>
                <div className={classes.overview_details_value}>
                  <span>{props.project.date}</span>
                </div>
              </Col>
              <Col md={6} sm={12} className="mb-3">
                <div className={classes.overview_details_label}>
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  <span>Due Date</span>
                </div>
                <div className={classes.overview_details_value}>
                  <span>{props.project.deadline}</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <div className={classes.overview_details_label}>
              <FontAwesomeIcon icon={faDotCircle} className="mr-2" />
              <span>Status</span>
            </div>
            <div className={classes.overview_details_value}>
              <span>{props.project.status}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mb-3">
            <div className={classes.overview_details_label}>
              <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
              <span>Attachment</span>
            </div>
            <div className={classes.overview_details_value}>
              <div className={classes.attachment_container}>
                Click Here or Drop Files Here to Attach
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="my-3 text-center">
            <Button className="btn btn-cta">Upload</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OverviewTab;
