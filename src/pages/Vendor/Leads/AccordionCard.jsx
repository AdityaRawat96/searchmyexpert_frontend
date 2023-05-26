import { Button, Card } from 'react-bootstrap';

import classes from './AccordionCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import { Fragment, useEffect, useState } from 'react';

const AccordionCard = (props) => {
  const [cardCollapsed, setCardCollapsed] = useState(true);

  useEffect(() => {
    if (props.index === props.collapsedCard) {
      setCardCollapsed(false);
    } else {
      setCardCollapsed(true);
    }
  }, [props.collapsedCard, props.index]);

  return (
    <Card key={props.index} className={`mb-3 ${classes.card}`}>
      <Card.Header className={classes.card_header}>
        <div className={classes.card_header_container}>
          <div className={classes.card_header_container_left}>
            <span className={classes.card_header_container_left_title}>
              Status:{' '}
            </span>
            <span className={classes.card_header_container_left_subtitle}>
              {String(props.item.status).toLocaleLowerCase() === 'new'
                ? 'New'
                : `Pending Client's Meeting`}
            </span>
          </div>
          <div className={classes.card_header_container_right}>
            {String(props.item.status).toLocaleLowerCase() === 'new' ? (
              <Fragment>
                <Button variant="success" className={classes.btn_accept}>
                  Accept Lead
                </Button>
                <Button variant="danger" className={classes.btn_reject}>
                  Reject Lead
                </Button>
              </Fragment>
            ) : (
              <Button
                variant="success"
                className={classes.btn_submit}
                onClick={props.handleShow}
              >
                Submit Proposal
              </Button>
            )}
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div className={`d-flex ${classes.card_body_container}`}>
          <div className={classes.card_body_item}>
            <span className={classes.card_body_item_title}>Date:</span>
            <span className={classes.card_body_item_subtitle}>
              {moment(props.item.date).format('MMM D, Y')}
            </span>
          </div>
          <div className={classes.card_body_item}>
            <span className={classes.card_body_item_title}>Name:</span>
            <span className={classes.card_body_item_subtitle}>
              {props.item.name}
            </span>
          </div>
          <div className={classes.card_body_item}>
            <span className={classes.card_body_item_title}>Service Type:</span>
            <span className={classes.card_body_item_subtitle}>
              {props.item.service_type}
            </span>
          </div>
          <div className={classes.card_body_item}>
            <span className={classes.card_body_item_title}>Budget:</span>
            <span className={classes.card_body_item_subtitle}>
              ${props.item.budget}
            </span>
          </div>
          <div className={classes.card_body_item}>
            <span className={classes.card_body_item_title}>Deadline:</span>
            <span className={classes.card_body_item_subtitle}>
              {moment(props.item.deadline).format('MMM D, Y')}
            </span>
          </div>
        </div>
        <div className={classes.card_body_description_container}>
          <div
            className={`${classes.card_description_item} ${
              cardCollapsed ? classes.card_collapsed : classes.card_expanded
            } `}
          >
            <span className={classes.card_body_item_title}>Description:</span>
            <span className={classes.card_body_description}>
              {props.item.description}
            </span>
          </div>
          <div className={classes.card_description_controls}>
            <button
              className={`${classes.card_control_button} ${
                cardCollapsed
                  ? classes.card_description_controls_normal
                  : classes.card_description_controls_inverted
              } `}
              onClick={() => {
                props.cardToggleHandler(props.index);
              }}
            >
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccordionCard;
