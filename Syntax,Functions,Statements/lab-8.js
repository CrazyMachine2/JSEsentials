const add = (a,b) => a + b;
const addInverse = (a,b) => a + (1 / b);
const concat = (a,b) => a + b.toString();

function solve(...params){
    return [
        params.reduce(add, 0),
        params.reduce(addInverse, 0),
        params.reduce(concat, ""),
    ].join("\n");
}

console.log(solve(1, 2, 3));