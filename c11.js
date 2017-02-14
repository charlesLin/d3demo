var data = ["金庸", "古龍", "大霹靂"];
var x = 100;
var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
svg.append("text")
    .attr("x", 100)
    .attr("y", 100)
    .selectAll("tspan")
    .data(data)
    .enter()
    .append("tspan")
    .text(d => d)
    .attr("x", x)
    .attr("dy", 50)
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("text-anchor", "start");
