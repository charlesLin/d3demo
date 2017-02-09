var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

var data = [100, 50, 200];
function render(data) {
  var rects = [];
  for (let i = 0; i < data.length; i++) {
    var rect = svg.append("rect")
      .attr("x", 100 * i * 2)
      .attr("y", 0)
      .attr("width", 100)
      .attr("height", data[i])
      .attr("fill", 'red');
    rects.push(rect);
  }
}

render([10, 50]);
setTimeout(() => {
  render([10, 50, 200]);
}, 1000);

