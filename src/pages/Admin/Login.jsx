import { Col, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm';
import classes from './Login.module.css';

function Login() {
  return (
    <Row className={classes.login_wrapper}>
      <Col lg={6} md={12}>
        <div className={classes.form_container}>
          <LoginForm />
        </div>
      </Col>
      <Col lg={6} md={12} className="p-0 m-0">
        <div className={classes.login_side_image_container}></div>
      </Col>
    </Row>
  );
}

export default Login;
