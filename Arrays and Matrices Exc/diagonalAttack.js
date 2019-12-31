function solve(arrayOfStrings) {
    let matrix = arrayOfStrings.map(a => a.split(" ").map(Number));

    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonal += matrix[row][row];
        secondDiagonal += matrix[row][matrix.length - 1 - row]
    }

    if (firstDiagonal == secondDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            let first = matrix[row][row];
            let second = matrix[row][matrix.length - 1 - row];
            
            for (let col = 0; col < matrix[row].length; col++) {
                if((row !== col) && (col !== matrix.length -1 - row)){
                    matrix[row][col] = firstDiagonal;
                }
            }
        }
    }

    matrix.forEach(x => console.log(x.join(" ")));
}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'])