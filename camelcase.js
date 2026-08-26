// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

/*

create a function that makes camel case

take a string and delete the ' - '
then take first letter of the coming word and make it uppercase
return a full string 

*/

let example = "background-color-ricardo-papa";

function doCamelize(str) {
	let camelString = "";
	const splitted = str.split("-");
	camelString += `${splitted[0]}`;
	const arrUppercase = splitted.map(
		(word) => word.charAt(0).toUpperCase() + word.slice(1),
	);
	for (let i = 1; i < arrUppercase.length; i++) {
		camelString += arrUppercase[i];
	}
	return camelString;
}
console.log(doCamelize(example));

function camelize(str) {
	return str
		.split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
		.map(
			// capitalizes first letters of all array items except the first one
			// converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
			(word, index) =>
				index == 0 ? word : word[0].toUpperCase() + word.slice(1),
		)
		.join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
