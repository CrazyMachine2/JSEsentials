function solve(matrix) {
    let atm = {};

    function calcSumInAtm(obj) {
        let sum = 0;
        for (let key in obj) {
            sum += +key * obj[key];
        }
        return sum;
    }

    for (let cmd of matrix) {

        if (cmd.length > 2) {
            atm = cmd.reduce((atm, banknote) => {
                if (banknote in atm) {
                    atm[banknote]++;
                } else {
                    atm[banknote] = 1;
                }
                return atm;
            }, atm);

            let sumOfCash = cmd.reduce((a, b) => a + b, 0);
            console.log(`Service Report: ${sumOfCash}$ inserted. Current balance: ${calcSumInAtm(atm)}$.`);

        } else if (cmd.length == 2) {
            let balance = cmd.shift();
            let moneyToWithdraw = cmd.shift();

            if (balance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`)
            } else if (moneyToWithdraw > calcSumInAtm(atm)) {
                console.log('ATM machine is out of order!');
            } else {
                let keys = Object.keys(atm).sort((a, b) => b - a);
                let withdraw = moneyToWithdraw;
                while (withdraw > 0) {
    
                    for (let key of keys) {
                        if (Number(key) > withdraw || atm[key] == 0) {
                            continue;
                        }
                        withdraw -= Number(key);
                        atm[key]--;
                    }
                }
                balance -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${balance}$. Thank you!`)
            }

        } else {
            let banknote = cmd.pop();
           console.log(`Service Report: Banknotes from ${banknote}$: ${atm[banknote]}.`)
        }
    }
}


solve([[20, 5, 100, 20, 1],
[457, 25],
[1],
[10, 10, 5, 20, 50, 20, 10, 5, 2, 100, 20],
[20, 85],
[5000, 4500],
]);