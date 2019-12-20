function solve (arr){
    let newArr = [];

    arr.forEach(e => {
        if(e < 0){
            newArr.unshift(e);
        } else {
            newArr.push(e);
        }
    });

    newArr.forEach(e => console.log(e));
}

solve([3, -2, 0, -1]);