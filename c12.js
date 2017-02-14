var data = [
    { users: 10, rps: 20 },
    { users: 20, rps: 42 },
    { users: 30, rps: 55 },
    { users: 40, rps: 78 },
    { users: 50, rps: 90 },
    { users: 60, rps: 110 },
    { users: 70, rps: 135 },
    { users: 80, rps: 145 },
    { users: 90, rps: 140 },
    { users: 100, rps: 120 },
    { users: 110, rps: 98 },
    { users: 120, rps: 60 }
];
var x = 100;
var height = 200;
var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", "100%");
var line = d3.line().x(d => d.users * 6).y(d => (height - d.rps) * 3);
svg.append("path")
    .attr("d", line(data))
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width", 1);
