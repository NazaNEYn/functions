'use strict';
// *************



// function declaration

function calcAge1(birthYear) {
    const age = 2022 - birthYear
    return age
}

console.log(calcAge1(1993))

// function expression

const calcAge2 = function(birthYear) {
    const age = 2022 - birthYear
    return age
}

console.log(calcAge1(1993))


// arrow unction

const calcAge3 = birthYear => 2022 - birthYear
console.log(calcAge3(1993))






// *************
//  Retirement

// const age = 2022 - birthYear
// const yearsLeft = 65 - age


// function declartion
// function yearsUntilRetirement(birthYear) {
//     const age = 2022 - birthYear
//     const yearsLeft = 65 - age
//     return yearsLeft
// }
// console.log(yearsUntilRetirement(1993))


// function expression
// const yearsUntilRetirement = function(birthYear) {
//     const age = 2022 - birthYear
//     const yearsLeft = 65 - age
//     return yearsLeft
// }
// console.log(yearsUntilRetirement(1993))


// arrow function

// const yearsUntilRetirement = (birthYear, name) => {
//     const age = 2022 - birthYear
//     const yearsLeft = 65 - age
//     return `${yearsLeft} years left untilf retirement for ${name}`
// }

// console.log(yearsUntilRetirement(1993, "Nazanin AShrafi"))