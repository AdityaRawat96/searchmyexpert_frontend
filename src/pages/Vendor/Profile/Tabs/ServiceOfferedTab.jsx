import {
  faCirclePlus,
  faGear,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react';
import { useState } from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Table,
} from 'react-bootstrap';

const Services_List = [
  {
    id: 1,
    name: 'Service 1',
    min_price: 100,
    max_price: 200,
    service_type: 'Service Type 1',
  },
  {
    id: 2,
    name: 'Service 2',
    min_price: 100,
    max_price: 200,
    service_type: 'Service Type 2',
  },
];

const ServiceOfferedTab = () => {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [isCustomService, setIsCustomService] = useState(false);

  const handleServiceModalClose = () => setShowServiceModal(false);
  const handleServiceModalShow = (isCustomService) => {
    setIsCustomService(isCustomService);
    setShowServiceModal(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleServiceModalClose();
  };

  return (
    <Fragment>
      <Modal
        show={showServiceModal}
        onHide={handleServiceModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center">Add Service</Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleServiceModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          {isCustomService ? (
            <Fragment>
              <Row>
                <Col md={12} sm={12}>
                  <Form.Label htmlFor="service_name">Service Name</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder=""
                      aria-describedby="service_name"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12}>
                  <Form.Label htmlFor="service_type">Service Type</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder=""
                      aria-describedby="service_type"
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Fragment>
          ) : (
            <Row>
              <Col md={12} sm={12}>
                <Form.Label htmlFor="search_service">Search Service</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder=""
                    aria-describedby="search_service"
                  />
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faGear} />
                  </InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
          )}

          <Row>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="max_price">Minimum Price</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  aria-describedby="max_price"
                />
              </InputGroup>
            </Col>
            <Col md={6} sm={12}>
              <Form.Label htmlFor="min_price">Maximum Price</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  aria-describedby="min_price"
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
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <Card className="tab_section card-no-header">
        <Card.Header>
          <div className="w-100 text-end">
            <Button
              variant="primary"
              className="btn-cta mb-3 mx-1"
              onClick={() => handleServiceModalShow(true)}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <span className="ml-3"> Add Custom Services</span>
            </Button>
            <Button
              variant="primary"
              className="btn-cta mx-1 mb-3"
              onClick={() => handleServiceModalShow(false)}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <span className="ml-3"> Add Services</span>
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Service Type</th>
              </tr>
            </thead>
            <tbody>
              {Services_List.map((service) => (
                <tr key={service.id}>
                  <td>{service.name}</td>
                  <td>{service.min_price}</td>
                  <td>{service.max_price}</td>
                  <td>{service.service_type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ServiceOfferedTab;
