import classes from './About.module.css';

import HeaderMain from '../components/HeaderMain';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import FooterMain from '../components/FooterMain';
import SubscriptionForm from '../components/SubscriptionForm';
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function About() {
  const { fetchData } = useFetch();
  const [verticalAdvertData, setVerticalAdvertData] = useState([]);
  const [horizontalAdvertData, setHorizontalAdvertData] = useState([]);

  useEffect(() => {
    fetchData({
      url: `/getBanners?page=About`,
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
  }, [fetchData]);

  return (
    <div className="backgroud-custom-dark">
      <HeaderMain />
      <Container>
        <Row>
          <Col md={9} sm={12}>
            <Row className="mt-2">
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

            <SubscriptionForm />

            <div className={classes.about_text}>
              <span>
                WYG provides valuable sports wagering consensus data to utilize
                along with your other sports analysis.
              </span>
              <span>
                When is it best to wager with or against the public (betting
                count) or whales (large dollar volume)?
              </span>
              <span>
                The public commonly makes sports picks based upon overwhelming
                favorites, favorite team, most recent performance, home team
                advantage, social media and / or biased by favorite players.
                Also, teams with larger fan base may also skew the wagering odds
                (think New York Yankees vs Tampa Devil Rays). Frequently, the
                public will make the wagers based upon "feeling" while ignoring
                facts in opposition. As result, the lines commonly over-react to
                the wagering activity and adjust from the line open to
                game-time. An observant and patient bettor can use this
                information to get more favorable odds as sportsbooks typically
                adjust their lines in attempt to encourage more bettors to take
                opposing positions to balance out the bettors.
              </span>
              <span>
                Wagering against the public (aka "fading") is popular strategy
                as the theory is "the public is always wrong". While there is
                some evidence to support the public's poor betting record
                (sportsbooks would not exist if the public were consistently
                accurate), it is not always the case and each sporting event
                should be evaluated under its own conditions as many other
                factors can affect the outcome. Injuries, matchups, change in
                lineups, weather, and unpredictable plays can all play a factor
                into the final score. Based upon your analysis, If you wish to
                wager with the public - it might be best to lock-in that wager
                early. However, if "fading" the public your patience may be
                rewarded with better odds / payout, if you wait closer to
                gametime.
              </span>
              <span>
                The general public prefers to bet on favorites and high scoring
                events - afterall, its more exciting.....who wants to watch a
                boring game? The lesser popular wager is to expect the underdog
                to play a close game or upset. Use consensus, along with your
                other analysis, to find good-value wagers.
              </span>
              <span>
                Pay attention to the moneyline consensus vs spread consensus.
                "Sharp" bettors may be influencing the spread. If the line moves
                in opposition of the expected change in odds and/or moves
                quickly, it typically due to a large wager(s). Take this into
                consideration. Also, check other sportsbooks to see if you can
                capture a line that has not quickly reflected these changes in
                line movement.
              </span>
              <span>
                Profitable sports bettors look for good value opportunities in
                wagers and use a variety of data to make their decisions. WYG
                provides some of the data critical to this decision process. WYG
                provides consensus data in a clean table to filter and download
                for future analysis while other sites present this data in a
                confusing format. Again, use this data as you deem appropriate
                with your other analysis.
              </span>
              <span>
                You are minutes away from participating in the action. Open an
                account within 15 minutes with the sportsbooks above to place
                your smart, logic-based, informed wagers.
              </span>
              <span>Good luck and stay in-the-green.</span>
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

export default About;
