
//var data = [100, 50, 200];
var x = 300;
var svg = d3.select("body").append("svg")
  .attr("width", "100%")
  .attr("height", "100%");

svg.append("text")
  .text("Start, I am Charles")
  .attr("x",x)
  .attr("y", 100)
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("text-anchor", "start")
  ;
svg.append("text")
  .text("Middle, I am Charles")
  .attr("x",x)
  .attr("y", 150)
  .attr("fill", "red")
  .attr("stroke", "blue")
  .attr("text-anchor", "middle")
  ;
svg.append("text")
  .text("End, I am Charles")
  .attr("x",x)
  .attr("y", 200)
  .attr("fill", "none")
  .attr("stroke", "darkgreen")
  .attr("text-anchor", "end")
  ;

svg.append("line")
  .attr("x1", x)
  .attr("y1", 0)
  .attr("x2", x)
  .attr("y2", 300)
  .attr("stroke", "red");


