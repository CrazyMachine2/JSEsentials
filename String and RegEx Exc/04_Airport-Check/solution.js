function solve() {

    let string = document.getElementById("string").value;
    let arr = string.split(" , ");
    let text = arr[0];
    let cmd = arr[1];

    const extractName = (text) => {
        let pattern = / [A-Z][A-z]*-[A-Z][A-z]* | [A-Z][A-z]*-[A-Z][A-z]*.-[A-Z][A-z]* /gm;
        return pattern.exec(text)[0].replace(/\s+/g, "").replace(/-/g, " ");
    }

    const extractAirport = (text) => {
        return text.match(/([A-Z]{3}\/[A-Z]{3})/gm)[0];
    }

    const extractFlightNumber = (text) => {
        let pattern = / ([A-Z]{1,3}\d{1,5}) /gm
        // let str = text.match(/ ([A-Z]{1,3}\d{1,5}) /gm);
        return pattern.exec(text)[1];
    }

    const extractCompany = (text) => {
        let pattern = /- ([A-Z][A-Za-z]*\*[A-Z][A-Za-z]+) /gm;
        return pattern.exec(text)[1].replace("*", " ");
    }

    let commands = {
        "name": (text) => `Mr/Ms, ${extractName(text)}, have a nice flight!`,

        "flight": (text) => {
            let airports = extractAirport(text).split("/");
            return `Your flight number ${extractFlightNumber(text)} is from ${airports[0]} to ${airports[1]}.`
        },

        "company": (text) => `Have a nice flight with ${extractCompany(text)}.`,

        "all": (text) => `Mr/Ms, ${extractName(text)}, ` + commands["flight"](text).replace("Y", "y") + " " + commands["company"](text),
    }


    let resultMsg = commands[cmd](text);
    let result = document.getElementById("result");

    let newElement = document.createElement("p");
    newElement.textContent = resultMsg;
    result.appendChild(newElement);

}