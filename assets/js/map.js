function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 41.8719, lng: 12.5674 },
  });
  // Create an array of alphabetical characters used to label the markers.
  //   var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location.lat_lng,
      label: location.label,
    });
  });
  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
var locations = [
  { lat_lng: { lat: 41.902782, lng: 12.496366 }, label: "Rome" },
  { lat_lng: { lat: 41.12066 , lng:  16.86982 },   label: "Bari" },
  { lat_lng: { lat: 45.464664 , lng: 9.188540 }, label: "Milan" },
  { lat_lng: { lat: 44.49381 , lng: 11.33875 },   label:"Bologna" },
  { lat_lng: { lat: 40.85216 , lng: 14.26811 },   label: "Naples" },
  { lat_lng: { lat: 45.433334 , lng: 10.983333 },   label: "Verona" },
  { lat_lng: { lat: 45.4371908 , lng: 12.3345898},   label: "Venice" },
  { lat_lng: { lat: 44.40706253051758 , lng: 8.933988571166992 },   label: "Genoa" },
  { lat_lng: { lat: 43.471464 , lng: 11.145964 },   label: "Florence" },
  { lat_lng: { lat: 45.0677551 , lng: 7.6824892 },   label: "Turin" },
  { lat_lng: { lat: 37.50100085 , lng: 15.09298325 },   label: "Catania" },
  { lat_lng: { lat: 38.11025799 , lng: 13.35065648 },   label: "Palermo" },
  { lat_lng: { lat: 39.2169525 , lng: 9.1128513 },   label: "Cagliari" },

];
