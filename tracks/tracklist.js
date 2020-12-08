$(document).ready(function() {
  fetch("tracklist.json")
    .then(response => response.json())
    .then(data => showTracks(data['startLat'], data['startLon'], data['zoom'], data['tracks']));
});

