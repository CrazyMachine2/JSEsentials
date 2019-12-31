function coffeeStorage() {
    let str = document.querySelector("textarea").value;
    let report = document.getElementsByTagName("p")[0];
    let inspection = document.getElementsByTagName("p")[1];
    let arr = JSON.parse(str);
    let brands = {};

    function compareObjectsByDate(oldObj, newObj) {
        if (oldObj["date"] < newObj["date"]) {
            return newObj;
        } else if (oldObj["date"] > newObj["date"]) {
            return oldObj;
        } else {
            oldObj["quantity"] += newObj["quantity"];
            return oldObj;
        }
    }

    for (let string of arr) {
        let data = string.split(", ");
        let cmd = data[0];

        let brand = data[1];
        let name = data[2];
        let date = data[3];
        let quantity = Number(data[4]);

        if (cmd === 'IN') {

            if (!brands.hasOwnProperty(brand)) {
                brands[brand] = {};
            }

            if (!brands[brand].hasOwnProperty(name)) {
                brands[brand][name] = { "name": name, "date": date, "quantity": quantity };
            } else {
                let newObj = { "name": name, "date": date, "quantity": quantity };
                brands[brand][name] = compareObjectsByDate(brands[brand][name], newObj);
            }

        } else if (cmd === 'OUT') {
            if (brands.hasOwnProperty(brand) && brands[brand].hasOwnProperty(name)) {
                if (brands[brand][name]["date"] > date && brands[brand][name]["quantity"] >= quantity) {
                    brands[brand][name]["quantity"] -= quantity;
                }
            }

        } else if (cmd === 'REPORT') {
            for (let key in brands) {
                let newElement = document.createElement("br");
                report.innerHTML += `${key}: `
               
                for (let key2 in brands[key]) {
                    report.innerHTML += `${brands[key][key2]["name"]} - ${brands[key][key2]["date"]} - ${brands[key][key2]["quantity"]}. `
                }
                report.innerHTML = report.innerHTML.replace(/\s$/,"");
                report.appendChild(newElement);
            }
        } else if (cmd === 'INSPECTION') {
           let brandsArr = Object.entries(brands).sort((a,b) =>{
            let name1 = a[0];
            let name2 = b[0];
            return name1.localeCompare(name2);
           });

           for (let brand of brandsArr){
            let newElement = document.createElement("br");
            inspection.innerHTML += `${brand[0]}: `

            let coffeesArr = Object.entries(brand[1]);
            coffeesArr = coffeesArr.sort((a,b) => {
                let quantity1 = a[1]["quantity"];
                let quantity2 = b[1]["quantity"];
                return quantity2 - quantity1;
            });

            for(let coffee of coffeesArr){
                let coffeeObj = coffee[1];
                inspection.innerHTML += `${coffeeObj["name"]} - ${coffeeObj["date"]} - ${coffeeObj["quantity"]}. `
            }

            inspection.innerHTML = inspection.innerHTML.replace(/\s$/,"");
            inspection.appendChild(newElement);
           }
        }
    }
}

