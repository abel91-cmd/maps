function iniciarMap(){
    // var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var coord = {lat:40.6611303 ,lng: -8.5419592};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}