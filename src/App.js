import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import Header from './components/Header';
import Frame from './components/Frame';

class App extends Component {
  state = {
    currentMenuItem: {
      name: 'events',
      url: 'https://vccnz.churchcenter.com/registrations/events',
    },
  };

  handleChange = e => {
    let url = '';

    switch (e) {
      case 'serving':
        url = 'https://vccnz.churchcenter.com/people/forms/7268';
        break;

      case 'contact':
        url = 'https://vccnz.churchcenter.com/people/forms/6155';
        break;

      default:
        url = 'https://vccnz.churchcenter.com/registrations/events';
        break;
    }

    this.setState({
      currentMenuItem: {
        name: e,
        url: url,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
          currentMenuItem={this.state.currentMenuItem}
          handleChange={this.handleChange}
        />
        <Frame currentMenuItem={this.state.currentMenuItem} />
      </div>
    );
  }
}

export default App;
