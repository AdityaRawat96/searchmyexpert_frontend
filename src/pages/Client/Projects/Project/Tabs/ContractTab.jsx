import { Button, Card } from 'react-bootstrap';

const ContractTab = () => {
  return (
    <Card className="tab_section card-no-header">
      <Card.Header>
        <div className="w-100 text-end">
          <Button variant="primary" className="btn-cta">
            Download
          </Button>
        </div>
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  );
};

export default ContractTab;
