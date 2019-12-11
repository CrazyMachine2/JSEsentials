function solve(x,y){
    let result = 0;
 
   for(let i = Number(x); i <= Number(y); i++){
       result += i;
   }

   return result;
}

console.log(solve('-8', '20'));