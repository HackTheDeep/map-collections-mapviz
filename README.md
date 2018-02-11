[AMNH Hack the Deep - Map the Collections Challenge](https://github.com/amnh/HackTheDeep/wiki/Map-The-Collections#background)

**Hack the Deep 2/10/2018-2/11/2018**

Collaboration with the following teams/repos:   
-  [map-collections-geocoding](https://github.com/HackTheDeep/map-collections-geocoding)  
-  [MapTheCollections.Collection-Validator](https://github.com/HackTheDeep/MapTheCollections.Collection-Validator)
- [map-collections-data-shamwow](https://github.com/HackTheDeep/map-collections-data-shamwow)  

**Map Visualization Team**  
- [Beckylee Dell](https://github.com/becks25)
- [Emma Jablonski](https://github.com/emmjab)
- [Ana Malagon](https://github.com/atmalagon)  
- [Brandyn Friedly](https://github.com/bfreeds)  

####  Approaches  
- Initial approach was to create an interactive web map application to show the cleaned collections dataset.  Frontend assumed cleaned collections data would be fed from an api (backend team created a custom data api for this purpose).  

- Geocoding team took on the challenge of converting the disperse geographic information in the tables into usable geographic data (lng/lats).  Used the Google Maps API service for returning workable geographic coordinates.  
- A second approach taken, for tables that had lat/lng fields already, was to load into a PostGIS-enabled database and use PostGIS SQL spatial functions to store as a "geometry" data type, with encoded coordinate reference system.  

####  Technologies Applied  
-  Frontend Map Stack    
    - Mapping Libraries
      - **Python jupyter** notebook (with *cartopy* library) for prototyping, inspecting the geographic data.
      - **Leaflet.js**  
      - **Mapboxgl.js**  
      - **D3.js** for thematic mapping of collections data and information visualizations accompanying web map.
      - Basemap (tile server)
        - Used Mapbox vector tile service for simplicity, so that we would not have to spin up our own tile server.
- Geospatial processing  
   - **Google Maps Geocoding API** - used for...geocoding
   - **Turf.js** (can be used in Node.js or in dynamically in the browser)  
   - **PostGIS** (spatial extension for PostgreSQL) - used in development for converting lng/lat fields into geographic points  
   - **GDAL/OGR2OGR** - using the postgis driver to output geojson file.  [See here for makefile](https://github.com/HackTheDeep/map-collections-geocoding/blob/master/make-pipeline/Makefile).  

#### Challenges
- Defining "regions" on which to sort/filter the collections data on the map.  The data given has various scales of geographic detail.  Cartographically decisions need to be made about what constitutes a region.  Do we use ecoregions / natural areas, or do you use political boundaries (countries) because that is convenient given the data detail?  
- From the UI, when showing the map, how to represent the points that do not have geographic coordinates?

#### Successes  
- Geocoded ~45k collection records  
- Represented the geocoded collections visually using a variety of mapping libraries.  
####  Future Paths  
- Convert from a excel-based data storage/management to a collections database, with constraints to encourage/enforce ongoing data quality & consistency.
- Develop an interactive frontend application to explore collections.  This might mean using a view framework like React with a state-management tool so that the interactivity on the map & accompanying graphs can be linked.
- Develop specific thematic maps / cartography to tell various stories about the collections (themed by type of collection, taxonomic names, year of discover, etc.)  
- Integrate external datasets to provide context about the spatial distribution of collections records.  Examples:  
   - [WWF's Marine and Terrestrial Ecoregions](https://www.worldwildlife.org/pages/conservation-science-data-and-tools)  
   - [NOAA Sea Surface Temperatures](https://www.nodc.noaa.gov/General/temperature.html)  
- May want to run a GIS server to feed tiled datasets (for custom basemap, external datasets) to the collection mapper/viewer frontend application.


#### Running Locally  
With git configured and NodeJS with NPM (>=5.2) installed:
1. Check requirements
```shell
$ npm --version # should be 5.2 or greater
```
2. Clone the repository  
```shell
git clone $ https://github.com/HackTheDeep/map-collections-mapviz.git  
# cd into the repository
$ cd map-collections-mapviz
```  
3.  Install node dependencies & run local webpack server
```shell
$ npm install  
$ npm start
```
