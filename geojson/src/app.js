import * as React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import ReactMapGL, {Source, Layer} from 'react-map-gl'; 
import patientData from '../data.json'

const MAPBOX_TOKEN = env.process.REACT_APP_MAPBOX_TOKEN;
  
export default class App extends Component {
  state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
    viewport: {
      latitude: 40.748963,
      longitude: -73.985675,
      zoom: 12,
      bearing: 0,
      pitch: 0
    }
  };
  componentDidMount() {
    //this.setState({data: patientData})
    //console.log(patientData)
    this._loadData(patientData)
  }
  _loadData = pdata => {
    this.setState({
      data: pdata //updatePercentiles(data, f => f.properties.income[this.state.year])
    });
    // const { data } = this.state; 
    // console.log("++++ _loadData() +++\n", data)
  };
  _onViewportChange = viewport => this.setState({viewport});

  _onHover = event => {
    console.log("+++ _onHover() event++++\n", event)
   
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;

    console.log("+++ _onHover()++++\n", features)
    const hoveredFeature = features; // && features.find(f => f.layer.id === 'data');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;
    
    onsole.log("++++ _renderTooltip() hoveredFeatuer +++\n", hoveredFeature)

    return (
      hoveredFeature && (
        <div className="tooltip" style={{left: x, top: y}}>
          <div>Name: {hoveredFeature.properties.name}</div>
          <div>Age: {hoveredFeature.properties.age}</div> 
        </div>
      )
    );
  }

  render() {
    const {viewport, data} = this.state;

    //console.log("++++ render() +++\n", data); // good

    return ( 
     
      <div style={{height: '80%', position: 'relative'}}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/light-v9" 
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover} 
        > 
          <Source id="my-data" type="geojson" data={data}>
            <Layer
              id="point"
              type="circle"
              paint={{
                'circle-radius': 6,
                'circle-color': '#007cbf'
              }} />
          </Source>
          {this._renderTooltip()}
        </ReactMapGL> 
        
      </div>
       
    );
  }
}


export function renderToDom(container) {
  render(<App />, container);
}
