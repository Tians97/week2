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



// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1, 2, 3, 4, 5]
// Expected Output: 2, 4

function findSecondLowestAndHighest(arr){
    return [arr.at(1), arr.at(-2)]
}

console.log(findSecondLowestAndHighest([1, 2, 3, 4, 5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself(also known as its aliquot sum).Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors(including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 +
// 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function is_perfect(number) {
    let temp = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("It is a perfect number.");
    }
    else {
        console.log("It is not a perfect number.");
    }
}
is_perfect(28);


// 13. Write a JavaScript function to compute the factors of a positive integer. 

function findFactors(num){
    let res = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            res.push(i)
        }
    }
    return res
}

console.log(findFactors(10))


// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount.and 25, 10, 5, 2, 1 are coins.
// Output: 25, 10, 10, 1
function convertCoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            let amountLeft = amount - coins[0];
            return [coins[0]].concat(convertCoins(amountLeft, coins));
        } else {
            coins.shift();
            return convertCoins(amount, coins);
        }
    }
}

console.log(convertCoins(46, [25, 10, 5, 2, 1]));
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases.Accept b and n from the user and display the result. 
function exp(b, n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res = b * res;
    }
    return res;
}
console.log(exp(2, 3));

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChars(str){
    let res = ""
    for(let i = 0; i < str.length; i++){
        if(res.indexOf(str[i])==-1){
            res += str[i]
        }
    }
    return res
}

console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.
function countLetter(str){
    let count = {}
    str.split("").forEach(char => {
        if(count[char]){
            count[char] += 1
        } else {
            count[char] = 1
        }
    })
    return count
}

console.log(countLetter("strings"))

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
function binarySearch(arr,num){
    left = 0
    right = arr.length-1

    while(left <= right){
        mid = Math.floor((left+right)/2)
        if(arr[mid]===num){
            return mid
        } else if(arr[mid]>num){
            right = mid-1
        } else {
            left = mid + 1
        }
    }
    return -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12],9))

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerNumbers(arr, num){
    return arr.filter(number => number > num)
}

console.log(largerNumbers([-1, 0, 3, 5, 9, 12],2))
// 20. Write a JavaScript function that generates a string id(specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomChars(l){
    let str = ""
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(let i = 0; i < l; i++){
        let randomChar = charList[Math.floor(Math.random()*charList.length)]
        str += randomChar
    }
    return str
}

console.log(randomChars(5))


// 21. Write a JavaScript function to get all possible subset with a fixed length(for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o'
function countChar(str, char){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i]==char){
            count += 1
        }
    }
    return count
}

console.log(countChar('microsoft.com', 'o'))


// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e'

function find_FirstNotRepeatedChar(str) {
    let chars = str.split("")
    for (let i = 0; i < chars.length; i++){
        let count = 0
        for (let j = 0; j < chars.length; j++){
            if(chars[i] === chars[j]){
                count += 1
            }
        }
        if(count<2){
            return chars[i]
        }
    }
}
console.log(find_FirstNotRepeatedChar('abacddbec'));


// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length-1-i; j++){
            if(arr[j+1]>arr[j]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))


// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"
function Longest_Country_Name(arr){
    let longest = ""
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    }
    return longest
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]))
// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 

function longestSubstring(str){
    let res = ""
    let left = 0
    let sub = ""
    for(let right = 0; right<str.length; right++){
        while(sub.indexOf(str[right]) !== -1){
            sub = sub.substring(1)
        }
        sub += str[right]
        if(sub.length > res.length){
            res = sub
        }
    }
    return res
}

console.log(longestSubstring("appleeadwe"))



// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum - length contiguous substring of a
// given string that is also a palindrome.For example, the longest palindromic substring of
// "bananas" is "anana".The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings(that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.

function longestPalindrome(str){
    let res = ""
    let len = 0
    for(let i = 0; i < str.length; i++){
        let l = i
        let r = i
        while(l >= 0 && r <= str.length && str[l] == str[r]){
            if (r-l+1 >len){
                len = r-l+1
                res = str.substring(l,r+1)
            }
            l -= 1
            r += 1
        }
        l = i
        r = i+1
        while (l >= 0 && r <= str.length && str[l] == str[r]) {
            if (r - l + 1 > len) {
                len = r - l + 1
                res = str.substring(l, r + 1)
            }
            l -= 1
            r += 1
        }
    }
    return res
}

console.log(longestPalindrome("bananas"))



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function callback(value,cb){
    return cb(value)
}

console.log(callback("bananas",longestPalindrome))


// 29. Write a JavaScript function to get the function name.

function getFunctionName(f){
    return f.name
}

console.log(getFunctionName(longestPalindrome))


