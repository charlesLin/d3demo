var scale = d3.scaleLinear()
    .domain([0, 10000])
    .range([0, 800]);
console.log(scale(0));
console.log(scale(5000));
console.log(scale(10000));
console.log(scale.domain()); //get domain value
console.log(scale.range()); // get range value
