
var outerWidth = 800, outerHegith = 600;
var margin = { top: 20, right: 50, bottom: 50, left: 50 };
var height = outerHegith - margin.top - margin.bottom,
  width = outerWidth - margin.left - margin.right;

var svg =
  d3.select("body").append("svg").attr("width", outerHeight).attr("height", outerHeight)
    .append("g").attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("height", height).attr("width", width);

var yScale = d3.scaleLinear().range([0, height]);


d3.json("2330.json", data => {
  console.log(data);
  yScale.domain([
    d3.min(data.series, d => d.close),
    d3.max(data.series, d => d.close)
  ]);
  console.log(yScale.domain());
 });