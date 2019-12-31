function solve (course1, course2, course3, status){
    let courses = {
        "fundamentals": 170,
        "advanced": 180,
        "applications": 190,
    }

    if(course1 && course2) {
        courses["advanced"] -= courses["advanced"] * 0.1;
    }

    if(status === "online"){
        for(let key in courses){
            courses[key] -= courses[key] * 0.06;
        }
    }

    let totalPrice = 0;
    totalPrice = totalPrice + (course1 ? courses["fundamentals"] : 0);
    totalPrice = totalPrice + (course2 ? courses["advanced"] : 0);
    totalPrice = totalPrice + (course3 ? courses["applications"] : 0);

    if(course1 && course2 && course3){
        totalPrice -= totalPrice * 0.06;
    }

    console.log(Math.round(totalPrice));
}

solve(true, true, false, "onsite");