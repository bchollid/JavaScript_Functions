// console.log("Hello World!\n==========\n");

// // Exercise 1 Section
// console.log("EXERCISE 1:\n==========\n");
// let inputNumber = prompt("Enter a number")

// function printOdds(count){
//     if(count == 0){
//         count = 1;
//     }
//     if(count < 0){
//         count *= -1;
//         for(let i = 0; i<=count; i++){
//             if(i % 2 == 1){
//            console.log(`-${i}`);
//            }
//         }
//     }
//     else{
//         for(let i = 0; i<=count; i++){
//             if(i % 2 == 1){
//             console.log(i);
//             }
//         }
//     }
// }
//  printOdds(inputNumber);

// // Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");
// let usernamePrompt = prompt("What is your name?")
// let agePrompt = prompt("What is your age?");
// function checkAge(userName = "No name given.", age = 0){
// let aboveSixteen = `Congrats ${userName}! You can drive.`
// let belowSixteen = `Sorry ${userName}! You can't drive until you're 16.`
// if(age >= 16){
//     return console.log(aboveSixteen);
// }
// else if(age == 0){
//     return console.log(`${userName}. No age given. Please enter a valid name and age.`)
// }
// else{
//     return console.log(belowSixteen)
// }
// }

// checkAge(usernamePrompt, agePrompt);

// // Exercise 3 Section
// console.log("EXERCISE 3:\n==========\n");
// let userXCoord = prompt("Enter an X Coordinate");
// let userYCoord = prompt("Enter a Y Coordinate");
// let origin = "It's at the origin."
// let quadrant1 = "It's in quadrant 1";
// let quadrant2 = "It's in quadrant 2";
// let quadrant3 = "It's in quadrant 3";
// let quadrant4 = "It's in quadrant 4";
// let xAxis = "It's on the X Axis."
// let yAxis = "It's on the Y Axis."

// function whichQuadrant(xCoord, yCoord){
// console.log(`You entered ${userXCoord} and ${userYCoord}`)
// if(xCoord == 0 && yCoord == 0){
//     return console.log(origin);
// }
// else if (xCoord > 0 && yCoord > 0){
//     return console.log(quadrant1);
// }
// else if (xCoord < 0 && yCoord > 0){
//     return console.log(quadrant2);
// }
// else if (xCoord < 0 && yCoord < 0){
//     return console.log(quadrant3);
// }
// else if (xCoord > 0 && yCoord < 0){
//     return console.log(quadrant4);
// }
// else if (xCoord == 0 && yCoord != 0){
//     return console.log(yAxis);
// }
// else if (xCoord != 0 && yCoord == 0){
//     return console.log(xAxis);
// }
// }

// whichQuadrant(userXCoord, userYCoord);

// Exercise 4 Section
// console.log("EXERCISE 4:\n==========\n");

// function isRealTriangle(side1, side2, side3){
//     console.log(side1, side2, side3);
//     if(side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// function whichTriangle(side1, side2, side3){
//     let real = isRealTriangle(side1, side2, side3)
//     if(real){
//         if(side1 == side2 && side2 == side3){
//             return console.log("It's an equilateral triangle.");
//         }
//         else if(side1 == side2 || side2 == side3 || side1 == side3){
//             return console.log("It's an isosceles triangle.");
//         }
//         else{
//             return console.log("It's a scalene triangle.")
//         }  
//     }
//     else{
//         return console.log("Not a valid triangle.")
//     }

// }

// whichTriangle(1, 2, 2);
// whichTriangle(1, 1, 2);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let planInput = prompt("What is your data limit on your cell plan?");
let dayInput = prompt("How many days in this 30 day period have you used your cell plan?");
let usageInput = prompt("How much data have you used so far this month?")


function dataPlan(planLimit, day, usage){
    console.log(`Total data available: ${planLimit}, Current day: ${day}, Current data used: ${usage}`)
    if((planLimit / 30) < (usage / day)){
    console.log(
    `You've used ${day} days of your data plan. You have ${30 - day} remaining.
Your average daily use is: ${usage / day} GB/day.
You are EXEEDING your average daily use of (${planLimit / 30} GB/day)
If you continue this high usage you'll exceed your data limit by ${(planLimit - (usage / day * 30))*-1} GB.
To stay below your data plan limit, use no more than ${(planLimit - usage) / 30} GB per day.
     `)
    }
    else{
    console.log(
    `You've used ${day} days of your data plan. You have ${30 - day} remaining.
Your average daily use is: ${usage / day}. GB/day.
You are on par or below with your average daily use of (${planLimit / 30} GB/day).
Feel free to use ${(planLimit - usage) / 30} GB more data per day.
     `)
    }
}

dataPlan(planInput, dayInput, usageInput);