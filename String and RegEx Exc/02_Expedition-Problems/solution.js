function solve() {
    let string = document.getElementById("string").value;
    let text = document.getElementById("text").value;
    let result = document.getElementById("result");

    const extractCoordinates = (direction, text) => {
        let pattern = new RegExp(`(${direction})(?:.*?)(\\d{2})(?:[^,]*?),(?:[^,]*?)(\\d{6})`, 'gim');
        let arr = [...text.matchAll(pattern)].pop();
        let str = `${arr[2]}.${arr[3]}`
        return str;
    }

    const extractMessage = (delimiter, text) => {
        let pattern = new RegExp(`${delimiter}.*${delimiter}`,'gim');
        let delPattern = new RegExp(`${delimiter}`,'gim');
        let str = text.match(pattern)[0];
        return str.replace(delPattern,"");
    }

    let longitute = extractCoordinates('east', text) + " E";
    let latitude = extractCoordinates('north',text) + " N";
    let msg = extractMessage(string, text);

    let newElement = document.createElement('p');
    newElement.textContent += latitude
    result.appendChild(newElement);

    newElement = document.createElement('p');
    newElement.textContent += longitute
    result.appendChild(newElement);

    newElement = document.createElement('p');
    newElement.textContent += "Message: " + msg;
    result.appendChild(newElement);

    
}