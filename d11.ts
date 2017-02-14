
var outerWidth = 800, outerHegith = 600;
var margin = { top: 20, right: 50, bottom: 50, left: 50 };
var height = outerHegith - margin.top - margin.bottom,
  width = outerWidth - margin.left - margin.right;

var svg =
  d3.select("body").append("svg").attr("width", outerWidth).attr("height", outerHeight)
    .append("g").attr("transform", `translate(${margin.left},${margin.top})`)
    .attr("height", height).attr("width", width);

var yScale = d3.scaleLinear().range([height, 0]);

var xScale = d3.scaleTime().range([0, width]);
var parser = d3.timeParse("%Y%m%d");
var line = d3.line()
  .x(d => xScale(parser(d.Date)))
  .y(d => yScale(d.close));

function render(stock, color) {
  d3.json(stock + ".json", data => {

    svg.append("path")
      .attr("d", line(data.series))
      .attr("stroke", color).attr("stroke-width", 1)
      .attr("fill", "none");

    var xAxis = d3.axisBottom(xScale);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
    var yAxis = d3.axisLeft(yScale);
    svg.append("g")
      .call(yAxis);
  });
}


var stocks = ['2330', '2303', '2331'];
var stocksData = [];
var pArray = [];
for (let i = 0; i < 3; i++) {
  var p = new Promise(function (resolve, reject) {
    d3.json(stocks[i] + ".json", function (data) {
      stocksData[i] = data;
      resolve(true);
    });
  });
  pArray.push(p);
}

Promise.all(pArray).then(() => {
  console.log(stocksData);
  var stocks = [];
  stocksData.map(stock => stocks = stocks.concat(stock.series));
  yScale.domain(d3.extent(stocks, d => d.close));
  xScale.domain(d3.extent(stocks, d => parser(d.Date)));

  render("2330", "red");
  render("2303", "green");
  render("2331", "blue");
});


