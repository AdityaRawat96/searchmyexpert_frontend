import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faLink, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  Container,
  Table,
  Button,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import { useCallback, useContext, useEffect } from 'react';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import AddAdvertModal from '../../components/AddAdvertModal';
import { UIContext } from '../../context/UIContext';

const Advertisement = () => {
  const [advertisementList, setAdvertisementList] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const { fetchData } = useFetch();
  const { updateUIState } = useContext(UIContext);

  const getAdvertisements = useCallback(() => {
    fetchData({
      url: '/api/getAllBanners',
      method: 'GET',
    }).then((result) => {
      if (result.status) {
        const advertList = [];
        Object.keys(result.data).map((key) =>
          result.data[key].map((advert) => advertList.push(advert))
        );
        setAdvertisementList(advertList);
      }
    });
  }, [fetchData]);

  useEffect(() => {
    getAdvertisements();
  }, [getAdvertisements]);

  const removeAdvertisement = (advertId) => {
    const body = {
      bannerId: advertId,
    };
    fetchData({
      url: '/api/removeBanner',
      method: 'POST',
      body,
    }).then((res) => {
      if (res.status) {
        updateUIState({
          show: true,
          title: 'Success',
          text: 'Advertisement removed!',
          icon: 'success',
        });
        setAdvertisementList((prevList) =>
          prevList.filter((ads) => ads.Id !== advertId)
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

  const showWarning = (advertId) => {
    updateUIState({
      show: true,
      title: 'Warning',
      text: 'Are you sure you want to remove this?',
      icon: 'warning',
      showCancel: true,
      confirmAction: () => removeAdvertisement(advertId),
    });
  };

  return (
    <Container>
      <AddAdvertModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        refreshadlist={getAdvertisements}
      />

      <Row>
        <Col md={12} className="text-end my-3">
          <Button
            variant="primary"
            type="button"
            className="float-right"
            onClick={() => setModalShow(true)}
          >
            <FontAwesomeIcon icon={faAdd} /> Add Advertisement
          </Button>
        </Col>
      </Row>
      <Card className="my-3">
        <Card.Header>Active Advertisements</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>ID</td>
                <td>Orientation</td>
                <td>Target</td>
                <td>Image</td>
                <td>Link</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {advertisementList.map((advert) => (
                <tr key={'advert_' + advert.Id}>
                  <td>{advert.Id}</td>
                  <td>{advert.Orientation}</td>
                  <td>{advert.Page}</td>
                  <td>
                    <Image
                      crossOrigin="anonymous"
                      src={`/images/${advert.Image}`}
                      alt="advert image"
                      height="100px"
                    />
                  </td>
                  <td>
                    <a href={advert.Link}>
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      type="button"
                      onClick={(e) => showWarning(advert.Id)}
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

export default Advertisement;
