import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';

const VerificationTab = () => {
  return (
    <Card className="tab_section">
      <Card.Body>
        <Form className="custom-input-form">
          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="business_plan">Business Plan</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="business_plan" />
              </InputGroup>
            </Col>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="business_plan_file">
                Upload Business Plan
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="business_plan_file"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="gst_number">GST Number</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="gst_number" />
              </InputGroup>
            </Col>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="gst_number_file">Upload GST File</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="gst_number_file"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="adhaar_number">Adhaar Number</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="adhaar_number" />
              </InputGroup>
            </Col>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="adhaar_number_file">
                Upload Adhaar File
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="adhaar_number_file"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="coc_number">Coc Number</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="" aria-describedby="coc_number" />
              </InputGroup>
            </Col>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="coc_number_file">Upload Coc File</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="coc_number_file"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={4} sm={12}>
              <Form.Label htmlFor="msme_registration_number">
                Msme Registration Number
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder=""
                  aria-describedby="msme_registration_number"
                />
              </InputGroup>
            </Col>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="msme_registration_number_file">
                Msme Registration File
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="msme_registration_number_file"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col md={8} sm={12}>
              <Form.Label htmlFor="office_address_proof">
                Upload Office Address Proof
              </Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="file"
                  placeholder=""
                  aria-describedby="office_address_proof"
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

export default VerificationTab;
