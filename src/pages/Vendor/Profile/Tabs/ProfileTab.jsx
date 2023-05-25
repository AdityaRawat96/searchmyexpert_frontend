import classes from './ProfileTab.module.css';

import { Card, Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const ProfileTab = () => {
  return (
    <Card className={classes.profile_section}>
      <Card.Body>
        <div className={classes.profile_section}>
          <div>
            <Image
              src="/assets/images/avatar.png"
              alt="profile"
              className={`${classes.profile_image} mb-5`}
            />
          </div>
          <div className={classes.profile_details}>
            <Row>
              <Col md={12} sm={12} className="mb-3">
                <div className={classes.profile_details_label}>
                  <FontAwesomeIcon icon={faCircleUser} className="mr-2" />
                  <span>Full Name</span>
                </div>
                <div className={classes.profile_details_value}>
                  <span>Simran Singh</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12} className="mb-3">
                <div className={classes.profile_details_label}>
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <span>Phone Number</span>
                </div>
                <div className={classes.profile_details_value}>
                  <span>+91 7788990022</span>
                </div>
              </Col>
              <Col md={8} sm={12} className="mb-3">
                <div className={classes.profile_details_label}>
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  <span>Email Address</span>
                </div>
                <div className={classes.profile_details_value}>
                  <span>simran.singh@gmail.com</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileTab;
