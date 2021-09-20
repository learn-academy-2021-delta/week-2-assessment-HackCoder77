// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
//console.log(cohort.split(""))

// a) Your answer:
//it will split every letter and space into its own string
// b) Verify and explain: it was correct because that is how the split function works


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: it will log 'Hello, LEARN Student'
// b) Verify and explain: hahahahah! You guys got me! good one. it returns undefined because it doesn't return 


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
//console.log(multBy2)

// a) Your answer: it will log [8, 10, 12, 14, 16]
// b) Verify and explain: it logged [8, 10, 12, 14, 16] because the function multiplies everything by 2


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
//console.log(oddsOnly)

// a) Your answer: This function will return all the even values in the array
// b) Verify and explain: To get all the odd values it needs to be value % 2 === 1.


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: i think this will log undefined because there is no kind of return or log statement.
// b) Verify and explain: it returned { student: 'George', cohort: 'Delta', year: 2021 }. Because of constructor statement it returns the object and its contents
