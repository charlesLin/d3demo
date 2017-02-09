var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
var rect = svg.append("rect")
    .attr("x", 100)
    .attr("y", 100)
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", 'red');
