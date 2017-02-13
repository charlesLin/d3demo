
var outerWidth = 800, outerHegith = 600;
var margin = { top: 20, right: 50, bottom: 50, left: 50 };
var height = outerHegith - margin.top - margin.bottom,
  width = outerWidth - margin.left - margin.right;

var svg =
  d3.select("body").append("svg").attr("width", outerWidth).attr("height", outerHeight)
    .append("g").attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("height", height).attr("width", width);

var yScale = d3.scaleLinear().range([0, height]);

var xScale = d3.scaleTime().range([0, width]);



d3.json("2303.json", data => {
  console.log(data);
  var parser = d3.timeParse("%Y%m%d");
  yScale.domain(d3.extent(data.series, d => d.close));
  xScale.domain(d3.extent(data.series, d => parser(d.Date)));

  console.log(xScale(new Date(2016, 2, 12)));
  console.log(xScale.domain());
});