function solve(matrix){
    let innitialSum = matrix[0].reduce((a,b) => a + b,0);

    for(let row = 1; row < matrix.length; row++){
        let curSum = matrix[row].reduce((a,b) => a +b,0);

        if(curSum != innitialSum){
            console.log(false);
            return
        }
    }

    for(let col = 0; col < matrix.length; col++){
        let sum = 0;
        for(let row = 0; row < matrix.length; row++){
            sum += matrix[row][col];
        }

        if(sum != innitialSum){
            console.log(false);
            return
        }
    }

    console.log(true);
}

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);