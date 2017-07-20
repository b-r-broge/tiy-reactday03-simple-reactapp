import React, { Component } from 'react';
import moment from 'moment';


class EarthquakeList extends Component {
  constructor () {
    super()
    this.state = {
      earthList: []
    }
  }

  componentDidMount() {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
    .then(resp => resp.json())
    .then((earthquakes) => {
      // console.log('found earthquakes:', earthquakes);
      let earthOut = earthquakes.features.map((quake) => {
        return (
          <div className="col-sm-6" key={quake.id}>
            <div className="card" >
              <div className="card-block">
                <h4 className="card-title">{quake.properties.place}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quake.properties.mag}</h6>
                <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quake.properties.time).format('llll')}</h6>
                <p className="card-text">Coordinates: {quake.geometry.coordinates}</p>
                <a href={quake.properties.url} className="card-link">USGS Event Link</a>
              </div>
            </div>
          </div>
        )
      })
      this.setState({earthList: earthOut})
    })
    .catch((err) => {
      console.log('There was an error importing usgs earthquake data:', err);
    })
  }

  render() {
    console.log('state of earthList:', this.state.earthList);
    return (
      <div className="quake-list">
        <div className="row">
          {this.state.earthList}
        </div>
      </div>
    )
  }
}

export default EarthquakeList
