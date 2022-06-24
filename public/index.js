
var myLatLng = { lat: 12.3460, lng: -0.4907 };
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};

var map = new google.maps.Map(document.getElementById('Map'), mapOptions);


var Service = new google.maps.DirectionsService();

var Display = new google.maps.DirectionsRenderer();


Display.setMap(map);



function calc() {
    var select=document.getElementById("driving")
    var select1=document.getElementById("walking")
    var select2=document.getElementById("Bicycle")
    var select3=document.getElementById("Transit")
    

    var request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,

        travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    var request1 = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.WALKING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    var request2 = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.BICYCLING, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    var request3 = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.TRANSIT, //WALKING, BYCYCLING, TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL
    }
    if(select){
    Service.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

           
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Time Taken</i> : " + result.routes[0].legs[0].duration.text + ".</div>";

           
            Display.setDirections(result);
        } else {
            
            Display.setDirections({ routes: [] });
            map.setCenter(myLatLng);
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Not able to calculate distance</div>";
        }
    });
}

if(select2){
    Service.route(request2, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

           
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Time Taken</i> : " + result.routes[0].legs[0].duration.text + ".</div>";

           
            Display.setDirections(result);
        } else {
            
            Display.setDirections({ routes: [] });
            map.setCenter(myLatLng);
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Not able to calculate distance</div>";
        }
    });
}
if(select3){
    Service.route(request3, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

           
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Driving distance <i class='fas fa-road'></i> : " + result.routes[0].legs[0].distance.text + ".<br />Time Taken</i> : " + result.routes[0].legs[0].duration.text + ".</div>";

           
            Display.setDirections(result);
        } else {
            
            Display.setDirections({ routes: [] });
            map.setCenter(myLatLng);
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Not able to calculate distance</div>";
        }
    });
}
 
     if(select1){
    directionsService.route(request1, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br />To: " + document.getElementById("to").value + ".<br /> Walking distance </i> : " + result.routes[0].legs[0].distance.text + ".<br />Time Taken</i> : " + result.routes[0].legs[0].duration.text + ".</div>";
           Display.setDirections(result);
        } else {
           Display.setDirections({ routes: [] });
            map.setCenter(myLatLng);

            
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i>Not able to calculate distance</div>";
        }
    });
}

}



//create autocomplete objects for all inputs
var options = {
    types: ['(cities)']
}

var input1 = document.getElementById("from");
var a1 = new google.maps.places.Autocomplete(input1, options);

var input2 = document.getElementById("to");
var a2 = new google.maps.places.Autocomplete(input2, options);