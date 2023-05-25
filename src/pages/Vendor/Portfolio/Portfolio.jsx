import classes from './Portfolio.module.css';
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCirclePlus,
  faEye,
  faFile,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import moment from 'moment';

const Portfolio_List = [
  {
    id: 1,
    client_name: 'Clarte Research',
    description: 'We have worked with client UI/UX',
    service: 'Web Development',
    industry: 'Food & Beverages',
    website_link: 'https://www.clarteresearch.com/',
    app_link: 'https://www.clarteresearch.com/',
    budget: '10-20k',
    date: '2021-09-01',
    proof_of_work:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    pow_file_name: 'banner-2.png',
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const [showFormModal, setShowFormModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const handleProjectModalClose = () => setShowProjectModal(false);
  const handleProjectModalShow = (project) => {
    setCurrentProject(project);
    setShowProjectModal(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormModalClose();
  };

  return (
    <div className={`page-content-wrapper-main ${classes.Portfolio}`}>
      {currentProject && (
        <Modal
          show={showProjectModal}
          onHide={handleProjectModalClose}
          backdrop="static"
          keyboard={false}
          centered
          size="lg"
          className="custom-form-modal"
        >
          <Modal.Header className="border-none">
            <Modal.Title className="w-100">
              {currentProject.client_name}
            </Modal.Title>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleProjectModalClose}
              className="modal-close-icon"
            />
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={8} sm={12}>
                <div className="portfolio_text_item">
                  <span>
                    <b>Service:</b> {currentProject.service}
                  </span>
                </div>
                <div className="portfolio_text_item">
                  <span>
                    <b>Date Created:</b>{' '}
                    {moment(currentProject.date).format('MMM D, Y')}
                  </span>
                </div>
                <div className="portfolio_text_item">
                  <span>
                    <b>Budget:</b> {currentProject.budget}
                  </span>
                </div>
                <div className="portfolio_text_item">
                  <span>
                    <b>Industries:</b> {currentProject.industry}
                  </span>
                </div>
              </Col>
              <Col md={4} sm={12}>
                <div className="portfolio_text_item">
                  <div>
                    <b>POW Attached</b>
                  </div>
                  <span>
                    <FontAwesomeIcon icon={faFile} className="mx-2" />
                    <span>{currentProject.pow_file_name}</span>
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12} className="mt-3">
                <div className="portfolio_text_item">
                  <span>
                    <b>Description:</b>
                  </span>
                </div>
                <span>{currentProject.description}</span>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      )}

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
            Create Portfolio
          </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleFormModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="client_name">Client Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="client_name" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="project_description">Description</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="project_description"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="service">Search Service</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="service" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="industry">Select Industry</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="industry" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="website_link">Website Link</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="website_link" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="app_link">App Link</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="app_link" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="project_budget">Project Budget</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="project_budget"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="proof_of_work">Proof of Work</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="proof_of_work"
                />
              </InputGroup>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="btn-cta form-control"
            onClick={submitHandler}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-3">
        <Col md={12} sm={12}>
          <div className="w-100 text-end">
            <Button
              variant="primary"
              className="btn-cta"
              onClick={handleFormModalShow}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <span className="ml-3"> Add Project</span>
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-3">
        {Portfolio_List.length > 0 ? (
          Portfolio_List.map((project, index) => (
            <Col md={4} sm={12} key={index}>
              <Card className={`mb-3 ${classes.portfolio_card}`}>
                <Card.Header className={classes.portfolio_card_header}>
                  <Card.Title>{project.service}</Card.Title>
                </Card.Header>

                <Card.Body>
                  <Image
                    src={project.proof_of_work}
                    alt="proof of work"
                    className="img-fluid img-rounded mb-3"
                  />
                  <div className="w-100 text-end">
                    <button
                      onClick={() => handleProjectModalShow(project)}
                      className="btn"
                    >
                      <FontAwesomeIcon icon={faEye} className="mx-2" />
                      <span>Details</span>
                    </button>
                  </div>

                  <small className="mb-2 p-0">Client</small>
                  <Card.Title>{project.client_name}</Card.Title>

                  <div className="w-100 text-end">
                    <FontAwesomeIcon icon={faCalendar} className="mx-2" />
                    <span>{moment(project.date).format('MMM D, Y')}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <div className="center-elements-div mt-5">
            <div className="no-data-container">
              <Image src="/assets/images/no_data.svg" alt="no data" />
              <div className="no-data-text-container">
                <h3>No Portfolio to Show</h3>
                <span>
                  You can start your portfolio by registering your projects.
                  Click "Add Project" to get started.
                </span>
              </div>
            </div>
          </div>
        )}
      </Row>
    </div>
  );
};

export default Portfolio;
