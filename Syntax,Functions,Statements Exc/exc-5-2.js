function solve(arr){
let speed = arr[0];
let area = arr[1];
let message = '';
let limit = 0;

switch(area){
    case "city": {
        limit = 50;
        break;
    }
    case "residential": {
        limit = 20;
        break;
    }
    case "interstate": {
        limit = 90;
        break;
    }
    case "motorway": {
        limit = 130;
        break;
    }
}

if(speed > limit){
    let difference = speed - limit;
    if(difference <= 20){
        message = 'speeding';
    } else if (difference <= 40){
        message = 'excessive speeding';
    } else {
        message = 'reckless driving';
    }
}
console.log(message);
}


solve([21, 'residental']);

