var populations = [
    { name: "新北市", population: 4054467 },
    { name: "臺北市", population: 2655515 },
    { name: "基隆市", population: 381809 }
];
var svg = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 600);
var scale = d3.scaleLinear()
    .domain([0, 4000000])
    .range([0, 800]);
function render(data) {
    var rects = svg.selectAll('rect').data(data);
    //enter
    rects
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", function (d, i) { return 100 * i * 2; })
        .attr("width", function (d) { return scale(d); })
        .attr("height", 100)
        .attr("fill", 'red');
    //exit
    rects
        .exit().remove();
}
var numbers = populations.map(function (m) { return m.population; });
render(numbers);
