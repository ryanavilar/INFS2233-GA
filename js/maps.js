// This example creates circles on the map, representing
// populations in North America.

// First, create an object containing LatLng and population for each city.
var citymap = {};
citymap['office'] = {
  center: new google.maps.LatLng(-27.4580978, 153.005685)
};


var cityCircle;

function initialize() {
  // Create the map.
  var mapOptions = {
    zoom: 15,
    scrollwheel: false,
    center: new google.maps.LatLng(-27.4580978, 153.005685),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);



    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Lola Collective Office</h1>'+
      '<div id="bodyContent">'+
      '<p> Any Purchase within this red radius can be delivered directly to your home </p>'+
      '</div>'+
      '</div>';

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    var populationOptions = {
      strokeColor: '#FF0000',
      strokeOpacity: 0.5,
      strokeWeight: 1,
      fillColor: '#FF0000',
      fillOpacity: 0.1,
      map: map,
      center: citymap[city].center,
      radius: 1000
    };
    // Add the circle for this city to the map.
    cityCircle = new google.maps.Circle(populationOptions);
  }

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-27.4580978, 153.005685),
      map: map,
      title: 'Hello World!'
  });

     var infowindow = new google.maps.InfoWindow({
      content: contentString
  });



  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

}



google.maps.event.addDomListener(window, 'load', initialize);