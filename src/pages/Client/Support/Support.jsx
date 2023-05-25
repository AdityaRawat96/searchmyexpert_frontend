import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Modal,
  Row,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const TICKETS_LIST = [
  {
    id: 1,
    title: 'Ticket 1',
    description: 'Ticket 1 description',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    file: 'Ticket 1 file',
    status: 'Open',
    created_at: '2021-09-01',
    updated_at: '2021-09-01',
  },
];

const Support = () => {
  const [showFormModal, setShowFormModal] = useState(false);

  const handleFormModalClose = () => setShowFormModal(false);
  const handleFormModalShow = () => setShowFormModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    handleFormModalClose();
  };

  return (
    <div className={`page-content-wrapper-main`}>
      <Modal
        show={showFormModal}
        onHide={handleFormModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center">Add Ticket</Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleFormModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="ticket_title">Title</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="ticket_title" />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  aria-describedby="description"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="ticket_file">Attach File</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="ticket_file"
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
            Raise Ticket
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
              <span className="ml-3"> Raise Ticket</span>
            </Button>
          </div>
        </Col>
      </Row>
      {TICKETS_LIST.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-custom-dahboard">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Created On</th>
              </tr>
            </thead>
            <tbody>
              {TICKETS_LIST.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <Link to={`/client/support/ticket/${ticket.id}`}>
                      {ticket.title}
                    </Link>
                  </td>
                  <td className="text-green">{ticket.status}</td>
                  <td>{moment(ticket.created_at).format('MMM D, Y')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="center-elements-div mt-5">
          <div className="no-data-container">
            <Image src="/assets/images/no_data.svg" alt="no data" />
            <div className="no-data-text-container">
              <h3>No tickets raised yet</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Support;
