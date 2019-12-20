function solve() {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let li = document.getElementsByTagName("li");

    document.querySelector("button").addEventListener('click', e => {
        let input = document.querySelector("input");
        let names = input.value.split(", ").filter(e => e != '');
        console.log(names);

        for (let name of names) {
            let index = alphabet.indexOf(name.charAt(0).toUpperCase());
            let list = li[index];
            name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

            if (list.textContent === '') {
                list.textContent = name;
            } else {
                list.textContent += ", " + name;
            }
        }
        input.value = '';
    })
}