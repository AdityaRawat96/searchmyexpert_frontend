import React, { useContext, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { UIContext } from '../context/UIContext';

function AddPasscodeModal(props) {
  const [validated, setValidated] = useState(false);
  const passcodeRef = useRef();

  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const body = {
        passcode: passcodeRef.current.value,
      };
      fetchData({
        url: '/api/addPasscode',
        method: 'POST',
        body,
      }).then((res) => {
        if (res.status) {
          updateUIState({
            show: true,
            title: 'Success',
            text: 'Passcode added successfully.',
            icon: 'success',
          });
          props.onHide();
        } else {
          updateUIState({
            show: true,
            title: 'Error',
            text: 'An unexpected error occurred! Please try again.',
            icon: 'error',
          });
        }
      });
    }
    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Advertisement
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationPasscode">
              <Form.Label>Passcode</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Enter passcode"
                  required
                  ref={passcodeRef}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default AddPasscodeModal;
