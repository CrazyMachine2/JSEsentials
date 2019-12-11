function solve(arr){
    let speed = arr[0];
    let area = arr[1];
    let message = '';
    let limit;

    function getMessage(limit,speed){
        let difference = speed - limit;
        if(difference <= 20){
            return 'speeding';
        } else if (difference <= 40){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }

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
        message = getMessage(limit,speed);
    }
    console.log(message);
}

solve([40, 'city']);
solve([21, 'residental']);
solve([120, 'intestate']);
solve([200, 'motorway']);