var data = [100, 50, 200];
var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", "translate(100, 0)");
svg.selectAll('line')
    .data(data)
    .enter()
    .append("line")
    .attr("x1", function (d, i) {
    return 100 * i * 2;
})
    .attr("y1", function (d) { return d; })
    .attr("x2", 100)
    .attr("y2", function (d) { return d * 3; })
    .attr("stroke", 'red')
    .attr("stroke-width", 1);
