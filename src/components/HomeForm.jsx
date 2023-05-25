import React, { useContext, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AuthContext } from '../context/AuthContext';
import { UIContext } from '../context/UIContext';
import useFetch from '../hooks/useFetch';

import classes from './HomeForm.module.css';

function HomeForm() {
  const [validated, setValidated] = useState(false);
  const passcodeRef = useRef();
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);
  const { Login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const body = {
        passcode: passcodeRef.current.value,
      };
      fetchData({
        url: '/api/passcodeLogin',
        method: 'POST',
        body,
      }).then((res) => {
        if (res.status && res.data.passcodeValid) {
          Login('user', res.data.authtoken);
        } else {
          updateUIState({
            show: true,
            title: 'Error',
            text: 'Invalid Passcode.',
            icon: 'warning',
          });
        }
      });
    }
    setValidated(true);
  };

  return (
    <Container className={classes.homeform_container}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPasscode">
          <Form.Label className={classes.homeform_label}>Pass code</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              ref={passcodeRef}
              className={classes.homeform_input}
              type="text"
              placeholder="Enter passcode"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a passcode.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <InputGroup hasValidation>
            <Form.Check
              className={classes.homeform_checkbox}
              type="checkbox"
              label="By entering this website, You certify that you are above 18yo and abide by the sports wagering laws in the state in which you reside."
              required
            />
            <Form.Control.Feedback type="invalid">
              Please agree to the above terms and conditions.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Button
          variant="danger"
          type="submit"
          className={classes.homeform_button}
        >
          ENTER WYG
        </Button>
      </Form>
    </Container>
  );
}

export default HomeForm;
