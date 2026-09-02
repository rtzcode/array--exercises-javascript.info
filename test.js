let users = [
	{ id: "john", name: "John Smith", age: 20 },
	{ id: "ann", name: "Ann Smith", age: 24 },
	{ id: "pete", name: "Pete Peterson", age: 31 },
];

// function groupById(arr) {
// 	let ob = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		const id = arr[i].id;
// 		ob[id] = arr[i];
// 	}
// 	return ob;
// }

function groupById(arr) {
	let ob = {};
	arr.reduce((acc, el, i) => {
		ob[el.id] = el;
	}, []);
	return ob;
}
// Supposed Solution
// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {})
// }
let usersById = groupById(users);
console.log(usersById);
