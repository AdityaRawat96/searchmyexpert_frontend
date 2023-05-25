import classes from './Clients.module.css';
import { Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faSearch,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Clients_List = [
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

const Clients = () => {
  return (
    <div className={`page-content-wrapper-main ${classes.Clients}`}>
      <Row className="mb-3">
        <Col md={6} sm={12}>
          <h3 className="page-content-heading">Active Clients</h3>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <InputGroup className="mb-3 input-search">
                <InputGroup.Text id="clients-search">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Clients"
                  aria-label="Search Clients"
                  aria-describedby="clients-search"
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

      {Clients_List.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-custom-dahboard">
            <thead>
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Industry</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {Clients_List.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>
                    <Link to={`/vendor/clients/${client.id}`}>
                      {client.name}
                    </Link>
                  </td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.industry}</td>
                  <td>{client.notes}</td>
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
                Sorry, there are no results for this choice. Please try another
                option.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
