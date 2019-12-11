function solve(arr){
    let obj = {};

    for (let i = 0; i < arr.length; i+=2){
        let element = arr[i];
        let value = +arr[i + 1];
        obj[element] = value;
    }
    console.log(obj);
}

let test1 = ['Yoghurt', 48, 'Rise', 138, 'Apple', 52];
solve(test1);

let test2 = ['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42];
solve(test2);