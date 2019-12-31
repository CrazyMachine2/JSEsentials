function getData() {
	let paragraphs = document.getElementsByTagName("p");
	let peopleInP = paragraphs[0];
	let blackListP = paragraphs[1];
	let peopleOutP = paragraphs[2];

	let input = JSON.parse(document.querySelector("#input textarea").value);
	let sorting = input.pop();

	let peopleIn = {};
	let blackList = {};
	let peopleOut = {};

	input.forEach(obj => {
		let cmd = obj.action;
		let fullName = obj.firstName + " " + obj.lastName;

		if (cmd === "peopleIn") {
			if (!blackList.hasOwnProperty(fullName) && !peopleIn.hasOwnProperty(fullName)) {
				peopleIn[fullName] = obj;
			}
		} else if (cmd === "peopleOut") {
			if (peopleIn.hasOwnProperty(fullName)) {
				let person = peopleIn[fullName];
				delete peopleIn[fullName];
				peopleOut[fullName] = person;
			}
		} else if (cmd === "blacklist") {
			if (peopleIn.hasOwnProperty(fullName)) {
				let person = peopleIn[fullName];
				delete peopleIn[fullName];
				peopleOut[fullName] = person;
			}
			blackList[fullName] = obj;
		}
		delete obj["action"];
	})

	const output = {
		"peopleIn":peopleIn,
		"peopleOut":peopleOut,
		"blacklist":blackList,
	}

	if (sorting.criteria !== "" && sorting.action !== "") {
		output[sorting.action] = sortObjectsByCriteria(sorting.criteria,output[sorting.action]);
	}
	
	Object.keys(output.peopleIn).forEach(k => peopleInP.textContent += JSON.stringify(peopleIn[k]) + " ");
	Object.keys(output.peopleOut).forEach(k => peopleOutP.textContent += JSON.stringify(peopleOut[k]) + " ");
	Object.keys(output.blacklist).forEach(k => blackListP.textContent += JSON.stringify(blackList[k]) + " ");

	function sortObjectsByCriteria(criteria, object) {
		return Object.entries(object)
			.sort((a, b) => a[1][criteria].localeCompare(b[1][criteria]))
			.reduce((obj, [key, value]) => ({
				...obj, [key]: value
			}), {});
	}
}