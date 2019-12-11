function solve(operator, ...params){
return params
        .reduce((a, b) => eval(`${a} ${operator} ${b}`),params.shift())
}

console.log(solve("+", 1, -2, 3, 4));

const operationsMap = {
    "+": (x,y) => x+y,
    "-": (x,y) => x-y,
    "*": (x,y) => x*y,
    "/": (x,y) => x/y,
    "%": (x,y) => x%y,
    "**": (x,y) => x**y
}

function solve2(operator, ...params){
    return params
        .reduce((a, b) => operationsMap[operator](a, Number(b)), Number(params.shift()))
}

console.log(solve2("+", 1 ,2))
