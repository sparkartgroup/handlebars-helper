// From http://stackoverflow.com/a/19303725/2032154
var seededRandom = function(seed) {
	return function random() {
		var x = Math.sin(seed++) * 10000;
		return x - Math.floor(x);
	}
}
// Simple shuffling method based off of http://bost.ocks.org/mike/shuffle/
var shuffle = function( array, prng ){
	var i = array.length, j, swap;
	while( i ){
		j = Math.floor( prng() * i-- );
		swap = array[i];
		array[i] = array[j];
		array[j] = swap;
	}
	return array;
};

module.exports = function( collection, options ){
	var prng = Math.random;
	if(options.hash.seed !== undefined) {
		prng = seededRandom(options.hash.seed);
	}

	var shuffled = shuffle( collection, prng );
	var result = '';
	for( var i = 0; i < shuffled.length; i++ ){
		result += options.fn( shuffled[i] );
	}
	return result;
};
