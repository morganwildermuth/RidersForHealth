function createVillages(map){
  var map = map;
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(30.1, 26.2900),
    map: map,
    title:"Maseru"
  });
}

function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(29.4667, 27.9333),
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  createVillages(map);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';

  document.body.appendChild(script);
}

window.onload = loadScript;
