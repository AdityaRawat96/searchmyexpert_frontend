import moment from 'moment';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MILESTONE_LIST = [
  {
    id: 1,
    title: 'Design Phase',
    status: 'Pending',
    delivery_date: '2021-09-01',
    percentage_released: 10,
    amount: 5000,
  },
  {
    id: 2,
    title: 'Development Phase	',
    status: 'Pending',
    delivery_date: '2021-09-01',
    percentage_released: 10,
    amount: 5000,
  },
  {
    id: 3,
    title: 'Uploading Products Admin Panel',
    status: 'Pending',
    delivery_date: '2021-09-01',
    percentage_released: 10,
    amount: 5000,
  },
  {
    id: 4,
    title: 'Final Testing',
    status: 'Pending',
    delivery_date: '2021-09-01',
    percentage_released: 10,
    amount: 5000,
  },
  {
    id: 5,
    title: 'Website Live to Domain',
    status: 'Pending',
    delivery_date: '2021-09-01',
    percentage_released: 10,
    amount: 5000,
  },
];

const MilestoneTab = () => {
  return (
    <Card className="tab_section card-no-header">
      <Card.Header>
        <div className="w-100">
          <h4>Milestones (Mil)</h4>
        </div>
      </Card.Header>
      <Card.Body>
        <div className="table-responsive">
          <table className="table table-custom-dahboard">
            <thead>
              <tr>
                <th>Mil. Name</th>
                <th>Mil. Amount</th>
                <th>% Release</th>
                <th>Delivery Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MILESTONE_LIST.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.title}</td>
                  <td>${ticket.amount}</td>
                  <td>{ticket.percentage_released}%</td>
                  <td>{moment(ticket.created_at).format('MMM D, Y')}</td>
                  <td className="text-green">{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MilestoneTab;
