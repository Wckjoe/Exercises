// calculator('+', 5, 9) // 14
// calculator('-', 7, 3) // 4
// calculator('*', 5, 5) // 25
// calculator('/', 9, 3) // 3

function calculator(operation, value1, value2) {
	if ((operation == '+')) {
		return value1 + value2;
	} else if ((operation == '-')) {
		return value1 - value2;
	} else if ((operation == '*')) {
		return value1 * value2;
	} else if ((operation == '/')) {
		return value1 / value2;
	}
}

calculator('+', 5, 9);
console.log(calculator('+', 5, 9));

calculator('-', 7, 3);
console.log(calculator('-', 7, 3));

calculator('*', 5, 5);
console.log(calculator('*', 5, 5));

calculator('/', 9, 3);
console.log(calculator('/', 9, 3));