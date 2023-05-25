import { useEffect, useState } from 'react';

import classes from './ClientLayout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faPowerOff,
  faUser,
  faMessage,
  faEnvelope,
  faChartColumn,
  faMoneyBill,
  faSquare,
  faBell,
  faCircleDollarToSlot,
  faSearch,
  faEllipsis,
  faTimes,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'react-bootstrap/Image';
import { Form, InputGroup, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Sidebar from 'react-bootstrap-sidebar-menu';
import { NavLink, Outlet } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import './ClientLayout.scss';

const ClientLayout = () => {
  const { Logout } = useContext(AuthContext);
  const theme = 'dark';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  let resizeWindow = () => {
    if (window.innerWidth < 1200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <Sidebar
        variant={theme}
        bg={theme}
        expand={false}
        className={`${classes.sidebar} ${
          show ? classes.sidebar_show : classes.sidebar_hide
        }`}
      >
        <Sidebar.Collapse className={classes.sidebar_container}>
          <Sidebar.Header className={classes.sidebar_header}>
            <Sidebar.Brand className={`mx-2 my-2 ${classes.sidebar_brand}`}>
              <img
                src="/assets/images/logo.svg"
                alt="logo"
                className={classes.sidebar_logo}
              />
              <button
                className={`${classes.sidebar_close_btn}`}
                onClick={handleClose}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </Sidebar.Brand>
          </Sidebar.Header>
          <Sidebar.Body className={classes.sidebar_body}>
            <Sidebar.Sub>
              <Sidebar.Sub.Toggle>
                <Sidebar.Nav className="mt-3">
                  <NavLink
                    className="my-2 sidebar-menu-nav-link"
                    to="/client/dashboard"
                    onClick={() => {
                      if (window.innerWidth < 1200) handleClose();
                    }}
                  >
                    <Sidebar.Nav.Icon>
                      <FontAwesomeIcon icon={faSquare} />
                    </Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>Dashboard</Sidebar.Nav.Title>
                  </NavLink>
                </Sidebar.Nav>
              </Sidebar.Sub.Toggle>
              <Sidebar.Sub.Collapse>
                <Sidebar.Nav>
                  <NavLink
                    className="px-5 sidebar-menu-nav-link"
                    to="/client/reports"
                    onClick={() => {
                      if (window.innerWidth < 1200) handleClose();
                    }}
                  >
                    <Sidebar.Nav.Icon>
                      <FontAwesomeIcon icon={faChartColumn} />
                    </Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>Reports</Sidebar.Nav.Title>
                  </NavLink>
                </Sidebar.Nav>
                <Sidebar.Nav>
                  <NavLink
                    className="px-5 sidebar-menu-nav-link"
                    to="/client/meetings"
                    onClick={() => {
                      if (window.innerWidth < 1200) handleClose();
                    }}
                  >
                    <Sidebar.Nav.Icon>
                      <FontAwesomeIcon icon={faUserGroup} />
                    </Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>Meetings</Sidebar.Nav.Title>
                  </NavLink>
                </Sidebar.Nav>
                <Sidebar.Nav>
                  <NavLink
                    className="px-5 sidebar-menu-nav-link"
                    to="/client/payments"
                    onClick={() => {
                      if (window.innerWidth < 1200) handleClose();
                    }}
                  >
                    <Sidebar.Nav.Icon>
                      <FontAwesomeIcon icon={faMoneyBill} />
                    </Sidebar.Nav.Icon>
                    <Sidebar.Nav.Title>Payments</Sidebar.Nav.Title>
                  </NavLink>
                </Sidebar.Nav>
              </Sidebar.Sub.Collapse>
            </Sidebar.Sub>
            <Sidebar.Nav>
              <NavLink
                className="my-2 sidebar-menu-nav-link"
                to="/client/projects"
                onClick={() => {
                  if (window.innerWidth < 1200) handleClose();
                }}
              >
                <Sidebar.Nav.Icon>
                  <FontAwesomeIcon icon={faBox} />
                </Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>Projects</Sidebar.Nav.Title>
              </NavLink>
              <NavLink
                className="my-2 sidebar-menu-nav-link"
                to="/client/profile"
                onClick={() => {
                  if (window.innerWidth < 1200) handleClose();
                }}
              >
                <Sidebar.Nav.Icon>
                  <FontAwesomeIcon icon={faUser} />
                </Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>Profile</Sidebar.Nav.Title>
              </NavLink>
              <NavLink
                className="my-2 sidebar-menu-nav-link"
                to="/client/faq"
                onClick={() => {
                  if (window.innerWidth < 1200) handleClose();
                }}
              >
                <Sidebar.Nav.Icon>
                  <FontAwesomeIcon icon={faMessage} />
                </Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>FAQ's</Sidebar.Nav.Title>
              </NavLink>
              <NavLink
                className="my-2 sidebar-menu-nav-link"
                to="/client/support"
                onClick={() => {
                  if (window.innerWidth < 1200) handleClose();
                }}
              >
                <Sidebar.Nav.Icon>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>Support</Sidebar.Nav.Title>
              </NavLink>
              <NavLink
                className="my-2 sidebar-menu-nav-link"
                to="/auth/login"
                onClick={Logout}
              >
                <Sidebar.Nav.Icon>
                  <FontAwesomeIcon icon={faPowerOff} />
                </Sidebar.Nav.Icon>
                <Sidebar.Nav.Title>Logout</Sidebar.Nav.Title>
              </NavLink>
            </Sidebar.Nav>
          </Sidebar.Body>
          <Sidebar.Footer className={classes.sidebar_footer}>
            <Image
              roundedCircle
              src="/assets/images/avatar.png"
              className="sidebar_avatar"
            />
            <div className={classes.sidebar_footer_details}>
              <span className={classes.sidebar_footer_name}>Simran Singh</span>
              <span className={classes.sidebar_footer_email}>
                simran.singh@gmail.com
              </span>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="I'm Available"
                />
              </Form>
            </div>
          </Sidebar.Footer>
        </Sidebar.Collapse>
      </Sidebar>
      <div
        className={`${classes.main} ${
          show ? classes.main_show : classes.main_hide
        }`}
      >
        <div className={classes.header_primary}>
          <img
            src="/assets/images/logo-dark.svg"
            alt="logo"
            className={classes.sidebar_logo}
          />
        </div>
        <Navbar expand="sm" className={classes.navbar}>
          <button className="btn mx-3" onClick={toggleShow}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
          <Navbar.Brand href="#">
            <InputGroup className="input-search">
              <InputGroup.Text id="navbar-search">
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search Here"
                aria-label="Search Here"
                aria-describedby="navbar-search"
              />
            </InputGroup>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{
                marginLeft: 'auto',
                marginRight: '10px',
              }}
              navbarScroll
            >
              <NavDropdown
                title={
                  <div className="d-flex nav_title_container">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="nav-dropdown"
                    />
                    <span className="nav-title">Messages</span>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <div className="d-flex nav_title_container">
                    <FontAwesomeIcon
                      icon={faCircleDollarToSlot}
                      className="nav-dropdown"
                    />
                    <span className="nav-title">Transactions</span>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <div className="d-flex nav_title_container">
                    <FontAwesomeIcon icon={faBell} className="nav-dropdown" />
                    <span className="nav-title">Notifications</span>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <div className="d-flex nav_title_container">
                    <Image
                      roundedCircle
                      src="/assets/images/avatar.png"
                      className="navbar_avatar"
                    />
                    <span className="nav-title">Profile</span>
                  </div>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;
