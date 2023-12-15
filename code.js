
var cache = [];
function tsp_hk(dist) {
	if (dist.length <= 1)
	return 0    
    let cities = [];
    let distance = 0;
	let min = Infinity;
	for (let i = 0; i < dist.length; i++)
		cities[i] = i;

	for (let i = 0; i < cities.length; i++) {
		distance = heldKarp(dist, cities, cities[i]);
		if (distance < min)
			min = distance;
	}
	return min;
}

// helper function to perform recursive calls
function heldKarp(dist, cities, start) {

	let distance = 0;
	
	if (cities.length == 2) {
		return dist[cities[0]][cities[1]];
	}
	else {
		let newCities = cities.filter(x => x != start);
		let min = Infinity;
		for (let city of newCities) {
			var key = JSON.stringify(newCities);
			if (cache[key] === undefined) cache[key] = [];
			if (cache[key][start] !== undefined) return cache[key][start];
			distance = dist[start][city] + heldKarp(dist, newCities, city);

			if (distance < min)
				min = distance;
		}
		cache[key][start] = min;
		return min;
	}
}
