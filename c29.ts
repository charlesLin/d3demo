
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
  margin = { left: 100, top: 50, right: 50, bottom: 50 },
  innerHeight = outerHeight - margin.top - margin.bottom,
  innerWidth = outerWidth - margin.left - margin.right;
var xScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.users)]).range([0, innerWidth]);
var yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.rps)]).range([innerHeight, 0]);

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

// var hintGroup = svg.append("g").style("display", "none");
// var text = hintGroup.append("text");
// text.append("tspan").attr('id', 'users');
// text.append("tspan").attr('id', 'rps');

var hintGroup = d3.select("#hint");
hintGroup.classed("hidden", true);


svg.selectAll("circle").data(data)
  .enter().append("circle")
  .attr("cx", d => xScale(d.users))
  .attr("cy", d => yScale(d.rps))
  .attr("r", 3)
  .attr("stroke", "blue")
  .attr("fill", "white")
  .on('mousemove', d => {
    //var text = hintGroup.select('text');
    var {clientX, clientY} = d3.event;
    var shiftX = clientX + 20;
    hintGroup.classed("hidden", false)
      .attr('style', `top: ${clientY}px; left: ${clientX}px;`);
    hintGroup.select('#rps').text("rps: " + d.rps);
    hintGroup.select('#users').text("users: " + d.users);
  })
  .on('mouseout', d => {
    hintGroup.classed("hidden", true);
  });

var xAxis = d3.axisBottom(xScale).ticks(5);
svg.append("g")
  .attr("transform", `translate(0, ${innerHeight})`)
  .call(xAxis);

var yAxis = d3.axisLeft(yScale)
  .ticks(5);
  //.tickSize(10)
  //.tickPadding(20);
svg.append("g")
  .call(yAxis);

svg.append("text")
  .attr("x", 0)
  .attr("y", innerHeight / 2)
  .text("RPS")
  .attr("transform", `rotate(90 0 ${innerHeight / 2}) translate(0 40)`);

svg.append("text")
  .attr("x", innerWidth / 2)
  .attr("y", innerHeight + 40)
  .text("Concurrent Users")
  .attr("text-anchor", "middle");


