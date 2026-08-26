let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
	const newArray = arr.slice().sort();
	return newArray;
}

console.log(copySorted(arr));
