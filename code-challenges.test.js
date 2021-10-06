// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisible by three or not.
//run the yarn jest the very first time to make sure my test is red and failing.
//need a test that says what it should return and expects a num to equal the statement we are looking for.

describe("divider",() => {

    it("returns a string that says divisible by 3 or not divisible by 3",() => {
        expect(divider(num1)).toEqual(`${num1} is divisible by three`),
        expect(divider(num2)).toEqual(`${num2} is divisible by three`),
        expect(divider(num3)).toEqual(`${num3} is not divisible by three`)
    })
})

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"


// b) Create the function that makes the test pass.
// create function using if to strictly equal 3 with modulo to 0. Also create else if for when it does not equal 0.

function divider(num) {
    if(num % 3 === 0){
        return `${num} is divisible by three`
    } else if(num % 3 !== 0) {
         return `${num} is not divisible by three`
         }   
    }


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//need a test that will have all caps for these words in expected.

describe ("caps", () => {
        it("returns the string with the first letter a capital letter", () => {
            expect(caps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
            expect(caps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
        })
})

// b) Create the function that makes the test pass.

//need a function that will execute touppercase on the value plugged in the function.
//misread the directions and was trying to capitalize the whole words when it's just the first letter that needs caps
//need to seperate all the words in the array and then focus on just the first letter and make that uppercase
//need an array to put the words in after

// function caps(array) {
//     for(let i=0; i<array.length; i++){
//     return array = array.map(function(caps) { 
//         return caps.toUpperCase(); 
//      })
//    }
// }

function caps(array) {
    let empty = [];
    for(let words of array){
        words = words.charAt(0).toUpperCase() + words.substr(1);
        empty.push(words)
    }
    return empty
}
caps(randomNouns1)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// need to create test that will expect "1,0,2" as outputs for this challenge
//run test and make sure it is red

describe ('vowels', () => {
    it("returns the index of the first vowel", () => {
        expect(vowels(vowelTester1)).toEqual(1)
        expect(vowels(vowelTester2)).toEqual(0)
        expect(vowels(vowelTester3)).toEqual(2)
    })
})

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
//need a function that makes it equal to vowels and then returns at what index that first vowel is at

// if (words.match(/[aeiou]/gi)){
//     return words === null ? 0 : words.length
//   }

function vowels(words){
    let vowelList = 'aeiouAEIOU';
    let counter = 0;
    let splitUp = words.split('')
    for(let i=0; i<words.length; i++) {
    if(vowelList.indexOf(words[i]) !== -1) {
        console.log(words[i])
        counter++
    }
  }
 return counter;
    // return words;
 }
 vowels(vowelTester1)

// function getVowels(str) {
//     var m = str.match(/[aeiou]/gi);
//     return m === null ? 0 : m.length;
//   
  

