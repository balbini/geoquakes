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
  let time = earthquake.features[i].properties.time;
  let hour = new Date(time*1000);
  $(".rolling-shake").append(`<p>${shake}</p>`)
  console.log(time);
}
})
.catch(function(err){
  console.log(err);
});

});
