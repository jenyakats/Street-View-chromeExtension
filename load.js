
  var panorama;
  function initialize() {
    picked = all[Math.floor(Math.random()*all.length)]
    // debugger
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          // position: {lat: one.lat, lng: one.lng},
          position: {lat: picked[0], lng: picked[1]},
          // position: {lat: 21.46225, lng: -158.00366},
          pov: {heading: 165, pitch: 0},
          // status: "OK"
          zoom: 1
        });
  }
