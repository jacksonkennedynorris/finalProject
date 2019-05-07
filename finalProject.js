var geoP = d3.json('usaJSON.json')
var presidentPromise = d3.csv('president.csv');

var promise2016 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })

drawMap(geoData)
})}
var promise1976 = function(year){

Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise1980 = function(year){

Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise1984 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise1988 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise1992 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise1996 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise2000 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise2004 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)

})}
var promise2008 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
var promise2012 = function(year){
Promise.all([geoP,presidentPromise]).then(function(data){
var geoData = data[0]
var stateData = data[1]

geoData.features.forEach(function(feature){
  stateData.forEach(function(k){
    if (k.year == year.toString()){
      if (k.state == feature.properties.name){
        if (k.party != "" && k.candidate != ""){
        feature.properties[k.party] = k}
      }}})
    })
drawMap(geoData)
})}
promise2016(2016)

var drawMap = function(data,year){
 var screen = {
   width : 1200,
   height : 575
 }

var margins = {
  top:10,
  bottom:10,
  left:10,
  right:100
};
var height = screen.height - margins.top - margins.bottom;
var width = screen.width - margins.left - margins.right;

var myDict = {democrat1976: "297", republican1976: '240', democrat1980: '49', republican1980: '489', democrat1984: '13',
republican1984: '525', democrat1988: '111', republican1988: '426', democrat1992: '370', republican1992: '168', democrat1996: '379',
republican1996: '159', democrat2000: '266', republican2000: '271', democrat2004: '251', republican2004: '286', democrat2008: '365',
republican2008: '173', democrat2012: '332', republican2012: '206', democrat2016: '227', republican2016: '304'}

var projection = d3.geoAlbersUsa()

var svg = d3.select('.straightUp')
            .attr('height',height)
            .attr('width', width)

var states = svg.append('g')
.attr('id','states')
.selectAll('g')
.data(data.features)
.enter()
.append('g')
.attr('fill',function(d){
  demVotes = parseInt(d.properties.democrat.candidatevotes)
  repVotes = parseInt(d.properties.republican.candidatevotes)

  if (demVotes > repVotes){
  return "#065DB6"}
  else{
    return "#D74934"
  }})
.attr('stroke',"#D1D0E3")
.on('mouseover',function(d,i){
  d3.select(this)
  .attr('fill',function(d){
    demVotes = parseInt(d.properties.democrat.candidatevotes)
    repVotes = parseInt(d.properties.republican.candidatevotes)

    if (demVotes > repVotes){
    return "#112D56"}
    else{
      return "#840E0C"
    }})
    svg.append('text')
          .attr('id','tooltip'+i)
          .attr('x', 400)//x)
          .attr('y', 550)
          .text(function(){
            demInt = parseInt(d.properties.democrat.candidatevotes)
            repInt = parseInt(d.properties.republican.candidatevotes)
            if (demInt>repInt){
            myString =  d.properties.democrat.candidate + ': ' + d.properties.democrat.candidatevotes + " " +  d.properties.republican.candidate+ ": " +d.properties.republican.candidatevotes +" "}
            else{
              myString = d.properties.republican.candidate+ ": " +d.properties.republican.candidatevotes + ' ' + d.properties.democrat.candidate + ': ' + d.properties.democrat.candidatevotes +" "
            }
        return myString})
          .attr('fill','#1A1E3A')
          .attr('font-size','24px')
          .attr('font-weight','bold')
          .attr('text-anchor','middle')

    svg.append('text')
      .attr('id','tooltip2' + i)
      .attr('x', stateGenerator.centroid(d)[0])
      .attr('y', stateGenerator.centroid(d)[1])
      .text(d.properties.name)
  })

.on('mouseout',function(d,i){
    d3.select('#tooltip' + i).remove()
    d3.select('#tooltip2' + i).remove()
    d3.select(this)
    .attr('fill',function(d){
      demVotes = parseInt(d.properties.democrat.candidatevotes)
      repVotes = parseInt(d.properties.republican.candidatevotes)

      if (demVotes > repVotes){
      return "#065DB6"}
      else{
        return "#D74934"
      }})
    })



d3.select('.democrat').data(data.features)
.text(function(data){
  if (data.properties.democrat.year=="1976"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1976'])
  }
  else if (data.properties.democrat.year=="1980") {
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1980'])
  }
  else if (data.properties.democrat.year=="1984"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1984'])
  }
  else if (data.properties.democrat.year=="1988"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1988'])
  }
  else if (data.properties.democrat.year=="1992"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1992'])
  }
  else if (data.properties.democrat.year=="1996"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat1996'])
  }
  else if (data.properties.democrat.year=="2000"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat2000'])
  }
  else if (data.properties.democrat.year=="2004"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat2004'])
  }
  else if (data.properties.democrat.year=="2008"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat2008'])
  }
  else if (data.properties.democrat.year=="2012"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat2012'])
  }
  else if (data.properties.democrat.year=="2016"){
    return ("Democrat: " + data.properties.democrat.candidate + ' ' +myDict['democrat2016'])
  }
})

d3.select('.republican').data(data.features)
.text(function(data){
  if (data.properties.democrat.year=="1976"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1976'])
  }
  else if (data.properties.democrat.year=="1980") {
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1980'])
  }
  else if (data.properties.democrat.year=="1984"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1984'])
  }
  else if (data.properties.democrat.year=="1988"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1988'])
  }
  else if (data.properties.democrat.year=="1992"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1992'])
  }
  else if (data.properties.democrat.year=="1996"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican1996'])
  }
  else if (data.properties.democrat.year=="2000"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican2000'])
  }
  else if (data.properties.democrat.year=="2004"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican2004'])
  }
  else if (data.properties.democrat.year=="2008"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican2008'])
  }
  else if (data.properties.democrat.year=="2012"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican2012'])
  }
  else if (data.properties.democrat.year=="2016"){
    return ("Republican: " + data.properties.republican.candidate + ' ' +myDict['republican2016'])
  }})
d3.select('.year').data(data.features)
.text(function(data){return 'Year: ' + data.properties.democrat.year})

var stateGenerator = d3.geoPath()
      .projection(projection)
  states.append('path')
    .attr('d',stateGenerator)
  drawSecondMap(data)

}

