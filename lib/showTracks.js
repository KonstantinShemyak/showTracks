function showTracks(startLat, startLon, zoom, tracks) {

  // Default appearance
  const defaultTrackColor = "red";
  const defaultTrackWidth = 2;

  // Define the map object
  // we'll need reference to layerSwitcher later. Ugly.
  var layerSwitcher = new OpenLayers.Control.LayerSwitcher();
  var map = new OpenLayers.Map("map", {
    controls: [
      new OpenLayers.Control.Navigation(),
      new OpenLayers.Control.PanZoomBar(),
      layerSwitcher,
      new OpenLayers.Control.Attribution()],
    units: 'm',
    projection: new OpenLayers.Projection("EPSG:900913"),
    displayProjection: new OpenLayers.Projection("EPSG:4326")
  });

  // Define the map layers
  map.addLayer(new OpenLayers.Layer.OSM.Mapnik("Mapnik"));
  map.addLayer(new OpenLayers.Layer.OSM.CycleMap("CycleMap"));
  map.addLayer(new OpenLayers.Layer.MML("MML Peruskartta",
      [
        "http://tile1.kartat.kapsi.fi/1.0.0/peruskartta/${z}/${x}/${y}.png",
        "http://tile2.kartat.kapsi.fi/1.0.0/peruskartta/${z}/${x}/${y}.png"
      ],
      {
        numZoomLevels: 21,
        sphericalMecator: true,
        transitionEffect: 'resize'
      }
    )
  );

  // We cannot setCenter() before adding at least one layer?
  var lonLat = new OpenLayers.LonLat(startLon, startLat).transform(
    new OpenLayers.Projection("EPSG:4326"), map.getProjectionObject());
  map.setCenter(lonLat, zoom);

  for (var i = 0; i < tracks.length; i++) {
    // Add the Layer with the GPX Track
    if ('color' in tracks[i]) {
      trackColor = tracks[i].color
    } else {
      trackColor = defaultTrackColor
    }
    if ('width' in tracks[i]) {
      trackWidth = tracks[i].width
    } else {
      trackWidth = defaultTrackWidth
    }
    var lgpx = new OpenLayers.Layer.Vector(tracks[i], {
	strategies: [new OpenLayers.Strategy.Fixed()],
	protocol: new OpenLayers.Protocol.HTTP({
          /* At least for Mozilla, the path must be descendant of the current path:
           * https://developer.mozilla.org/en-US/docs/Same-origin_policy_for_file:_URIs */
	  url: tracks[i].url,
	  format: new OpenLayers.Format.GPX()
        }),
        style: {strokeColor: trackColor, strokeWidth: trackWidth, strokeOpacity: 0.8},
        projection: new OpenLayers.Projection("EPSG:4326")
    });
    lgpx.name = tracks[i].name;
    map.addLayer(lgpx);
  }

  // Add "show/hide all layers" checkbox to the OpenLayers layer switcher
  var $toggleAllCheckbox = $("<input type='checkbox' checked='checked' />")
    .on("change", function() {
      var state = $(this).is(":checked");
      $(".dataLayersDiv > input:checkbox").prop("checked", state);
      /* I'd like to call simply layerSwitcher.updateMap();
       * but it resets back all checkboxes except the first changed... don't understand why. */
      layerSwitcher.dataLayers.forEach(function(elem) {elem.layer.setVisibility(state)});
  });
  $(".olControlLayerSwitcher .dataLbl").append($toggleAllCheckbox).append(" show/hide all");
};

