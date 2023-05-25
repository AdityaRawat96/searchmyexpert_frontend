import React, { useContext, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { UIContext } from '../context/UIContext';
import { AuthContext } from '../context/AuthContext';

function AddAdvertModal(props) {
  const [validated, setValidated] = useState(false);
  const orientationRef = useRef();
  const imageRef = useRef();
  const linkRef = useRef();
  const pageRef = useRef();

  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);
  const { authState } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const formData = new FormData();
      formData.append('orientation', orientationRef.current.value);
      formData.append('bannerImage', imageRef.current.files[0]);
      formData.append('link', linkRef.current.value);
      formData.append('page', pageRef.current.value);
      if (authState.token) {
        formData.append('token', authState.token);
      }

      const requestOptions = {
        method: 'POST',
        body: formData,
      };

      fetchData({
        url: '/api/addBanner',
        requestOptions,
      })
        .then((res) => {
          if (res.status) {
            updateUIState({
              show: true,
              title: 'Success',
              text: 'Advertisement added successfully.',
              icon: 'success',
            });
            props.onHide();
            props.refreshadlist();
          } else {
            updateUIState({
              show: true,
              title: 'Error',
              text: 'An unexpected error occurred! Please try again.',
              icon: 'error',
            });
          }
        })
        .catch((err) => console.log(err));
    }
    setValidated(true);
  };

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
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
            <Form.Group as={Col} md="12" controlId="validationPage">
              <Form.Label>Target Page</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  aria-label="Default select example"
                  required
                  ref={pageRef}
                >
                  <option value="Data">Data</option>
                  <option value="About">About</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a target page.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationOrientation">
              <Form.Label>Orientation</Form.Label>
              <InputGroup hasValidation>
                <Form.Select
                  aria-label="Default select example"
                  required
                  ref={orientationRef}
                >
                  <option value="Horizontal">Horizontal</option>
                  <option value="Vertical">Vertical</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select an orientation.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationLink">
              <Form.Label>Link</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Advert link"
                  required
                  ref={linkRef}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid link.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFile">
              <Form.Label>Image</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="file"
                  placeholder="Upload Image"
                  required
                  ref={imageRef}
                />
                <Form.Control.Feedback type="invalid">
                  Please select an image for advert.
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

export default AddAdvertModal;
