import { NavLink, Outlet } from 'react-router-dom';

import './Auth.scss';
import classes from './Auth.module.css';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const Auth = () => {
  const [show, setShow] = useState(false);

  let resizeWindow = () => {
    if (window.innerWidth < 900) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.sidebar_header}>
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            className={classes.sidebar_logo}
          />
        </div>
        <div className={classes.sidebar_body}>
          <div className={classes.sidebar_heading_text}>
            Login to Our B2B Service Marketplace Platform
          </div>
          <div className={classes.sidebar_subheading_text}>
            Simply login to access our platform and get started on your next
            project.
          </div>
        </div>
        <div className={classes.sidebar_content}>
          {show && (
            <div className="form_container">
              <Card className="form_card">
                <Card.Body>
                  <Outlet />
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
        <div className={classes.sidebar_footer}>
          <div className={classes.sidebar_footer_text_1}>
            <span>Don't have an account?</span>
          </div>
          <div className={classes.sidebar_footer_text_2}>
            <NavLink to="/register" className={classes.sidebar_footer_link}>
              Click here
            </NavLink>
            to Get Started
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {!show && (
          <div className="form_container">
            <Card className="form_card">
              <Card.Body>
                <Outlet />
              </Card.Body>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
