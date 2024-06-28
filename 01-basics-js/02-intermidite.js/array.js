// array in js:-

// let marks=[67,98.67,95,56]

// console.log(marks);
// // console.log(typeof(marks));
// // console.log(marks.length);

// console.log(marks[0]);//67
// console.log(marks[3]);//98

// marks[0]=66;
// console.log(marks);

// let heros=["captain america","ironman","spiderman","Deadpool"];
// {
//    for(i=0; i<heros.length; i++)
// console.log(heros[i]);
// }


// for(let hero of heros){
//     console.log(hero);
// }

// let cities=["delhi","mumbai","puri","bhubaneswar"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }

//pratice question:
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]/arr.length;
    }
    return sum;
}

let marks=[85,97,44,37,76,60];
console.log(sumArray(marks));

//2.
// Given array of prices
let prices = [250, 645, 300, 900, 50];

// Apply 10% discount and update the array
for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * 0.9; // Calculate the discounted price and update the array
}

// Display the updated array with discounted prices
console.log("Final prices after 10% discount:","\n",prices);


//let multiplier = 1 - (10 / 100); // This gives you 0.9
// console.log(multiplier); // Output: 0.9

