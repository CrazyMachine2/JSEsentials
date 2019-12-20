function solve(matrix){
    let max = Number.MIN_SAFE_INTEGER;

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length; col++){
            if(matrix[row][col] >= max){
                max = matrix[row][col];
            }
        }
    }
    return max;
}

function solve2(matrix){
    let max = Number.MIN_SAFE_INTEGER;
    matrix.forEach(row => row.forEach(col => max = Math.max(max,col)));
    return max;
}

console.log(solve2([[3, 5, 7, 12],
    [-1, 4, 33,
    2],
    [8, 3, 0, 4]]));