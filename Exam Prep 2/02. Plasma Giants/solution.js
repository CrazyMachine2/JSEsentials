function solve(arr, cutSize) {
    let fArr = arr.slice(0, arr.length / 2);
    let sArr = arr.slice(arr.length / 2);

    let firstHealth = calculateHp(fArr, cutSize);
    let secondHealth = calculateHp(sArr, cutSize);

    let dmgPerHit = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    let roundCounter = 1;

    if (dmgPerHit !== 0) {
        while (firstHealth > maxNumber && secondHealth > maxNumber) {
            firstHealth -= dmgPerHit;
            secondHealth -= dmgPerHit;
            roundCounter++;
        }
    }

    if (secondHealth > firstHealth) {
        console.log(`Second Giant defeated First Giant with result ${secondHealth} - ${firstHealth} in ${roundCounter} rounds`);
    } else if (firstHealth > secondHealth) {
        console.log(`First Giant defeated Second Giant with result ${firstHealth} - ${secondHealth} in ${roundCounter} rounds`);
    } else {
        console.log(`Its a draw ${firstHealth} - ${secondHealth}`)
    }


    function calculateHp(arr, cutSize) {
        let hp = 0;
        while (arr.length > 0) {
            hp += arr.splice(0, cutSize).reduce((a, b) => a * b);
        }
        return hp;
    }
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);

function solve2(arr, cutSize) {
    let fArr = arr.slice(0, arr.length / 2);
    let sArr = arr.slice(arr.length / 2);

    let firstHealth = calculateHp(fArr, cutSize);
    let secondHealth = calculateHp(sArr, cutSize);

    let minNumber = Math.min(...arr);
    let maxNumber = Math.max(...arr);
    let roundCounter = 1;

    if (minNumber !== 0) {
        while (firstHealth > maxNumber && secondHealth > maxNumber) {
            firstHealth -= minNumber;
            secondHealth -= minNumber;
            roundCounter++;
        }
    }

    if (secondHealth > firstHealth) {
        console.log(`Second Giant defeated First Giant with result ${secondHealth} - ${firstHealth} in ${roundCounter} rounds`);
    } else if (firstHealth > secondHealth) {
        console.log(`First Giant defeated Second Giant with result ${firstHealth} - ${secondHealth} in ${roundCounter} rounds`);
    } else {
        console.log(`Its a draw ${firstHealth} - ${secondHealth}`)
    }

    function calculateHp(arr, cutSize) {
        let healthArr = [];

        while (arr.length > 0) {
            let curHP = arr.splice(0, cutSize);
            curHP = curHP.reduce((a, b) => a * b, curHP.shift());
            healthArr.push(curHP);
        }
        return healthArr.reduce((a, b) => a + b, 0);
    }
}