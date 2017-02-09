var data = [100, 50, 200];

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

console.log("aaaa");
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => {
      console.log(d);
      return 100 * i * 2;
    })
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", d => d)
    .attr("fill", 'red');