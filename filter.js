let arr = [5, 3, 8, 1];

function filterRange(numbersArr, min, max) {
	return numbersArr.filter((num) => num >= min && num <= max);
}

console.log(filterRange(arr, 1, 4));

// ask for limits a and b min and max
// ask for elements of the list of numbers
// if number is greeter than max then don't show
// if number is lower than min then don't show
// (max and min included)
// return an new array
