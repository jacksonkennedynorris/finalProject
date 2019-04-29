var geoP = d3.json('usaJSON.json')
var presidentPromise = d3.csv('president.csv');
//presidentPromise.then(function(data){


Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]
emptyDict = {}
console.log(stateData)
console.log(geoData)
geoData.features.forEach(function(j){
  console.log('feature',j)
  console.log(j.properties.name, 'got here')
  stateData.forEach(function(k){
    console.log('how about',j.properties.name)
    if (geoData.properties.name == stateData.name){
        console.log('match!')
    }
  })
  //stateData.forEach(function(data){

  })
})

drawMap(geoData)


//})
/*  stateDict = {}
  emptyArray = []
var geoData = data[0]
var stateData = data[1]
console.log(stateData)
stateData.forEach(function(data){
  stateDict[data.year,data.state]=data
})
  console.log(stateDict)

})
*/
var drawMap = function(data){
 //var screen =

var projection = d3.geoAlbersUsa()

var svg = d3.select('svg')
var states = svg.append('g')
.attr('id','states')
.selectAll('g')
.data(data.features)
.enter()
.append('g')
.classed('state',true)

var stateGenerator = d3.geoPath()
      .projection(projection)
  states.append('path')
    .attr('d',stateGenerator)
}
/*var presidentMap = function(data){

  console.log(data)
  var returnState = function(d,i){if (d.year == "2016"){
     return console.log(d.year)
     console.log('fun')
  }}
  returnState(data)
  //console.log(data)
  //var logYear = function(d,i){
  //  console.log(d)
  }




/*
var senatePromise = d3.csv('senate.csv')
senatePromise.then(function(data){
  //console.log(data)
},
function(err){
  console.log(err)
});
*/
