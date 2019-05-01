var geoP = d3.json('usaJSON.json')
var presidentPromise = d3.csv('president.csv');

var defFunc = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})})

drawMap(geoData)
})}



defFunc(1976)


//IMPORTANT STUFF BELOW
var drawMap = function(data){
 var screen = {
   width : 1000,
   height : 900
 }

var margins = {
  top:10,
  bottom:200,
  left:10,
  right:100
};
var height = screen.width - margins.top - margins.bottom;
var width = screen.width - margins.left - margins.right;


var projection = d3.geoAlbersUsa()

var svg = d3.select('svg')
            .attr('height',height)
            .attr('width', width)
console.log(data)
var states = svg.append('g')
.attr('id','states')
.selectAll('g')
.data(data.features)
.enter()
.append('g')
.classed('state',true)
.attr('fill',function(d){
  demVotes = parseInt(d.properties.democrat.candidatevotes)
  console.log(demVotes)
  repVotes = parseInt(d.properties.republican.candidatevotes)

  if (demVotes > repVotes){
  console.log(d.properties.name, 'is democratic')
  return "#065DB6"}
  else{
  console.log(d.properties.name, 'is republican')
    return "#D74934"
  }})
var years = [1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016]

d3.select('body').selectALL('button')
.enter()
.data(years)
.append('button')
.attr('id',function(d){return d})

var stateGenerator = d3.geoPath()
      .projection(projection)
  states.append('path')
    .attr('d',stateGenerator)
}
