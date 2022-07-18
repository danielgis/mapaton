import 'ol/ol.css';
import './Mmap.css'
import React, { Component } from "react";
import OlMap from "ol/Map";
import OlLayerTile from "ol/layer/Tile";
import OlView from "ol/View";
import {fromLonLat, transformExtent} from "ol/proj"
import OlSourceOSM from "ol/source/OSM";
// import ImageWMS from 'ol/source/ImageWMS';
// import ImageLayer from 'ol/layer/Image';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
// import GeoJSON from 'ol/format/GeoJSON'
import GeoJSON from 'ol/format/GeoJSON';
import {Style, Fill} from 'ol/style'
import {ZoomToExtent, defaults as defaultControls} from 'ol/control';



const extent = [-77.8, -9.435, -77.45, -9.17]
// const maxs = fromLonLat([-80, -1])
class MapComp extends Component {
    constructor(props) {
      super(props);

      this.style = new Style({
        fill: new Fill({
          color: '#eeeeee',
        }),
      });
  
      this.olmap = new OlMap({
        target: null,
        layers: [
          new OlLayerTile({
            source: new OlSourceOSM()
          }),
          new VectorLayer({
            // background: '#1a2b39',
            source: new VectorSource({
              url: 'https://geocatmin.ingemmet.gob.pe/arcgis/rest/services/SERV_CARTOGRAFIA_DEMARCACION_WGS84/MapServer/2/query?where=LOWER%28NM_DIST%29%3DLOWER%28%27CARHUAZ%27%29&text=&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson',
              format: new GeoJSON(),
            }),
          })
        ],
        view: new OlView({
          center: fromLonLat([-75, -9]),
          zoom: 11,
          extent: transformExtent(extent,'EPSG:4326','EPSG:3857'),
        }),
        controls: defaultControls().extend([
          new ZoomToExtent({
            extent: transformExtent(extent,'EPSG:4326','EPSG:3857'),
          }),
        ]),
      });
    }
  
    componentDidMount() {
      this.olmap.setTarget("map");
      // this.olmap.zoomToExtent(this.olmap.getLayers().array_[1].getExtent())
    }
  
    render() {
      return (
        <div id="map" style={{ width: "100%", height: "100%" }}>
        </div>
      );
    }
  }
  
  export default MapComp;