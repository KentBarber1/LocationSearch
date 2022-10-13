var map;
var service;
var infowindow;

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(33.775373, -84.396847),
    zoom: 12,
  };
  map = new google.maps.Map(document.getElementById('map'), mapProp);
}


function setup() {
  var inputAddress1 = Number(document.getElementById('latBox').value);
  var inputAddress2 = Number(document.getElementById('lonBox').value);
  var center = new google.maps.LatLng(inputAddress1, inputAddress2);
  var radius = document.getElementById('radBox').value;
  //test if the inputs get read
  //alert("your radius input: " + radius + ", and your coordinate input: " + center);
  var mapProp = {
    center: center,
    zoom: 12,
  };
  map = new google.maps.Map(document.getElementById('map'), mapProp);
  var marker = new google.maps.Marker({
    map: map,
    position: center
  });
  var request = {
    location: center,
    radius: radius,
    type: ['restaurant']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);

  const contentString = "xxxx";
  infowindow = new google.maps.InfoWindow({
  content: contentString,
  });
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  console.log(map);
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  google.maps.event.addListener(marker, "click", () => {
    //map.setZoom(13);
    //map.setCenter(marker.getPosition());
    infowindow.setContent((place.name + ", " + String(place.rating) + ", " + String(place.price_level)) || "");
    infowindow.open(map);
  });
}
