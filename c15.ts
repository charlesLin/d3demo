
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
var height = 200;
var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

var area = d3.area().x(d => d.users * 6).y0(d => height * 3).y1(d => (height - d.rps) * 3)
  .curve(d3.curveCardinal);
svg.append("path")
  .attr("d", area(data))
  .attr("fill", "pink")
  .attr("stroke", "blue")
  .attr("stroke-width", 1);

svg.selectAll("circle").data(data)
  .enter().append("circle")
  .attr("cx", d =>d.users * 6)
  .attr("cy", d => (height - d.rps) * 3)
  .attr("r", 2)
  .attr("stroke", "blue")
  .attr("fill", "white");
