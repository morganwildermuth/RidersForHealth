// function villageHoverGetsInfo(map){
//   var infowindow = new google.maps.InfoWindow({
//     content: "Test"
//   });

//   google.maps.event.addListener(marker, 'mouseover', function() {
//     infowindow.open(map, marker);
//   });
// }

function villageCreationOnClick(map){
  google.maps.event.addListener(map, 'click', function(event) {
    var location = event.latLng;
    var title = "Click Me to Name Me";
    placeMarker(location.pb, location.qb, map, title);
  });
}

function createStarterVillage(map){
  var map = map;
  placeMarker(-29.31, 27.48, map, "Maseru");
  villageCreationOnClick(map);
  villageHoverGetsInfo(map);
}

function placeMarker(latitude, longitude, map, title) {
  var marker = new google.maps.Marker({
  position: new google.maps.LatLng(latitude, longitude),
  map: map
  });
}

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-29.609988, 28.233608),
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  createStarterVillage(map);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';

  document.body.appendChild(script);
}

window.onload = loadScript;
