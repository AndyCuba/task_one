
//First variant


/*for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}*/


//Second


/*for (i = 1; i < 101; i++) {
    let fizzBuzz = (i % 3 === 0 && i % 5 === 0) ? console.log('FizzBuzz'):
    (i % 3 === 0) ? console.log('Fizz'):
    (i % 5 === 0) ? console.log('Buzz'):
    console.log(i);
}*/


//Third task


// let sentence = "Лето удалось очень жарким, было много ягод и фруктов, лучшим местом для отдыха была речка";

// // console.log(sentence.replace(",", "."))
// // sentence.split(',')
// // console.log(sentence.indexOf(sentence))

// for (let char of sentence) {
//     if (char.includes (",")) {
//         console.log(sentence.replace(",", "."))
//     }
// }

// console.log(sentence);


//Fourth task


const sentence = "Антон, Дима и Женя пришли на День рождения сразу, а Миша пришел позже";
let anton = sentence.substring(0,5);
let dima = sentence.substring(7,11);
let jenya = sentence.substring(14,18);
let michael = sentence.substring(52,56);

let newSentence = "На день рождения пришли: " + anton + ", " + dima + ", " + jenya + ", " + michael;
console.log(newSentence);


//Fifth


// let word = prompt("Enter your word to find is it palindrome?","racecar");
function isPalindrom(word) {
    let newWord = word.split("").reverse().join("");
    console.log(newWord)
}