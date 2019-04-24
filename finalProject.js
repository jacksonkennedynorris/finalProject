var geoP = d3.json('')
var presidentPromise = d3.csv('president.csv');



presidentPromise.then(function(data){
  presidentMap(data)
},
function(err){
  console.log(err)
});

var presidentMap = function(data){
  console.log(data)
  var logYear = function(d,i){
    console.log(d)
  }
}




var senatePromise = d3.csv('senate.csv')
senatePromise.then(function(data){
  //console.log(data)
},
function(err){
  console.log(err)
});
