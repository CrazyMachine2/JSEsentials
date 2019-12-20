function sovle (arr){
    let num = arr.shift();

   console.log(arr.slice(0,num).join(" "));
   console.log(arr.slice(arr.length - num, arr.length).join(" "));
}

sovle([2, 6, 7, 8, 9,10,11,12]);