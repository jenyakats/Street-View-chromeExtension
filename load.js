var maxTries = 3;

function initialize() {
  var picked = all[Math.floor(Math.random()*all.length)];
  var streetViewService = new google.maps.StreetViewService();

  streetViewService.getPanorama(
    {
      location: new google.maps.LatLng(picked[0], picked[1]),
    // It will return the nearest panorama when the
    // given radius is 2000 meters or less.
    // This way, it should always return something 🏄
      radius: 2000
    }, function(data, status) {
      if (status === 'OK') {
        var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          position: data.location.latLng,
          pov: {heading: 165, pitch: 0},
          zoom: 1
        });
      } else {
          // Try up to three times with random coordinates
          // If not, redirecting the browser to what it needs: tacos
          if (maxTries-- > 0) {
            initialize();
          } else {
            getTacos();
          }
      }
  });
}

function getTacos() {
  var losHermanosId = 'B7aVSGDC5YzTrbhy9MzXyA';
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      pano: losHermanosId,
      zoom: 1
    });
}
