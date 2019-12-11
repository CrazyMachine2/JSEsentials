function solve(data) {
    let obj = {};

    for (let i = 0; i < data.length; i += 2) {
        if (!obj.hasOwnProperty(data[i])) {
            obj[data[i]] = 0;
        }
        obj[data[i]] += Number(data[i + 1]);
    }

    return JSON.stringify(obj);
}


console.log(solve2(["Sofia", "20", "Varna", "3", "sofia", "5", "varna", "4"]));