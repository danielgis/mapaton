import 'ol/ol.css';
import './Mmap.css'
import React, { useEffect } from 'react';
import OlMap from "ol/Map";
import OlLayerTile from "ol/layer/Tile";
import OlView from "ol/View";
import {fromLonLat, transformExtent} from "ol/proj"
import OlSourceOSM from "ol/source/OSM";
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';
import {ZoomToExtent, OverviewMap, defaults as defaultControls} from 'ol/control';
import TileLayer from 'ol/layer/Tile';
import Draw from 'ol/interaction/Draw';


function MapComp() {
  // const [count, setCount] = useState(0);
  const extent = [
    -77.85741023699999,
    -9.483638727000005,
    -77.41570111199999,
    -9.098945603000027
  ]

  const extentAsGCS = transformExtent(extent,'EPSG:4326','EPSG:3857');

  const source = new VectorSource({wrapX: false});

  const vector = new VectorLayer({
    source: source,
  });

  let olmap = new OlMap({
    target: null,
    layers: [
      new OlLayerTile({
        source: new OlSourceOSM()
      }),
      new VectorLayer({
        source: new VectorSource({
          url: process.env.REACT_APP_DIST_WMS,
          format: new GeoJSON(),
        }),
      }),
      vector
    ],
    view: new OlView({
      center: fromLonLat([-75, -9]),
      zoom: 1,
      extent: extentAsGCS,
    }),
    controls: defaultControls().extend([
      new ZoomToExtent({
        extent: extentAsGCS,
      }),
      new OverviewMap({
        layers: [
          new TileLayer({
            source: new OlSourceOSM(),
          }),
        ],
      })
    ]),
  });

  let draw;
  const addInteraction = (e) => {
    if (!vector.getSource()){
      vector.setSource(source);
    } 
    const value = e.target.id;
    olmap.removeInteraction(draw)
    if (value !== 'None') {
      draw = new Draw({
        source: source,
        type: e.target.id,
        freehand: true,
      });
      olmap.addInteraction(draw);
    }
  }

  const deactivateDraw = (e) => {
    try{
      olmap.removeInteraction(draw)
      vector.getSource().clear(true);
      // olmap.removeLayer(vector);
    } catch {

    }
    
  }

  useEffect(() => {
    olmap.setTarget("map");
  });



  return (
    <div className="mainContainer">
      <div className="containerControls">
        <div className="containerTool">
        <h1 className="title">INGEOANDES</h1>
        <label className="label is-small">Dibuja el área de interés</label>
        <div className="buttons is-centered">
        <button id="Circle" className="button is-info is-small" onClick={addInteraction}>
        <span className="icon is-small"><i className="far fa-circle"></i></span>
        </button>
        <button id="Polygon" className="button is-info is-small" onClick={addInteraction}>
          <span className="icon is-small"><i className="fas fa-draw-polygon"></i></span>
        </button> 
        <button className="button is-danger is-small" onClick={deactivateDraw}>
          <span className="icon is-small"><i class="fa-solid fa-trash-can"></i></span>
        </button> 

        </div>
        <label className="label is-small">Lorem, ipsum dolor sit amet consectetur</label>
        <input type="text" className="input is-small" />
        <div className="buttons is-right">
        <button className="button is-primary is-small">Lorem ipsum</button>
        </div>
        <progress className="progress is-small is-primary" max="100">15%</progress>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, quaerat omnis atque ducimus eaque facilis illo voluptate officia nemo maxime nam perferendis repellat laborum, amet quos dolorum! Possimus, commodi doloremque.</p>
        <br />
        <img src='https://picsum.photos/seed/picsum/640/300' alt="123"/>
        </div>
      </div>
      <div className="containerMap">
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    </div>

  );
}

export default MapComp;