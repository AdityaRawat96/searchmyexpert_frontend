import classes from './Client.module.css';
import { Card, Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFolder,
  faList,
  faSearch,
  faStar,
  faTableCellsLarge,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const Client_List = [
  {
    id: 1,
    name: 'Client 1',
    email: 'client@gmail.com',
    phone: '1234567890',
    industry: 'Industry 1',
    notes: 'Client Address',
  },
  {
    id: 2,
    name: 'Client 2',
    email: 'client@gmail.com',
    phone: '1234567890',
    industry: 'Industry 2',
    notes: 'Client Address',
  },
];

const Active_Projects_List = [
  {
    id: 1,
    name: 'Project 1',
    status: 'Active',
    service: 'Service 1',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 2,
    name: 'Project 2',
    status: 'Active',
    service: 'Service 2',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 3,
    name: 'Project 3',
    status: 'Active',
    service: 'Service 3',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 4,
    name: 'Project 4',
    status: 'Active',
    service: 'Service 4',
    amount: '1000',
    date: '01/01/2021',
  },
];

const Completed_Projects_List = [
  {
    id: 1,
    name: 'Project 1',
    status: 'Completed',
    service: 'Service 1',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 2,
    name: 'Project 2',
    status: 'Completed',
    service: 'Service 2',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 3,
    name: 'Project 3',
    status: 'Completed',
    service: 'Service 3',
    amount: '1000',
    date: '01/01/2021',
  },
  {
    id: 4,
    name: 'Project 4',
    status: 'Completed',
    service: 'Service 4',
    amount: '1000',
    date: '01/01/2021',
  },
];

const Client = () => {
  const { id } = useParams();
  const [client, setClient] = useState(
    Client_List.filter((t) => t.id === parseInt(id))[0]
  );

  return (
    <div className={`page-content-wrapper-main ${classes.client}`}>
      <Row className="mb-3">
        <Col md={6} sm={12}>
          <h3>{client.name}</h3>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <InputGroup className="mb-3 input-search">
                <InputGroup.Text id="client-search">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search client"
                  aria-label="Search client"
                  aria-describedby="client-search"
                />
              </InputGroup>
            </Col>
            <Col md={6} sm={12} className={classes.action_buttons_container}>
              <Form.Select aria-label="Default select example">
                <option value="all" default>
                  All
                </option>
                <option value="active">Active</option>
                <option value="proposal">Closed</option>
              </Form.Select>
              <button>
                <FontAwesomeIcon icon={faList} />
              </button>
              <button>
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Active Projects</span>
            <span className={classes.subtitle_secondary}>
              {Active_Projects_List.length}
            </span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span
                  className={`${classes.icon_secondary} ${classes.icon_orange}`}
                >
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <Card className={`${classes.card}`}>
            <span className={classes.label}>Completed Projects</span>
            <span className={classes.subtitle_secondary}>
              {Completed_Projects_List.length}
            </span>
            <div className="w-100 text-end">
              <div className={classes.icon}>
                <span className={classes.icon_primary}>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
                <span className={`${classes.icon_secondary}`}>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12}>
          <h4 className="page-content-heading my-5">Active Projects</h4>
          {Active_Projects_List.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-custom-dahboard">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Service</th>
                    <th>Project Amount</th>
                    <th>Created On</th>
                  </tr>
                </thead>
                <tbody>
                  {Active_Projects_List.map((project) => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{project.status}</td>
                      <td>{project.service}</td>
                      <td>{project.amount}</td>
                      <td>{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="center-elements-div mt-5">
              <div className="no-data-container">
                <Image src="/assets/images/no_data.svg" alt="no data" />
                <div className="no-data-text-container">
                  <h3>No Results</h3>
                  <span>
                    Sorry, there are no results for this choice. Please try
                    another option.
                  </span>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>

      <Row>
        <Col md={12} sm={12}>
          <h4 className="page-content-heading my-5">Completed Projects</h4>
          {Completed_Projects_List.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-custom-dahboard">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Service</th>
                    <th>Project Amount</th>
                    <th>Created On</th>
                  </tr>
                </thead>
                <tbody>
                  {Completed_Projects_List.map((project) => (
                    <tr key={project.id}>
                      <td>{project.name}</td>
                      <td>{project.status}</td>
                      <td>{project.service}</td>
                      <td>{project.amount}</td>
                      <td>{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="center-elements-div mt-5">
              <div className="no-data-container">
                <Image src="/assets/images/no_data.svg" alt="no data" />
                <div className="no-data-text-container">
                  <h3>No Results</h3>
                  <span>
                    Sorry, there are no results for this choice. Please try
                    another option.
                  </span>
                </div>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Client;
