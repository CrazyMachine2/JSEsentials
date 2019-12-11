function solve(arr) {
    let income = 0;

    for (let i = 0; i < arr.length; i++) {
        let order = arr[i].split(", ");
        let money = (Number) (order[0]);
        let drink = order[1];
        let price = 0;
        let milk = false;
        let sugar = 0;

        if (drink == 'tea') {
            price = 0.80;
            for (let j = 2; j < order.length; j++) {
                switch (order[j]) {
                    case "milk": {
                        milk = true;
                        break;
                    }
                    default: {
                        sugar = order[j];
                        break;
                    }
                }
            }
        } else {
            let name = drink + " " + order[2];

            if(name == "coffee caffeine"){
                price = 0.80;
            } else {
                price = 0.90;
            }

            for (let k = 3; k < order.length; k++) {
                switch (order[k]) {
                    case "milk": {
                        milk = true;
                        break;
                    }
                    default: {
                        sugar = order[k];
                        break;
                    }
                }
            }
        }
        
        let cost = price;

        if (milk){
            let milkCost = Number((cost * 0.1).toFixed(1));
            cost += milkCost;
        }

        if(sugar != 0){
            cost += 0.1;
        }

        if (money - cost < 0) {
            console.log(`Not enough money for ${drink}. Need $${(cost - money).toFixed(2)} more.`)
        } else {
            income += cost;
            console.log(`You ordered ${drink}. Price: $${cost.toFixed(2)} Change: $${(money - cost).toFixed(2)}`)
        }
     
    }
    console.log(`Income Report: $${income.toFixed(2)}`)
}
    let test1 = ['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, cofee, decaf, 0'];
    let test2 = ['8.00, coffee, decaf, 4', '1.00, tea, 2'];
    solve(test2);