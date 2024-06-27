// 1. Print all even number from 1 to 0

// for(let num =0; num<=100; num++){
//     if(num % 2 ==0){
//         console.log("num =", num);
//     }
// }

//create a game you start  with any random number. ask the user to keep guessing the game number until the number found

let gamenum=25;
let usernum=prompt("guess the number :");


while(usernum !==gamenum){
    usernum=prompt("you enterd wrong number, guess again:");

}

console.log("congratulation, you guess the right number");