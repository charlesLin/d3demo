var scale = d3.scalePoint()
			.domain(['A', 'B', 'C', 'D'])
			.range([0, 100]);
		console.log(scale("A"));
		console.log(scale("B"));
		console.log(scale("C"));
		console.log(scale("D"));