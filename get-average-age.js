let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arr) {
	let ages = [];
	for (let i = 0; i < arr.length; i++) {
		ages.push(arr[i].age);
	}
	return ages.reduce((count, current) => count + current) / 3;
	// it should have been array length instead of 3
}

console.log(getAverageAge(arr));
