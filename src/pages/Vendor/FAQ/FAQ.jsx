import { Accordion } from 'react-bootstrap';
import classes from './FAQ.module.css';

const FAQ_List = [
  {
    title:
      'Are Any Advance Payments Made to the Vendor After Deal Finalization?',
    description:
      'No. We follow a milestone-based system wherein payments are released to the vendor after a defined stage of progress or milestone has been achieved and approved by the client. Milestones depend on the predefined structure of your contract.',
  },
  {
    title: 'Do We Outsource The Project To You?',
    description: '',
  },
  {
    title: 'Are There Any Charges For Subscribing To Your Platform?',
    description: '',
  },
  {
    title: 'Do You Assign One Consultant To One Vendor?',
    description: '',
  },
  {
    title: 'Do You Have Freelancers On Your Platform?',
    description: '',
  },
  {
    title: 'Do You Give Closed Deals/Converted Clients To Vendors?',
    description: '',
  },
];

const FAQ = () => {
  return (
    <div className={`page-content-wrapper-main ${classes.FAQ}`}>
      <h3 className="page-content-heading">Frequently Asked Questions</h3>
      <Accordion defaultActiveKey="0" flush alwaysOpen className="mt-5">
        {FAQ_List.map((item, index) => (
          <Accordion.Item key={index} eventKey={index} className="mb-3">
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.description}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
