// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	//	return str.split('').reverse().join('');   1st solution

	// 2nd solution --- start 
	// let reversed = '';
	// for(let character of str){
	// 	if(character){
	// 		reversed = character + reversed;
	// 	}
	// }
	// return reversed;

	// 2nd solution --- end

	// 3rd solution -- start

	return str.split('').reduce((reversed, character) => character + reversed, '');

	// 3rd solution -- end
}

module.exports = reverse;
