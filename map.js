function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


//     if($(window).width > 1280){
//         $("#reservation").addClass("col-md-8");
//         $("#filtre").addClass("col-md-4");
//     }
//     else{
//       $("#reservation").removeClass("col-md-8");
//       $("#filtre").addClass("col-md-4");
//     }
// }
