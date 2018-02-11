import * as L from 'leaflet'
import 'Leaflet/leaflet.css'

var mapboxAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2pkaTR2dnNhMTVkaDJxcDRvaHI1NThmaiJ9.1wgZ8MHW-Fa064snlrDC1w';

// instantiate a Leaflet map instance
var map = L.map('map', {
  minZoom: 1,
  maxZoom: 13
}).setView([0,0],2);

/*** EVENT FUNCTIONS FOR INSPECTING IN CONSOLE -- DEV ***/
  map.on('zoom', () => {
    console.log('Zoomed')
    console.log(map.getCenter())
    console.log(map.getZoom())
  })
  map.on('move', () => {
    console.log('Zoomed')
    console.log(map.getCenter())
    console.log(map.getZoom())
  })
/*** END OF EVENT FUNCTIONS  ***/

//  add a tilelayer for the basemap using Mapbox tile service
L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}`, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: mapboxAccessToken
}).addTo(map);
