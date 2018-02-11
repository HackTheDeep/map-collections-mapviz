// webpack import style
import './styles/main.scss'

// import javascript modules (local & npm)
import d3 from 'd3'  // information visualization
import turf from 'turf' //geospatial processing
import map from './js/map'

// have webpack bundle geojson for testing purposes
// should come from an api in production
/**  UNCOMMENT THIS WHEN VALID GEOJSON IN ./data/sample.geojson
import data from './data/sample.geojson'
**/
