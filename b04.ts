
var scale = d3.scaleOrdinal()
  .domain(["A", "B", "C"])
  .range(["新北市", "臺北市", "基隆市"]);

console.log(scale("A"));
console.log(scale("B"));
console.log(scale("C"));
