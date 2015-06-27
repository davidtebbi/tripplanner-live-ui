function initialize_gmaps(lat, lng) {

    lat = lat || 40.705786;
    lng = lng || -74.007672;

    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(lat, lng);

    console.log(myLatlng);

    // set the map options hash
    var mapOptions = {
        center: myLatlng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });

}

$(document).ready(function() {

    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(function (position) {
            initialize_gmaps(position.coords.latitude, position.coords.longitude);
        });
    } else {
        initialize_gmaps();
    }

});