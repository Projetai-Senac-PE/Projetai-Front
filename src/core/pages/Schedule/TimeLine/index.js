import React from 'react';

// Import css
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Col, Row } from 'react-bootstrap';

// Import list
import TeachCol from "./TeachCol";
import GuestsCol from './GuestsCol';
import ProjectsCol from './ProjectsCol';

function TimeLine(props) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work "
      icon={props.children}
      date={props.day}
      contentStyle={{ background: `${props.cBackground}`, color: `${props.textColor}` }}
      contentArrowStyle={{ borderRight: `7px solid  ${props.cBackground}` }}
      iconStyle={{ background: "#004488", color: '#fff' }}
    >
      <div>
        <h3 className="vertical-timeline-element-title">{props.day}</h3>
        <Row className="pt-2">
          <Col><ProjectsCol title={props.col1} projects={props.projects} /></Col>
          <Col><TeachCol teachers={props.teachers} title={props.col2} /></Col>
          <Col><GuestsCol title={props.col3} guests={props.guests} /></Col>
        </Row>
      </div>
    </VerticalTimelineElement>
  );
}

export default TimeLine;