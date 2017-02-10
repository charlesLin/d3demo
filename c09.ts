
//var data = [100, 50, 200];

var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

svg.append("text")
  .text("Hello, I am Charles")
  .attr("x",100)
  .attr("y", 100)
  .attr("fill", "none")
  .attr("stroke", "blue")
  ;
svg.append("text")
  .text("Hello, I am Charles")
  .attr("x",100)
  .attr("y", 150)
  .attr("fill", "red")
  .attr("stroke", "blue")
  ;
svg.append("text")
  .text("Hello, I am Charles")
  .attr("x",100)
  .attr("y", 200)
  .attr("fill", "none")
  .attr("stroke", "darkgreen")
  ;

