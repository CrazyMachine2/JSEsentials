function chop(a) {
    return a / 2;
}

function dice(a) {
    return Math.sqrt(a);
}

function spice(a) {
    return a + 1;
}

function bake(a) {
    return a * 3;
}

function fillet(a) {
   return a = a - (a * 0.2);
}

let operationMap = {
    "chop": chop,
    "dice": dice,
    "spice": spice,
    "bake": bake,
    "fillet": fillet,
}

function solve(arr) {
    let num = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        num = operationMap[arr[i]](num);
        console.log(num);
    }
}

solve(['32','chop', 'chop', 'chop', 'chop', 'chop']);
// solve(['9','dice', 'spice','chop', 'bake', 'fillet']);