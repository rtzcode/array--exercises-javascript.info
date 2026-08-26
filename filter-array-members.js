/**
 *
 * user gives a array with words that are duplicated, if there are three words show 1
 * create a function that returns only the words that appear one time, or not pair
 * filter if a word has appeared before in the array
 * Create an array to compare
 * Compare looping every array if it doest have it the add to filter
 * make a loop with a sum that make odd numbers show if it true appear
 * it will eliminate pairs, like they cancel themselves
 */

let strings = [
	"Hare",
	"Krishna",
	"Hare",
	"Krishna",
	"Krishna",
	"Krishna",
	"Hare",
	"Hare",
	":-O",
	"ricardo",
];

function unique(arr) {
	let compareArr = [];
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i];
		if (!compareArr.includes(word)) {
			compareArr.push(word);
		}
	}
	return compareArr;
}
console.log(unique(strings));
// best solution with a for of
