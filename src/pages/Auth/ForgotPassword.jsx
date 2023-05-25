import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import useFetch from '../../hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { UIContext } from '../../context/UIContext';
import { AuthContext } from '../../context/AuthContext';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [validated, setValidated] = useState(false);
  const passwordRef = useRef();
  const emailRef = useRef();
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);
  const { Login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      const body = {
        username: emailRef.current.value,
        password: passwordRef.current.value,
      };
      fetchData({
        url: '/api/adminLogin',
        method: 'POST',
        body,
      }).then((res) => {
        if (res.status) {
          Login('admin', res.data.authtoken);
        } else {
          updateUIState({
            show: true,
            title: 'Error',
            text: 'Invalid credentials.',
            icon: 'error',
          });
        }
      });
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 text-center">
        <span className="form-header-sm">SIGN IN</span>
        <span className="form-header-lg">Forgot your Password?</span>
        <span className="form-header-md">
          Please enter the email address associated with your account and we
          will email you a link to reset your password.
        </span>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} lg={12} md="12" controlId="validationAdminEmail">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupAppend"
              required
              ref={emailRef}
            />
            <InputGroup.Text id="inputGroupAppend">
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row>
        <Col lg={12} md={12} className="text-end">
          <Button type="submit" className="px-5 form-control btn-cta my-4">
            Reset Password
          </Button>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} className="text-center">
          <span className="forgot-password-label">
            <Link to="/auth/login">&#60; &nbsp; Back</Link>
          </span>
        </Col>
      </Row>
    </Form>
  );
}

export default ForgotPassword;
