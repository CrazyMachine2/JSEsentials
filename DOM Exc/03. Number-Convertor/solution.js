function solve() {
    let selectTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');

    let binary = createElementWithText('option', 'Binary');
    binary.setAttribute('value', 'binary');

    let hexadec = createElementWithText('option', 'Hexadecimal');
    hexadec.setAttribute('value', 'hexadecimal');

    selectTo.appendChild(binary);
    selectTo.appendChild(hexadec);

    document.getElementsByTagName('button')[0]
        .addEventListener('click', (e) => {
            let number = document.getElementById('input').value;
            let selected = selectTo.options[selectTo.selectedIndex].value;

            if(selected === ''){
                return;
            }

            if(selected === 'binary'){
                result.value = (Number(number) >>> 0).toString(2);
                result.textContent = (Number(number) >>> 0).toString(2);
            } else if (selected === 'hexadecimal'){
                result.value = Number(number).toString(16).toUpperCase();
                result.textContent = Number(number).toString(16).toUpperCase();
            }
        })


    function createElementWithText(tag, text) {
        let element = document.createElement(tag);
        element.textContent = text;
        return element;
    }
}