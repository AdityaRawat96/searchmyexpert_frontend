import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
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

const ADDRESS_LIST = [
  {
    id: 1,
    address_1: '1234 Main St',
    address_2: '1234 Main St',
    city: 'New York',
    state: 'NY',
    pincode: '10001',
    country: 'USA',
  },
  {
    id: 2,
    address_1: '1234 Main St',
    address_2: '1234 Main St',
    city: 'New York',
    state: 'NY',
    pincode: '10001',
    country: 'USA',
  },
];

const AddressTab = () => {
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleAddressModalClose = () => setShowAddressModal(false);
  const handleAddressModalShow = () => setShowAddressModal(true);

  const submitHandler = (e) => {
    e.preventDefault();
    handleAddressModalClose();
  };

  return (
    <Fragment>
      <Modal
        show={showAddressModal}
        onHide={handleAddressModalClose}
        backdrop="static"
        keyboard={false}
        centered
        className="custom-form-modal"
      >
        <Modal.Header className="border-none">
          <Modal.Title className="w-100 text-center">Add Address</Modal.Title>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={handleAddressModalClose}
            className="modal-close-icon"
          />
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="address_1">Address 1</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="address_1"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="address_2">Address 2</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="address_2"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="city">City</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="city"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="state">State</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="state"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="country">Country</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  placeholder=""
                  aria-describedby="country"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} sm={12}>
              <Form.Label htmlFor="pincode">Pincode</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="number"
                  placeholder=""
                  aria-describedby="pincode"
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
              className="btn-cta mx-3"
              onClick={handleAddressModalShow}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <span className="ml-3"> Add Address</span>
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="table-responsive">
          {ADDRESS_LIST.length ? (
            <table className="table table-custom-dahboard">
              <thead>
                <tr>
                  <th>Address 1</th>
                  <th>Address 2</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                  <th>Pincode</th>
                </tr>
              </thead>
              <tbody>
                {ADDRESS_LIST.map((address) => (
                  <tr key={address.id}>
                    <td>{address.address_1}</td>
                    <td>{address.address_2}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.country}</td>
                    <td>{address.pincode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="center-elements-div mt-5">
              <div className="no-data-container">
                <Image src="/assets/images/no_data.svg" alt="no data" />
                <div className="no-data-text-container">
                  <h3>No Results</h3>
                </div>
              </div>
            </div>
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default AddressTab;
