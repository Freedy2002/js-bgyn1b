// Import stylesheets
import './style.css';
import { Map, TileLayer } from 'leaflet';

// Write Javascript code!
const map = new Map('map');
const gdlayer = new TileLayer(
  'http://wprd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7',
  {
    subdomains: '1234',
  }
);
gdlayer.addTo(map);
map.setView([23.036984, 114.418868], 20);
