function solve (data){
    data = data.shift()
    .match(/\w+/gim)
    .reduce((allWords,word) => {
        allWords[word] ? allWords[word]++ : allWords[word] = 1;
        return allWords;
    } ,{});

   return  JSON.stringify(data);
}

console.log(solve(["JS JS devs use Node.js for server-side JS.-- JS for devs"]))