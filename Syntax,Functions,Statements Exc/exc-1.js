function solve(fruit, weight, price){
    let weightKg = (weight / 1000);
    let neededMoney = weightKg * price;

    return `I need $${neededMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(solve('apple', 1563, 2.35));