function solve(firstString, secondString, thirdString){
    let sum = firstString.length + secondString.length + thirdString.length;
    let avg = Math.floor(sum/3);
    console.log(sum);
    console.log(avg);
}

function solve2(...params){
  let sum = params.reduce((a,b) => a + b.length, 0);
  let avg = Math.floor(sum / params.length);
  return [sum,avg];
}

// solve('chocolate', 'ice cream', 'cake');

console.log(solve2('chocolate', 'ice cream', 'cake').join("\n"))

