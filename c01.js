var data = [100, 50, 200];
var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .append("g")
    .attr("transform", "translate(100, 0)");
svg.selectAll('circle')
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {
    return 100 * i * 2;
})
    .attr("cy", d => d)
    .attr("r", d => d)
    .attr("fill", 'red');
