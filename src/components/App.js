import React, { Component } from 'react';
import '../styles/App.css';

import EarthquakeInfo from './EarthquakeInfo';
import EarthquakeList from './EarthquakeList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            EARTHQUAKES!
          </div>
        </div>
        <div className="App-header">
          <EarthquakeInfo />
        </div>
        <EarthquakeList />
      </div>
    );
  }
}

export default App;
