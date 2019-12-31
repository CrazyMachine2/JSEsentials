function solve(rows, cols) {
    let result = new Array(rows).fill().map(() => new Array(cols).fill(''));
    let counter = 1;
    let startCol = 0;
    let endCol = cols - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while(startCol <= endCol && startRow <= endRow){
    for (let col = startCol; col <= endCol; col++) {
        result[startRow][col] = counter;
        counter++;
    }
    startRow++;

    for(let row = startRow; row <= endRow; row++){
        result[row][endCol] = counter;
        counter++;
    }
    endCol--;

    for(let col = endCol; col >= startCol; col--){
        result[endRow][col] = counter;
        counter++;
    }
    endRow--;

    for(let row = endRow; row >= startRow; row--){
        result[row][startCol] = counter;
        counter++;
    }

    startCol++;
}
    for(let row = 0; row < result.length; row++){
       console.log(result[row].join(" "))
    }
}

solve(3, 3);