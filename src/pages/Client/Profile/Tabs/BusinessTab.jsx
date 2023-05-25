import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const BusinessTab = () => {
  return (
    <Card className="tab_section">
      <Card.Body>
        <Form className="custom-input-form">
          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="brand-name">Brand Name</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="brand-name" />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="registered-busines-name">
                Registered Business Name
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="registered-busines-name"
                />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="company-type">Type of Company</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="company-type" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="mobile-details">Enter Mobile</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="mobile-details"
                />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="establishment-year">
                Year of Establishment
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="establishment-year"
                />
              </InputGroup>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="company-turnover">
                Comapny Turnover
              </Form.Label>
              <Form.Select aria-describedby="company-turnover" className="mb-3">
                <option>Select Turnover</option>
                <option value="1-50 lakh">1-50 lakh</option>
                <option value="50 lakh - 1 crore">50 lakh - 1 crore</option>
                <option value="1 - 10 crore">1 - 10 crore</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="employee-count">
                Number of Employees
              </Form.Label>
              <Form.Select aria-describedby="employee-count" className="mb-3">
                <option>Select Employee Number</option>
                <option value="1-50">1-50</option>
                <option value="50 - 100">50 - 100</option>
                <option value="100 - 10,000">100 - 10,000</option>
              </Form.Select>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="client-count">Number of Clients</Form.Label>
              <Form.Select aria-describedby="client-count" className="mb-3">
                <option>Select Client Number</option>
                <option value="1-50">1-50</option>
                <option value="50 - 100">50 - 100</option>
                <option value="100 - 10,000">100 - 10,000</option>
              </Form.Select>
            </Col>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="website">Website</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="website" />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="business-logo">Business Logo</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="business-logo"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12} sm={12}>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  aria-describedby="description"
                />
              </Form.Group>
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

export default BusinessTab;