var useButton = function(geoData){
  var button76 = d3.select('.year76')
  .on('click', function(){promise1976(1976)})
  var button80 = d3.select('.year80')
  .on('click', function(){promise1980(1980)})
  var button84 = d3.select('.year84')
  .on('click',function(){promise1984(1984)})
  var button88 = d3.select('.year88')
  .on('click',function(){promise1988(1988)})
  var button92 = d3.select('.year92')
  .on('click',function(){promise1992(1992)})
  var button96 = d3.select('.year96')
  .on('click',function(){promise1996(1996)})
  var button00 = d3.select('.year00')
  .on('click',function(){promise2000(2000)})
  var button04 = d3.select('.year04')
  .on('click',function(){promise2004(2004)})
  var button08 = d3.select('.year08')
  .on('click',function(){promise2008(2008)})
  var button12 = d3.select('.year12')
  .on('click',function(){promise2012(2012)})
  var button16 = d3.select('.year16')
  .on('click',function(){promise2016(2016)})
}

var drawSecondMap = function(data,year){
  var screen = {
    width: 1200,
    height: 600
  }
  var margins = {
    top:10,
    bottom:10,
    left:10,
    right:100
  };
var height = screen.height - margins.top - margins.bottom;
var width = screen.width - margins.left - margins.right;

var myDict = {democrat1976: "297", republican1976: '240', democrat1980: '49', republican1980: '489', democrat1984: '13',
republican1984: '525', democrat1988: '111', republican1988: '426', democrat1992: '370', republican1992: '168', democrat1996: '379',
republican1996: '159', democrat2000: '266', republican2000: '271', democrat2004: '251', republican2004: '286', democrat2008: '365',
republican2008: '173', democrat2012: '332', republican2012: '206', democrat2016: '227', republican2016: '304'}

var projection = d3.geoAlbersUsa()

var svg = d3.select('.scaling')
            .attr('height',height)
            .attr('width', width)



var states = svg.append('g')
.attr('id','states')
.selectAll('g')
.data(data.features)
.enter()
.append('g')
.classed('state',true)
.attr('fill',function(d){
  demVotes = parseInt(d.properties.democrat.candidatevotes)
  repVotes = parseInt(d.properties.republican.candidatevotes)
  totalVotes = parseInt(d.properties.democrat.totalvotes)
  if (demVotes > repVotes){
    var demPercent = demVotes/totalVotes
    var repPercent = repVotes/totalVotes
    var percentDiff = (demPercent - repPercent)
  return d3.interpolateBlues((2*percentDiff))}
  else{
    var repPercent = repVotes/totalVotes
    var demPercent = demVotes/totalVotes
    var percentDiff = (repPercent - demPercent)
    return d3.interpolateReds((2*percentDiff))
  }})
.attr('stroke',"black")
.on('mouseover',function(d,i){
  d3.select(this)
  .attr('fill',function(d){
    demVotes = parseInt(d.properties.democrat.candidatevotes)
    repVotes = parseInt(d.properties.republican.candidatevotes)
    totVotes = parseInt(d.properties.democrat.totalvotes)
    if (demVotes > repVotes){
    return "#112D56"}
    else{
      return "#840E0C"
    }})
    svg.append('text')
          .attr('id','tooltip'+i)
          .attr('x', 400)
          .attr('y', 550)
          .text(function(){
            demoVotes = parseInt(d.properties.democrat.candidatevotes)
            repubVotes = parseInt(d.properties.republican.candidatevotes)
            totalVotes = parseInt(d.properties.democrat.totalvotes)
            var demPercent = 100*(demoVotes/totalVotes)
            var repPercent = 100*(repubVotes/totalVotes)
            if (demVotes>repVotes){
            myString =  d.properties.democrat.candidate + ': ' + demPercent.toFixed(1) + "% " +  d.properties.republican.candidate+ ": " +repPercent.toFixed(1) + '%'}
            else{
              myString = d.properties.republican.candidate+ ": " + repPercent.toFixed(1) + '% ' + d.properties.democrat.candidate + ': ' + demPercent.toFixed(1) +"%"
            }
          return myString})
          .attr('fill','#1A1E3A')
          .attr('font-size','24px')
          .attr('font-weight','bold')
          .attr('text-anchor','middle')

})
.on('mouseout',function(d,i){
  d3.select('#tooltip' + i).remove()
  d3.select('#tooltip2' + i).remove()
  d3.select(this)
  .attr('fill',function(d){
    demVotes = parseInt(d.properties.democrat.candidatevotes)
    repVotes = parseInt(d.properties.republican.candidatevotes)
    totalVotes = parseInt(d.properties.democrat.totalvotes)
    if (demVotes > repVotes){
      var demPercent = demVotes/totalVotes
      var repPercent = repVotes/totalVotes
      var percentDiff = (demPercent - repPercent)

    return d3.interpolateBlues((2*percentDiff))}
    else{
      var repPercent = repVotes/totalVotes
      var demPercent = demVotes/totalVotes
      var percentDiff = (repPercent - demPercent)
      return d3.interpolateReds((2*percentDiff))
    }})
})
var stateGenerator = d3.geoPath()
      .projection(projection)
  states.append('path')
    .attr('d',stateGenerator)
useButton(data)



var blueList = [.8,.6,.4,.2,0]
var redList = [0,.2,.4,.6,.8]
var blueLeg = svg.selectAll('myLegend')
.data(blueList)
.enter()
.append('rect')
.attr('height',15)
.attr('width',15)
.attr('x',870)
.attr('y',function(d,i){return 115+30*i})
.attr('fill',function(d,i){return d3.interpolateBlues(d)})
.attr('stroke','black')


var redLeg = svg.selectAll('myLegend')
.data(redList)
.enter()
.append('rect')
.attr('height',15)
.attr('width',15)
.attr('x', 870)
.attr('y',function(d,i){return 265+30*i})
.attr('fill',function(d,i){return d3.interpolateReds(d)})
.attr('stroke','black')

var myList = ['D+40%','D+30%','D+20%','D+10%','D+0.01%','R+.01%','R+10%','R+20%','R+30%','R+40%']
var textLeg = svg.selectAll('myLegend')
.data(myList)
.enter()
.append('text')
.text(function(d){return d})
.attr('x',895)
.attr('y',function(d,i){return 127.5+30*i})
}
