let map;
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom:10,
    center: new google.maps.LatLng(-6.494315009728214, 106.83532212537406),
    mapTypeId: "roadmap",
    
  });
  
  // add event listeners for the buttons
  document
    .getElementById("show-markers")
    .addEventListener("click", showMarkers);
  document
    .getElementById("hide-markers")
    .addEventListener("click", hideMarkers);
  document
    .getElementById("delete-markers")
    .addEventListener("click", deleteMarkers);
  

  const locred = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
  const locyel = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
  const locgrn = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
  const iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
  const icons = {
    partial: {
      name: "Partial",
      icon: locyel
     
    },
    down: {
      name: "Down",
      icon: locred
      
    },
    up: {
      name: "Up",
      icon: locgrn
   
    },
  };
  markers = [
    {
        position: new google.maps.LatLng(-6.641546, 106.836284),
      type: "partial",
    },
    {
        position: new google.maps.LatLng(-6.58404, 106.81684),
        type: "down",
    },
    {
        position: new google.maps.LatLng(-6.417041663, 106.7339254),
      type: "down",
    },
    {
        position: new google.maps.LatLng(-6.552897858, 106.6970998),
      type: "up",
    },
    {
        position: new google.maps.LatLng(-6.620529631, 106.8433771),
      type: "up",
    },
    {
        position: new google.maps.LatLng(-6.641546, 106.8028877),
      type: "down",
    },
    {
        position: new google.maps.LatLng(-6.554099708, 106.827915),
      type: "up",
    },
    {
        position: new google.maps.LatLng(-6.4718, 106.84959),
      type: "up",
    },
    {
        position: new google.maps.LatLng(-6.46763, 106.81137),
      type: "partial",
    },
    {
        position: new google.maps.LatLng(-6.439435139, 106.8363857),
      type: "up",
    },
    
  ];
  

  markers.forEach((marker) => {
    new google.maps.Marker({
      position: marker.position,
      icon: icons[marker.type].icon,
      map: map,
    });
  });

  const legend = document.getElementById("legend");

  for (const key in icons) {
    const type = icons[key];
    const name = type.name;
    const icon = type.icon;
    const div = document.createElement("div");

    div.innerHTML = '<img src="' + icon + '"> ' + name;
    legend.appendChild(div);
  }

  map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}
// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function hideMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  hideMarkers();
  markers = [];
}

    
