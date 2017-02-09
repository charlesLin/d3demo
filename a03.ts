var data = [100, 50, 200];

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

var rects = [];
for (let i = 0; i < data.length; i++) {
  var rect  = svg.append("rect")
    .attr("x", 100 * i * 2)
    .attr("y", 0)
    .attr("width", 100)
    .attr("height", data[i])
    .attr("fill", 'red');
  rects.push(rect);
}

for (let i = 0; i < data.length; i++) {
  setTimeout(function() {
    rects[i].remove();
  }, 1000 * (i + 1));
}