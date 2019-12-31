function solve(arr){
    let increment = Number(arr.pop());

    for(let i = 0; i < arr.length; i += increment){
        console.log(arr[i]);
    }
}

solve(['5','20','31','4','20','6']);