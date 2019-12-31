function solve(arr){
    let num = Number(arr.pop()) % arr.length;


    for(let i = 0; i < num; i++){
        let popped = arr.pop();
        arr.splice(0,0,popped);
    }

    return arr.join(" ");
}

console.log(solve(['Banana','Portokala','Kokos','Manzana','15']));