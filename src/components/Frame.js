import React, { Component } from 'react';

export default class Frame extends Component {
  render() {
    return (
      <iframe
        id="kioskFrame"
        title="kioskFrame"
        src={this.props.currentMenuItem.url}
        className="Victory-iframe"
      />
    );
  }
}
