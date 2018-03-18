import * as L from 'leaflet'
import 'Leaflet/leaflet.css'
//var mapboxAccessToken = 'pk.eyJ1IjoiYmZyaWVkbHkiLCJhIjoiY2pkaTR2dnNhMTVkaDJxcDRvaHI1NThmaiJ9.1wgZ8MHW-Fa064snlrDC1w';
//    var mapboxAccessToken = 'pk.eyJ1IjoiYW1hbGFnb24iLCJhIjoiY2pkNjU3MG1tNHJoeDJ3bz5NnpnajR4MyJ9.FAyPedrGf2UystWlwzs9ZQ';
// instantiate a Leaflet map instance
    var mapboxAccessToken = 'pk.eyJ1IjoiYW1hbGFnb24iLCJhIjoiY2pkNjU3MG1tNHJoeDJ3bzF5NnpnajR4MyJ9.FAyPedrGf2UystWlwzs9ZQ';
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

var xhr = new XMLHttpRequest();
xhr.open('GET', "http://hackthedeep.liweb.group/mappabledata?pageSize=100", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);
xhr.onreadystatechange = processRequest;
//var specimens;
function processRequest(e) {
    console.log('here');
    if (xhr.readyState == 4 && xhr.status == 200) {
        var specimens = JSON.parse(xhr.responseText);
	console.log(specimens);
	var jsonFeatures = [];

	specimens.forEach(function(point){
		//console.log(point);
		var lat = point.CleanLatitude;
		var lon = point.CleanLongitude;

		var feature = {type: 'Feature',
			       properties: point,
			       geometry: {
			type: 'Point',
			coordinates: [lon,lat]
		    }
		};

		jsonFeatures.push(feature);
	    });
		console.log(jsonFeatures);

	var geoJson = { type: 'FeatureCollection', features: jsonFeatures };
	console.log(geoJson);
	var geojsonMarkerOptions = {
	    radius: 8,
	    fillColor: "#ff7800",
	    color: "#000",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0.8
	};
	//	geoJson.features.forEach(function(feature) {
		//L.marker(feature.geometry.coordinates).addTo(map);
	//  console.log('added markers');

	    L.geoJSON(geoJson, {
		    pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		    }
		}).addTo(map)
		function onEachFeature(feature, layer) {
		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.TaxSpecies) {
		    layer.bindPopup(feature.properties.TaxSpecies);
		}
	    }
		L.geoJSON(geoJson, {
			onEachFeature: onEachFeature
			    }).addTo(map);
	    //  })

	    //	L.geoJson(geoJson).addTo(map);
	    }
	}


