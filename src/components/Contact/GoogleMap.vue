<template>
<div class="row">
  <div class="col-sm-1">
  </div>
  <div id="map" class="col-sm-10">

  </div>
</div>
</template>

<script>
import myGoogleMaps from '@google/maps'
import {
  centersArr
} from './Data/Locations.js'
export default {
  mounted() {

    var googleMapsClient = myGoogleMaps.createClient({
      key: 'AIzaSyAQB-EtslpfEQHPA7Is9_dBqNJUKilUiTc'
    });

    var map;
    const mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, {
      center: {
        lat: 29.8648599,
        lng: 77.8965787
      },
      zoom: 13
    });

    centersArr.forEach((e) => {
      googleMapsClient.geocode({
        address: e.locationName
      }, (err, res) => {
        if (!err) {
          var mycoords = res.json.results[0].geometry.location;
          var marker = new google.maps.Marker({
            position: mycoords,
            map: map,
            label: ``,
            icon: `static/maps-icon.png`
          });
          var infoWindow = new google.maps.InfoWindow({
            content: `<div class="infoWindow-text" style="font-family: avenir;width:350px !important;height:170px !important">
            <h5 style="text-align:center;padding-top: 2%">${e.centerName} <i class="fa fa-plus-square" style="font-size:24px;color:red"> </i></h5>
            <hr>
              <p style="letter-spacing: 1px"><span style="font-weight: bold">Address:</span> ${e.address}</p>
              <p style="letter-spacing: 1px"><span style="font-weight: bold">Phone:</span> +91 8171100382</p>
              <p style="letter-spacing: 1px"><span style="font-weight: bold">Email:</span> friendshwr@gmail.com</p>
            </div>`
          });
          marker.addListener("click", function() {
            infoWindow.open(map, marker);
          });
        }
      });
    });

  }
}
</script>

<style scoped>
#map {
  margin-top: 3%;
  margin-bottom: 1%;
  width: 100%;
  height: 400px !important;
  box-shadow: 10px 10px 10px 0.06px #939393;
}

.infoWindow-text {
  font-family: avenir;
  width: 300px !important;
  height: 170px !important;
}

.infoWindow-text h5 {
  text-align: center;
  padding-top: 2%;
}

.infoWindow-text p {
  letter-spacing: 1px;
}

.infoWindow-text span {
  font-weight: bold !important;
  text-transform: capitalize;
}
</style>
