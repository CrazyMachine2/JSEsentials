function solve(arr){
   arr = arr.sort((a,b) => {
       return a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase());
    });

    arr.forEach(e => console.log(e));
}

solve(['test','Deny','omen','Default']);