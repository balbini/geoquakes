// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");

$.ajax({
  type: "GET",
  url: weekly_quakes_endpoint
})
.then(function(earthquake){
for (i = 0; i < earthquake.features.length; i++){
  let shake = earthquake.features[i].properties.title;
  console.log(shake);
}
})
.catch(function(err){
  console.log(err);
});

function update(){
  $(".rolling-shake").append(`<p>${shake[i]}</p>`);
}

});
