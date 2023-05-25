import Sidebar from 'react-bootstrap-sidebar-menu';
import { NavLink, Outlet } from 'react-router-dom';

import './Auth.scss';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import classes from './Auth.module.css';
import { Card } from 'react-bootstrap';

const Auth = () => {
  const theme = 'dark';

  return (
    <>
      <Layout>
        <Sidebar
          variant={theme}
          bg={theme}
          expand="sm"
          className={classes.auth_sidebar}
        >
          <Sidebar.Collapse>
            <Sidebar.Header className={classes.sidebar_header}>
              <Sidebar.Brand className={`mx-2 my-2 ${classes.sidebar_brand}`}>
                <img
                  src="/assets/images/logo.svg"
                  alt="logo"
                  className={classes.sidebar_logo}
                />
              </Sidebar.Brand>
            </Sidebar.Header>
            <Sidebar.Body className={classes.sidebar_body}>
              <div className={classes.sidebar_heading_text}>
                Login to Our B2B Service Marketplace Platform
              </div>
              <div className={classes.sidebar_subheading_text}>
                Simply login to access our platform and get started on your next
                project.
              </div>
            </Sidebar.Body>
            <Sidebar.Footer className={classes.sidebar_footer}>
              <div className={classes.sidebar_footer_text_1}>
                <span>Don't have an account?</span>
              </div>
              <div className={classes.sidebar_footer_text_2}>
                <NavLink to="/register" className={classes.sidebar_footer_link}>
                  Click here
                </NavLink>
                to Get Started
              </div>
            </Sidebar.Footer>
          </Sidebar.Collapse>
        </Sidebar>
        <Main>
          <div className="form_container">
            <Card className="form_card">
              <Card.Body>
                <Outlet />
              </Card.Body>
            </Card>
          </div>
        </Main>
      </Layout>
    </>
  );
};

export default Auth;
