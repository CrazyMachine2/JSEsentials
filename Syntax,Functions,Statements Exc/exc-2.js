function solve(number){
    
   let numString = Number(number).toString();
   let arr = number.toString().split("").map(function(n){return parseInt(n)});
   let flag = true;

   for(let i = 0; i < numString.length - 1; i++){
        let n1 = numString.charAt(i);
        let n2 = numString.charAt(i + 1);
            
        if (n1 != n2) {
            flag = false;
            break;
        }
     }
     console.log(flag);
     console.log(arr.reduce((a,b) => a + b, 0));
}

function solve2(number){
    let arr = number.toString().split("").map(function(n){return parseInt(n)});
    let filteredArr = arr.filter( a => a == arr[0]);
    let sum = arr.reduce((a,b) => a + b, 0);
    let bool = arr.length == filteredArr.length ? true : false;
    
    console.log(bool);
    console.log(sum);
}

solve2(2222222);
solve2(1234);