import 'ol/ol.css';
import './Mmap.css'
import React, { Component } from "react";
import OlMap from "ol/Map";
import OlLayerTile from "ol/layer/Tile";
import OlView from "ol/View";
import {fromLonLat} from "ol/proj"
import OlSourceOSM from "ol/source/OSM";


class MapComp extends Component {
    constructor(props) {
      super(props);
  
       this.olmap = new OlMap({
        target: null,
        layers: [
          new OlLayerTile({
            source: new OlSourceOSM()
          })
        ],
        view: new OlView({
          center: fromLonLat([-75, -9]),
          zoom: 6
        })
      });
    }
  
    componentDidMount() {
      this.olmap.setTarget("map");
    }
  
    render() {
      return (
        <div id="map" style={{ width: "100%", height: "100%" }}>
        </div>
      );
    }
  }
  
  export default MapComp;