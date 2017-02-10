
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
var outerHeight = 400, outerWidth = 600,
  margin = { left: 50, top: 50, right: 50, bottom: 50 },
  innerHeight = outerHeight - margin.top - margin.bottom,
  innerWidth = outerWidth - margin.left - margin.right;
var xScale = d3.scaleLinear().domain([0, 120]).range([0, innerWidth]);
var yScale = d3.scaleLinear().domain([0, 150]).range([innerHeight, 0]);

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%")
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

var area = d3.area()
  .x(d => xScale(d.users))
  .y0(d => innerHeight)
  .y1(d => yScale(d.rps))
  .curve(d3.curveCardinal);

svg.append("path")
  .attr("d", area(data))
  .attr("fill", "pink")
  .attr("stroke", "blue")
  .attr("stroke-width", 1);

svg.selectAll("circle").data(data)
  .enter().append("circle")
  .attr("cx", d => xScale(d.users))
  .attr("cy", d => yScale(d.rps))
  .attr("r", 2)
  .attr("stroke", "blue")
  .attr("fill", "white");

var xAxis = d3.axisBottom(xScale);
svg.append("g")
  .attr("transform", `translate(0, ${innerHeight})`)
  .call(xAxis);

var yAxis = d3.axisLeft(yScale);
svg.append("g")
  .call(yAxis);


