
var data = [
  { users: 10, rps: 20 },
  { users: 20, rps: 42 },
  { users: 30, rps: 55 },
  { users: 40, rps: 78 },
  { users: 50, rps: 90 },
  { users: 60, rps: 110 },
  { users: 70, rps: 135 },
  { users: 80, rps: 145 },
  { users: 90, rps: 140 },
  { users: 100, rps: 120 },
  { users: 110, rps: 98 },
  { users: 120, rps: 60 }
];

var interpolates = [d3.curveBasis, d3.curveCardinal, d3.curveLinear, d3.curveNatural,
  d3.curveStep];
var interpolatesNames = ['d3.curveBasis', 'd3.curveCardinal', 'd3.curveLinear', 'd3.curveNatural',
  'd3.curveStep'];


var height = 200;
var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

for (let i = 0; i < interpolates.length; i++) {
  var shiftX = 800 * i;
  var groupName = "g" + i;
  var g = svg.append("g")
    .attr("class", groupName)
    .attr("transform", `scale(0.2 0.2) translate(${shiftX}, -100)`);

  var area = d3.area().x(d => d.users * 6).y0(d => height * 3).y1(d => (height - d.rps) * 3)
    .curve(interpolates[i]);

  g.append("path")
    .attr("d", area(data))
    //.attr("fill", "red")
    .attr("stroke", "blue")
    .attr("stroke-width", 1);

  g.selectAll("circle").data(data)
    .enter().append("circle")
    .attr("cx", d => d.users * 6)
    .attr("cy", d => (height - d.rps) * 3)
    .attr("r", 2)
    .attr("stroke", "blue")
    .attr("fill", "white");

  g.append('text')
    .attr('x', 0)
    .attr('y', 190)
    .text(interpolatesNames[i]);
}
