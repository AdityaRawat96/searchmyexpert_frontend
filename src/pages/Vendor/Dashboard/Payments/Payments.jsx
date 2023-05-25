import classes from './Payments.module.css';
import { Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faSearch,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const Payments_List = [
  {
    id: 1,
    description: 'Earnings payout request #3578824 (Project Name)',
    amount: '₹ 1,000.00',
    date: '12/12/2021',
  },
  {
    id: 2,
    description: 'Earnings payout request #345424 (Project Name)',
    amount: '₹ 1,500.00',
    date: '12/12/2021',
  },
  {
    id: 3,
    description: 'Earnings payout request #35435824 (Project Name)',
    amount: '₹ 6,000.00',
    date: '12/12/2021',
  },
];

const Payments = () => {
  return (
    <div className={`page-content-wrapper-main ${classes.Payments}`}>
      <Row className={`mb-3 ${classes.payment_toolbar}`}>
        <Col md={6} sm={12}>
          <h3>Your Earnings</h3>
        </Col>
        <Col md={6} sm={12}>
          <Row>
            <Col md={6} sm={12}>
              <InputGroup className="mb-3 input-search">
                <InputGroup.Text id="payment-search">
                  <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search Payment"
                  aria-label="Search Payment"
                  aria-describedby="projects-payment"
                />
              </InputGroup>
            </Col>
            <Col md={6} sm={12} className={classes.action_buttons_container}>
              <Form.Select>
                <option value="earnings_balance">Earnings Balance</option>
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
      {Payments_List.length > 0 ? (
        <Fragment className="mt-5">
          <h4>Earnings history</h4>
          <div className="w-100 table-responsive">
            <table className="table table-custom-dahboard mt-3">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {Payments_List.map((payment) => (
                  <tr key={payment.id}>
                    <td>{payment.description}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
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

export default Payments;
