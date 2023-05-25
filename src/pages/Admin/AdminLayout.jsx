import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKey,
  faAd,
  faUserGroup,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Navbar } from 'react-bootstrap';
import Sidebar from 'react-bootstrap-sidebar-menu';
import { NavLink, Outlet } from 'react-router-dom';

import './AdminLayout.scss';
import Layout from '../../components/Layout';
import Main from '../../components/Main';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AdminLayout = () => {
  const { Logout } = useContext(AuthContext);
  const theme = 'dark';

  return (
    <>
      <Layout>
        <Navbar className="main_header" expand="lg" bg={theme} variant={theme}>
          <Container fluid>
            <NavLink to="/" className="navbar-brand">
              WhatYaGot??
            </NavLink>
          </Container>
        </Navbar>
        <Sidebar variant={theme} bg={theme} expand="sm">
          <Sidebar.Collapse>
            <Sidebar.Header>
              <Sidebar.Brand className="mx-2 my-2">Dashboard</Sidebar.Brand>
              <Sidebar.Toggle />
            </Sidebar.Header>
            <Sidebar.Body>
              <Sidebar.Nav className="mt-3">
                <NavLink
                  className="my-2 sidebar-menu-nav-link"
                  to="/admin/passcode"
                >
                  <Sidebar.Nav.Icon>
                    <FontAwesomeIcon icon={faKey} />
                  </Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Passcode</Sidebar.Nav.Title>
                </NavLink>
                <NavLink
                  className="my-2 sidebar-menu-nav-link"
                  to="/admin/advertisement"
                >
                  <Sidebar.Nav.Icon>
                    <FontAwesomeIcon icon={faAd} />
                  </Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Advertisements</Sidebar.Nav.Title>
                </NavLink>
                <NavLink
                  className="my-2 sidebar-menu-nav-link"
                  to="/admin/subscriber"
                >
                  <Sidebar.Nav.Icon>
                    <FontAwesomeIcon icon={faUserGroup} />
                  </Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Subscribers</Sidebar.Nav.Title>
                </NavLink>
                <NavLink
                  className="my-2 sidebar-menu-nav-link"
                  to="/admin/login"
                  onClick={Logout}
                >
                  <Sidebar.Nav.Icon>
                    <FontAwesomeIcon icon={faPowerOff} />
                  </Sidebar.Nav.Icon>
                  <Sidebar.Nav.Title>Logout</Sidebar.Nav.Title>
                </NavLink>
              </Sidebar.Nav>
            </Sidebar.Body>
          </Sidebar.Collapse>
        </Sidebar>
        <Main>
          <Outlet />
        </Main>
      </Layout>
    </>
  );
};

export default AdminLayout;
