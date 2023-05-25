import classes from './Meetings.module.css';
import { Col, Form, Image, InputGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faList,
  faSearch,
  faTableCellsLarge,
} from '@fortawesome/free-solid-svg-icons';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { useState } from 'react';

import './Fullcalendar-custom.scss';
import { Fragment } from 'react';

const Meetings = () => {
  const [state, setState] = useState({
    currentEvents: [],
  });

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (clickInfo) {
      console.log(clickInfo.event.title);
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setState({
      currentEvents: events,
    });
  };

  return (
    <Fragment>
      <div
        className={`page-content-wrapper-main ${classes.Meetings} mb-3 mx-5`}
      >
        <Row className="mt-3">
          <Col md={12} sm={12}>
            <h4>Meetings Calendar</h4>
          </Col>
        </Row>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'dayGridMonth,timeGridWeek,timeGridDay',
          center: 'prev,next today',
          right: 'title',
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />
    </Fragment>
  );
};

function renderEventContent(eventInfo) {
  console.log(eventInfo);
  return (
    <>
      <i>{eventInfo.event.title}</i>
      <b>{eventInfo.timeText}</b>
    </>
  );
}

export default Meetings;
