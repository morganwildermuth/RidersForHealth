function setVillages(map) {
  $.get("villages/all")
  .done(function(data){
    createDatabaseVillages(data, map);
  }).fail(function(){
    console.log('fail')
  })
}

function createDatabaseVillages(villages, map){
  for (i in villages) {
    var id = villages[i].id;
    var name = villages[i].name;
    var latitude = villages[i].latitude;
    var longitude = villages[i].longitude;
    placeMarker(latitude, longitude, map, name, id);
  }
}

function villageHoverGetsInfo(map, marker, title, id){
  var latitude = marker.position.nb.toString();
  var longitude = marker.position.ob.toString();
  var id = id.toString();
  var name = title.replace(/\s/g, '')
  var contentString = "<p>" + title + "</p>" +
  "<p><a href=villages/new?name=" + name + "&latitude=" + latitude + "&longitude=" + longitude + "&id=" + id + ">Details</a></p>"
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infoWindow.open(map, marker);
  });

  google.maps.event.addListener(marker, 'mouseout', function() {
    var closeWindow = function(){
      infoWindow.close(map, marker)
    };
    window.setTimeout(closeWindow, 1500);
  });
}

function villageCreationOnClick(map){
  google.maps.event.addListener(map, 'click', function(event) {
    var location = event.latLng;
    var title = "Click Details to Save";
    var id = "new";
    placeMarker(location.nb, location.ob, map, title, id);
  });
}

function placeMarker(latitude, longitude, map, title, id) {
  var marker = new google.maps.Marker({
  position: new google.maps.LatLng(latitude, longitude),
  map: map
  });
  villageHoverGetsInfo(map, marker, title, id);
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
  villageCreationOnClick(map);
  setVillages(map);
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';

  document.body.appendChild(script);
}

window.onload = loadScript;
