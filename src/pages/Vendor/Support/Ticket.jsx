import classes from './Ticket.module.css';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faFile,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';

const TICKETS_LIST = [
  {
    id: 1,
    title: 'Ticket 1',
    description: 'Ticket 1 description',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
    attachment:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    attachment_name: 'banner-2.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
    attachment:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    attachment_name: 'banner-2.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
    attachment:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
    attachment_name: 'banner-2.png',
  },
];

const Ticket = (props) => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(
    TICKETS_LIST.filter((t) => t.id === parseInt(id))[0]
  );
  const [showFormModal, setShowFormModal] = useState(false);

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormModalClose();
  };

  return (
    <div className={`page-content-wrapper-main ${classes.Ticket}`}>
      <Modal
        show={showFormModal}
        onHide={handleFormModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center"> </Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleFormModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Modal.Title className="w-100 text-center">
            Are you sure you want to mark this ticket as resolved?
          </Modal.Title>
          <span className="w-100 text-center mt-3 d-block">
            The ticket will permanently be marked as resolved
          </span>
        </Modal.Body>
        <Modal.Footer>
          <div className={classes.modal_btn_wrapper}>
            <button
              variant="secondary"
              className="btn d-block link_cta"
              onClick={handleFormModalClose}
            >
              Click Here to Cancel
            </button>
            <Button
              variant="primary"
              className="btn-cta d-block mt-3 mb-5"
              onClick={submitHandler}
            >
              Mark as Resolved
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Row className="mb-5">
        <Col md={12} sm={12}>
          <div className="w-100">
            <Link to="/vendor/support" className="btn-back link_cta">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="mx-2">Back</span>
            </Link>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12} sm={12}>
          <h3>{ticket.title}</h3>
        </Col>
      </Row>

      <Row>
        <Col md={8} sm={12}>
          <div className="portfolio_text_item">
            <span>
              <b>Ticket ID:</b> {ticket.id}
            </span>
          </div>
          <div className="portfolio_text_item">
            <span>
              <b>Date Created:</b> {moment(ticket.date).format('MMM D, Y')}
            </span>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="portfolio_text_item">
            <div>
              <b>Files Attached</b>
            </div>
            <span>
              <FontAwesomeIcon icon={faFile} className="mx-2" />
              <span>{ticket.attachment_name}</span>
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
          <span>{ticket.description}</span>
        </Col>
      </Row>
      <Row>
        <Col md={12} sm={12} className="mt-5">
          <Button className="btn-cta" onClick={handleFormModalShow}>
            Mark as Resolved
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12}>
          <div className={classes.chat_wrapper}>
            <input
              type="text"
              placeholder="Enter Your Message Here"
              className="form-control"
            />
            <Button className="btn btn-cta">Submit</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Ticket;
