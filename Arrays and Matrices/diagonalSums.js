function solve(matrix){
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for(let row = 0; row < matrix.length; row++){
      leftDiagonal += matrix[row][row];
      rightDiagonal += matrix[row][matrix.length - 1 - row]
    }
    console.log(leftDiagonal + " " + rightDiagonal);
}

solve([[20, 40],
    [10, 60]]);

