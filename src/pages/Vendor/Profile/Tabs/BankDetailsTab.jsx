import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const BankDetailsTab = () => {
  return (
    <Card className="tab_section">
      <Card.Body>
        <Form className="custom-input-form">
          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="bank-name">Bank Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="bank-name" />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="account-number">Account Number</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="account-number"
                />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="ifsc-code">IFSC Code</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="ifsc-code" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="branch-name">Branch Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="branch-name" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="cancelled-cheque">
                Upload Cancelled Cheque
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="cancelled-cheque"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={12}>
              <Button
                variant="primary"
                type="button"
                className="btn-cta form-control"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BankDetailsTab;
