function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 41.8719, lng: 12.5674 },
  });
  // Create an array of alphabetical characters used to label the markers.
  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
var locations = [
  { lat: 41.902782, lng: 12.496366 },
  { lat: 41.125278, lng: 16.866667 },
  { lat: 39.227779, lng: 9.111111 },
  { lat: 45.583332, lng: 9.266667 },
  { lat: 41.243057, lng: 16.505278 },
  { lat: 45.467, lng: 9.2 },
  { lat: 40.833, lng: 14.25 },
  { lat: 43.767, lng: 11.25 },
  { lat: 45.116177, lng: 7.742615 },
  { lat: 38.1157, lng: 13.3615 },
  { lat: 44.8015, lng: 10.3279 },
  { lat: 44.1025, lng: 9.8241 },
  { lat: 42.4618, lng: 14.2161 },
  { lat: 45.4408, lng: 12.3155 },
  { lat: 45.4384, lng: 10.9916 },
  { lat: 44.4056, lng: 8.9463 },
  { lat: 37.5079, lng: 15.083 },
];
