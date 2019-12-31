function solve() {
    let arr = JSON.parse(document.getElementById("array").value);
    let specialWord = arr[0].toLowerCase();
    let text = arr[1];
    let textCopy = arr[1];

    let keyWordPattern = new RegExp(`${specialWord}`, "gi");
    textCopy = textCopy.replace(keyWordPattern, specialWord);

    let msgPattern = new RegExp(`(?: |^)${specialWord}\\s+([A-Z!#$%]{8,})(?: |\\.|,|$)`, 'gm');
    let match;

    let obj = {
        "!":"1",
        "%":"2",
        "#":"3",
        "$":"4"
    }

    while(match = msgPattern.exec(textCopy)){
        let reworked = match[1].toLowerCase()
        .split("")
        .map(x => obj[x] ? obj[x] : x)
        .join("");

        text = text.replace(match[1],reworked);
    }

    let result = document.getElementById("result");

    let newElement = document.createElement("p");
    newElement.textContent = `Result: ${text}`;
    result.appendChild(newElement);
}
