var data = [100, 50, 200];

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

for (let i = 0; i < data.length; i++) {
  svg.append("rect")
    .attr("x", 100 * i * 2)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", data[i])
    .attr("fill", 'red');
}