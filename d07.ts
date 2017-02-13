
var outerWidth = 800, outerHegith = 600;
var margin = { top: 20, right: 50, bottom: 50, left: 50 };
var height = outerHegith - margin.top - margin.bottom,
  width = outerWidth - margin.left - margin.right;

var svg =
  d3.select("body").append("svg").attr("width", outerWidth).attr("height", outerHeight)
    .append("g").attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("height", height).attr("width", width);

var yScale = d3.scaleLinear().range([height ,0]);

var xScale = d3.scaleTime().range([0, width]);
var parser = d3.timeParse("%Y%m%d");
var line = d3.line()
  .x(d => xScale(parser(d.Date)))
  .y(d => yScale(d.close));

d3.json("2303.json", data => {
  console.log(data);
  yScale.domain(d3.extent(data.series, d => d.close));
  xScale.domain(d3.extent(data.series, d => parser(d.Date)));

  console.log(xScale(parser(data.series[0].Date)));
  console.log(xScale(parser(data.series[data.series.length-1].Date)));

  svg.append("path")
    .attr("d", line(data.series))
    .attr("stroke", "red").attr("stroke-width", 1)
    .attr("fill", "none");
});