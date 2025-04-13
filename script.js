let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: YOUR_LAT, lng: YOUR_LNG }, // Center on your ward
    zoom: 15,
  });

  // Load GeoJSON
  map.data.loadGeoJson('ward.geojson');

  // Style the boundary
  map.data.setStyle({
    fillColor: 'blue',
    strokeColor: 'black',
    strokeWeight: 2,
    fillOpacity: 0.3,
  });
}
