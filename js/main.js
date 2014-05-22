
function startCoords() {

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

}

var onSuccess = function(position) {

    console.log('success');
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   //update db
   $.ajax({

       type: "GET",
       data: "lat=" + lat + "&lon=" + lon,
       url:  "http://dmgdemos.com/srigps/updateCoords.php"
   }).done(function(data) {

     console.log('updated');
     startCoords();


   });
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}