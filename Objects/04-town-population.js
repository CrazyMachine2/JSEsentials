function solve(data){
    data = data.map(x => x.split(" <-> "))
    .reduce((a,b) => {
        !a[b[0]] ?  a[b[0]] = Number(b[1]) : a[b[0]] += Number(b[1]);
        return a;
    },{});

    for(let key in data){
        console.log(`${key} : ${data[key]}`);
    }

    // for(let [key,value] of Object.entries(obj)){
    //     console.log(`${key} : ${value}`);
    // }
}

console.log(solve(["Sofia <-> 120000", "Montana <-> 20000", "New York <-> 10000000", "Washington <-> 2345000", "Las Vegas <-> 1000000"]))