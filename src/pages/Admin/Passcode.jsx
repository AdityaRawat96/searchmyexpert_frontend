import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Card, Container, Table, Button, Row, Col } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import { UIContext } from '../../context/UIContext';
import AddPasscodeModal from '../../components/AddPasscodeModal';

const Passcode = () => {
  const [passcodeData, setPasscodeData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);

  useEffect(() => {
    fetchData({
      url: '/api/getPasscodes',
      method: 'GET',
    }).then((result) => {
      if (result.status) {
        setPasscodeData(result.data);
      }
    });
  }, [fetchData]);

  const removePasscode = (passcodeId) => {
    const body = {
      passcodeId: passcodeId,
    };
    fetchData({
      url: '/api/removePasscode',
      method: 'POST',
      body,
    }).then((res) => {
      if (res.status) {
        updateUIState({
          show: true,
          title: 'Success',
          text: 'Passcode removed!',
          icon: 'success',
        });
        setPasscodeData((prevList) =>
          prevList.filter((ads) => ads.Id !== passcodeId)
        );
      } else {
        updateUIState({
          show: true,
          title: 'Error',
          text: 'An unexpected error occurred! Please try again.',
          icon: 'error',
        });
      }
    });
  };

  const showWarning = (passcodeId) => {
    updateUIState({
      show: true,
      title: 'Warning',
      text: 'Are you sure you want to remove this?',
      icon: 'warning',
      showCancel: true,
      confirmAction: () => removePasscode(passcodeId),
    });
  };

  return (
    <Container>
      <AddPasscodeModal show={modalShow} onHide={() => setModalShow(false)} />

      <Row>
        <Col md={12} className="text-end my-3">
          <Button
            variant="primary"
            type="button"
            className="float-right"
            onClick={() => setModalShow(true)}
          >
            <FontAwesomeIcon icon={faAdd} /> Add Passcode
          </Button>
        </Col>
      </Row>
      <Card>
        <Card.Header>Active Passcodes</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>ID</td>
                <td>Passcode</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {passcodeData.map((passcode) => (
                <tr key={'passcode_' + passcode.Id}>
                  <td>{passcode.Id}</td>
                  <td>{passcode.Passcode}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      type="button"
                      onClick={(e) => showWarning(passcode.Id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Passcode;
