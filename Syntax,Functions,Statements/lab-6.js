function solve (count = 5){
    for(let i = 0; i < count; i++){
        console.log("*".repeat(count));
    }
}

function solve2 (count = 5){
    let result = new Array(count);

    for(let i = 0; i < count; i++){
        result[i] = "*".repeat(count).split("").join(" ");
    }
    return result.join("\n");
}

console.log(solve2(3));