
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
var x = 100;
var height = 600;
var width = 800;
var xScale = d3.scaleLinear().domain([0, 120]).range([0, width]);
var yScale = d3.scaleLinear().domain([0, 150]).range([height, 0]);

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");
var g = svg.append("g");

var area = d3.area()
  .x(d => xScale(d.users))
  .y0(d => height)
  .y1(d => yScale(d.rps))
  .curve(d3.curveCardinal);

g.append("path")
  .attr("d", area(data))
  .attr("fill", "pink")
  .attr("stroke", "blue")
  .attr("stroke-width", 1);

g.selectAll("circle").data(data)
  .enter().append("circle")
  .attr("cx", d => xScale(d.users))
  .attr("cy", d => yScale(d.rps))
  .attr("r", 2)
  .attr("stroke", "blue")
  .attr("fill", "white");
