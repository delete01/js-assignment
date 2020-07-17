//script to check if a number is even or odd:

let num = prompt('Enter a number to check if it is even or odd :');

//checking number is even or odd :

if (num % 2 == 0) {
    let result = 'The number entered is ' + num + ' and Number is even.'
    console.log(result)
}

else if (num % 2 != 0) {
    let result = 'The number entered is ' + num + ' and Number is odd.'
    console.log(result)
}

else {
    let result = 'The number entered is ' + num + ' and Number is 0 of less than 0.'
    console.log(result)
}
