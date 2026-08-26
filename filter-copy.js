let arr = [5, 3, 8, 1];

function filterRange(numbersArr, name, min, max) {
	numbersArr = numbersArr.filter((num) => num >= min && num <= max);
	arr = numbersArr.slice();
}

filterRange(arr, 1, 4);

// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]
// ask for limits a and b min and max
// ask for elements of the list of numbers
// if number is greeter than max then delete
// if number is lower than min then delete
// (max and min included)
// Edits the same array
