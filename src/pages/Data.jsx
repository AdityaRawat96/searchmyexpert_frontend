import classes from './Data.module.css';

import HeaderMain from '../components/HeaderMain';
import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Datatable from '../components/Datatable';
import FooterMain from '../components/FooterMain';
import useFetch from '../hooks/useFetch';
import SubscriptionForm from '../components/SubscriptionForm';
import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBaseballBall,
  faBasketball,
  faFootball,
  faHockeyPuck,
} from '@fortawesome/free-solid-svg-icons';

function Data() {
  const [matchData, setMatchData] = useState([]);
  const [advertsFetched, setAdvertsFetched] = useState(false);
  const [verticalAdvertData, setVerticalAdvertData] = useState([]);
  const [horizontalAdvertData, setHorizontalAdvertData] = useState([]);
  const [unfilterdData, setUnfilterdData] = useState([]);
  const [game, setGame] = useState('NBA');
  const { fetchData } = useFetch();
  const { filters } = useContext(FilterContext);

  useEffect(() => {
    fetchData({
      url: '/api/getAggregatedData?sport=' + game,
      method: 'GET',
    })
      .then((result) => {
        if (result.status) {
          setMatchData(result.data);
          setUnfilterdData(result.data);
        }
      })
      .then(() => {
        if (!advertsFetched) {
          fetchData({
            url: '/api/getBanners?page=Data',
            method: 'GET',
          }).then((result) => {
            if (result.status) {
              setVerticalAdvertData(
                result.data['Vertical'] ? result.data['Vertical'] : []
              );
              setHorizontalAdvertData(
                result.data['Horizontal'] ? result.data['Horizontal'] : []
              );
            }
          });
          setAdvertsFetched(true);
        }
      });
  }, [fetchData, verticalAdvertData, game, advertsFetched]);

  const applyFilters = () => {
    let filteredData = unfilterdData.filter((match) => {
      let show_match = false;
      match[Object.keys(match)[0]].forEach((match_detail) => {
        show_match =
          show_match ||
          (filters.spread.bets.min <= match_detail.SpreadBets &&
            match_detail.SpreadBets <= filters.spread.bets.max &&
            filters.spread.handled.min <= match_detail.SpreadHandled &&
            match_detail.SpreadHandled <= filters.spread.handled.max &&
            filters.moneyline.bets.min <= match_detail.MoneylineBets &&
            match_detail.MoneylineBets <= filters.moneyline.bets.max &&
            filters.moneyline.handled.min <= match_detail.MoneylineHandled &&
            match_detail.MoneylineHandled <= filters.moneyline.handled.max &&
            filters.total.bets.min <= match_detail.TotalBets &&
            match_detail.TotalBets <= filters.total.bets.max &&
            filters.total.handled.min <= match_detail.TotalHandled &&
            match_detail.TotalHandled <= filters.total.handled.max);
      });
      return show_match;
    });
    setMatchData(filteredData);
  };

  return (
    <div className="backgroud-custom-dark">
      <HeaderMain />

      <Container>
        <Row>
          <Col md={9} sm={12}>
            <div className={classes.header_container}>
              <span>Be a more informed bettor.....</span>
              <span>
                What direction is crowd going? Where is the "sharp" money? WYG
                provides free, easily-understandable, and valuable information
                will help you make better decisions and payouts.
              </span>
              <span>
                WYG provides the aggregated wagering percentage splits (also
                called "consensus") from several data sources into a single
                location. Data obtained from a single source could be biased
                based upon situs and demographics of the bettors. Therefore,
                aggregating the data from multiple sources smoothes out biased
                data.
              </span>
              <span>
                Sporting events with the largest variance in betting splits for
                wager count and / or dollars handled, commonly result in the
                change of lines and/or spread. Learn more about{' '}
                <Link to="/about">consensus here</Link>.
              </span>
              <span>
                WYG also offers the ability to filter and download the data into
                a clean csv table which other sites do not. So you can save this
                data for future analysis.
              </span>
              <span>
                Use this data in conjunction with your other sports analysis.
                Data is updated multiple times per hour.
              </span>
            </div>

            <SubscriptionForm />

            <Row>
              {horizontalAdvertData.map((advert) => (
                <Col md={6} sm={12} className="my-2" key={advert.ID}>
                  <a href={advert.Link} target="_blank" rel="noreferrer">
                    <img
                      crossOrigin="anonymous"
                      src={`/images/${advert.IMAGE}`}
                      width="100%"
                      height="auto"
                      alt="Banner Ad"
                    />
                  </a>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={12}>
                <div className={classes.button_container}>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('NBA')}
                    style={{
                      color: game !== 'NBA' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faBasketball} />
                    <span className="mx-1">NBA</span>
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('NFL')}
                    style={{
                      color: game !== 'NFL' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faFootball} />
                    <span className="mx-1">NFL</span>
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('NHL')}
                    style={{
                      color: game !== 'NHL' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faHockeyPuck} />
                    <span className="mx-1">NHL</span>
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('NCAAF')}
                    style={{
                      color: game !== 'NCAAF' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faFootball} />
                    <span className="mx-1">NCAAF</span>
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('NCAAB')}
                    style={{
                      color: game !== 'NCAAB' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faBasketball} />
                    <span className="mx-1">NCAAB</span>
                  </Button>
                  <Button
                    type="button"
                    variant="success"
                    className={`mx-2 my-3 ${classes.custom_button}`}
                    onClick={() => setGame('MLB')}
                    style={{
                      color: game !== 'MLB' ? 'white' : 'black',
                    }}
                  >
                    <FontAwesomeIcon icon={faBaseballBall} />
                    <span className="mx-1">MLB</span>
                  </Button>
                </div>
              </Col>
            </Row>
            <div className={classes.datatable_container}>
              <Datatable matches={matchData} applyFilters={applyFilters} />
            </div>
          </Col>
          <Col md={3} sm={12}>
            <Row>
              {verticalAdvertData.map((advert) => (
                <Col md={12} className="mt-3" key={advert.ID}>
                  <a href={advert.Link} target="_blank" rel="noreferrer">
                    <img
                      crossOrigin="anonymous"
                      src={`/images/${advert.IMAGE}`}
                      width="100%"
                      height="100%"
                      alt="Banner Ad"
                    />
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterMain />
    </div>
  );
}

export default Data;
