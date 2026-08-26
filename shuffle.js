let arr = [1, 2, 3];

//
//
//
function shuffle(arr) {
	return arr.sort((a, b) => 0.5 - Math.random());
}
console.log(shuffle(arr));

console.log(Math.random() - 0.5);
