import React, { Component } from 'react';
import {
  ButtonGroup,
  DropdownButton,
  MenuItem,
  Row,
  Col,
} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <header className="Victory-header">
        <Row>
          <Col xs={10} md={10}>
            <img src={this.props.logo} className="Victory-logo" alt="logo" />
          </Col>
          <Col xs={2} md={2}>
            <ButtonGroup>
              <DropdownButton
                title={this.props.currentMenuItem.name}
                id="bg-nested-dropdown"
                onSelect={this.props.handleChange}
              >
                <MenuItem eventKey="events">Events</MenuItem>
                <MenuItem eventKey="serving">Serving</MenuItem>
                <MenuItem eventKey="contact">Contact</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </Col>
        </Row>
      </header>
    );
  }
}
