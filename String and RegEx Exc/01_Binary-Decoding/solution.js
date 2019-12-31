function solve() {
	let input = document.getElementById("input").value;
	let result = document.getElementById("resultOutput");

	let arr = input.match(/[1]/gm);

		while(arr.length > 1){
			arr = arr
			.map(Number)
			.reduce((a,b) => a + b,0)
			.toString()
			.split("")
			.map(Number);
		}

		let number = arr[0];

	let decoded = input.substring(number, input.length - number)
		.match(/.{1,8}/gm)
		.map(x => parseInt(x,2))
		.map(x => String.fromCharCode(x))
		.join("")
		.replace("/[^A-Za-z\s]/g","");

		result.textContent = decoded;
}