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
    .attr("x", (d, i) => 100 * i * 2)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", (d: any) => d)
    .attr("fill", 'red');

  //exit
  rects
    .exit().remove();
}

render([10, 50, 200]);
setTimeout(() => {
  render([100, 50]);
}, 1000);

