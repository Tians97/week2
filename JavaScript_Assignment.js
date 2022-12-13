// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223


function reverseNumber(num){
    let str = num.toString()
    let new_str = str.split("").reverse().join("")
    return Number(new_str)
}

console.log(reverseNumber(32243))

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run.

function checkPalindrome(str){
    let str1 = str.toLowerCase()
    return str === str.split("").reverse().join("")
}

console.log(checkPalindrome("Awa"))
console.log(checkPalindrome("Apple"))

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g 

function allCombinations(str){
    let res = []
    for(let i = 0; i < str.length; i++){
        for(let j = i+1; j < str.length+1; j++){
            res.push(str.slice(i,j))
        }
    }
    return res
}
console.log(allCombinations("dog"))

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function sortAlphabetical(str){
    return str.split("").sort().join("")
}
console.log(sortAlphabetical("webmaster"))

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox'

function capitalizedWord(str){
    return str.split(" ").map(word => {
        return word[0].toUpperCase() + word.substring(1)
    }).join(" ")
}

console.log(capitalizedWord('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longestWord(str){
    let words = str.split(" ")
    let longest = words[0]
    words.forEach(word => {
        if(word.length > longest.length){
            longest = word
        }
    })
    return longest
}

console.log(longestWord('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string.
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5
function countVowels(str){
    let vowels = "aeiou"
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count += 1
        }
    }
    return count
}

console.log(countVowels("The quick brown fox"))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not.
// Note: A prime number(or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
function isPrime(num) {
    if(num < 2) {
        return false;
    }
    else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(isPrime(3))

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function checkType(arg){
    return typeof arg
}

console.log(checkType("number"))
console.log(checkType(true))




// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
function identityMatrix(n){
    let matrix = []
    for(let i = 0; i < n; i++){
        let row = []
        for(let j = 0; j < n; j++){
            if(j === i){
                row.push(1)
            } else {
                row.push(0)
            }
        }
        matrix.push(row)
    }
    return matrix
    
}

console.log(identityMatrix(3))
