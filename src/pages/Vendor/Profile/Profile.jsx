import classes from './Profile.module.css';
import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ProfileTab from './Tabs/ProfileTab';
import BusinessTab from './Tabs/BusinessTab';
import BankDetailsTab from './Tabs/BankDetailsTab';
import VerificationTab from './Tabs/VerificationTab';
import ServiceOfferedTab from './Tabs/ServiceOfferedTab';
import AddressTab from './Tabs/AddressTab';

const Profile = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);

  const [key, setKey] = useState('profile');

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const handleStatusModalClose = () => setShowStatusModal(false);
  const handleStatusModalShow = () => setShowStatusModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormModalClose();
    handleStatusModalShow();
  };

  return (
    <div className={`page-content-wrapper-main ${classes.Profile}`}>
      <Modal
        show={showStatusModal}
        onHide={handleStatusModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center"></Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleStatusModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <div className="center-elements-div">
            <Image src="/assets/images/proposal_sent.svg" alt="success" fluid />
            <h3 className="mt-5 mb-5">Your Proposal Has Been Sent!</h3>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showFormModal}
        onHide={handleFormModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center">
            Submit Proposal
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleFormModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="vendor-budget">Budget</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  aria-label="Budget"
                  aria-describedby="vendor-budget"
                />
                <InputGroup.Text id="vendor-budget">
                  <FontAwesomeIcon icon={faIndianRupee} />
                </InputGroup.Text>
              </InputGroup>
            </Col>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="vendor-time">Time</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="date"
                  placeholder=""
                  aria-label="Time"
                  aria-describedby="vendor-time"
                />
              </InputGroup>
            </Col>
          </Row>
          <Form.Label htmlFor="vendor-service">Service Type</Form.Label>
          <Form.Select
            aria-label="Service Type Dropdown"
            aria-describedby="vendor-service"
            className="mb-3"
          >
            <option>Select here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Label htmlFor="vendor-platform">Platform</Form.Label>
          <Form.Select
            aria-label="Platform Dropdown"
            aria-describedby="vendor-platform"
            className="mb-3"
          >
            <option>Select here</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="references">
            <Form.Label>References</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              aria-describedby="vendor-references"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              aria-describedby="vendor-description"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="btn-cta form-control"
            onClick={submitHandler}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-3">
        <Col md={12} sm={12}>
          <h3 className="page-content-heading">My Profile</h3>
        </Col>
      </Row>

      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="profile-tabs"
      >
        <Tab eventKey="profile" title="Profile">
          <ProfileTab />
        </Tab>
        <Tab eventKey="business_info" title="Business Info">
          <BusinessTab />
        </Tab>
        <Tab eventKey="address" title="Address">
          <AddressTab />
        </Tab>
        <Tab eventKey="bank_details" title="Bank Details">
          <BankDetailsTab />
        </Tab>
        <Tab eventKey="verification" title="Verification">
          <VerificationTab />
        </Tab>
        <Tab eventKey="service_offered" title="Service Offered">
          <ServiceOfferedTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
