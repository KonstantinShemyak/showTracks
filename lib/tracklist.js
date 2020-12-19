$(document).ready(function() {
  fetch("tracklist.json")
    .then(response => response.json())
    .then(function(data){ document.title = data['title']; return data; })
    .then(data => showTracks(data['startLat'], data['startLon'], data['zoom'], data['tracks']));
});

