import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { UIContext } from '../context/UIContext';
import useFetch from '../hooks/useFetch';
import classes from './SubscriptionForm.module.css';

function SubscriptionForm() {
  const [validated, setValidated] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const body = {
        name: nameRef.current.value,
        email: emailRef.current.value,
      };
      fetchData({
        url: '/api/subscribe',
        method: 'POST',
        body,
      }).then((res) => {
        if (res.status) {
          updateUIState({
            show: true,
            title: 'Success',
            text: 'Subscription sucessful',
            icon: 'success',
          });
        } else {
          updateUIState({
            show: true,
            title: 'Error',
            text: 'Already subscribed with this email.',
            icon: 'warning',
          });
        }
      });
    }
    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={classes.dataform_container}
    >
      <span className={classes.form_heading}>Subscribe</span>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" sm="12" controlId="validationAdminName">
          <Form.Label className={classes.dataform_label}>Name</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              aria-describedby="inputGroupPrepend"
              required
              className={classes.dataform_input}
              ref={nameRef}
            />
            <Form.Control.Feedback type="invalid">
              Please enter your name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="6" sm="12" controlId="validationAdminEmail">
          <Form.Label className={classes.dataform_label}>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              aria-describedby="inputGroupPrepend"
              required
              className={classes.dataform_input}
              ref={emailRef}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Col md={12} className="text-end">
          <Button
            type="submit"
            className={`${classes.dataform_button} px-5 mt-3`}
          >
            Subscribe
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SubscriptionForm;
