function solve(arr) {
    let num = 1;
    let newArr = [];

    arr.forEach(e => {
        e == 'add' ? newArr.push(num) : newArr.pop();
        num++;
    })

    newArr.length ? newArr.forEach(e => console.log(e)) : console.log('Empty');
}

solve(['remove','remove', 'remove']);