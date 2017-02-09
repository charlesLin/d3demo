var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

function render(data) {

  var rects = svg.selectAll('rect').data(data);
  //enter
  rects
    .enter()
    .append("rect")
    .attr("x", (d, i) => 100 * i * 2)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", (d: any) => d)
    .attr("fill", 'red');

  //update
  rects
    //.append("rect")
    .transition()
    .duration(300)
    .ease(d3.easeQuad)
    .attr("x", (d, i) => 100 * i * 2)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", (d: any) => d)
    .attr("fill", 'red');

  //exit
  rects
    .exit()
    .transition()
    .duration(300)
    .ease(d3.easeQuad)
    .attr("height", 0)
    .remove();
}

render([10, 50, 200]);
setTimeout(() => {
  render([100, 50]);
}, 1000);

