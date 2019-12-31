function solve(arr) {
    let biggest = arr[0];

    return arr.reduce((acc, cur) => {
        if (cur >= biggest) {
            biggest = cur;
            acc.push(cur);
        }
        return acc;
    }, []).forEach(e => console.log(e));
}

solve([20,
    3,
    2,
    15,
    6,
    1]);