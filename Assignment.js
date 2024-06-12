// Reverse a String: Write a function that reverses a given string.

function reverseString(str);
const splitString = str.split("");
const reversedString = splitString.reverse();
const joinedString = reversedString.join("");
console.log(reverseString("Olawale"));







// Count Characters: Create a function that counts the number of characters in a string.

// Count from 0 to 10 

var i = 0
while (i<=10) {
i = i+1
}
console.log(i)








// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetters(sentence) {
return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}







//   Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

// Max Value:

let numbers = [0,1,2,3,4,5,6,7,8,9]

function findMax(numbers) {
return Math.max(...numbers);
}
console.log(findMax)


// Min Value:

function findMin(numbers) {
  return Math.min(...numbers);
}
console.log(findMin)






// Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArray(arr, condition) {
    return arr.filter(condition);
  }









//   Factorial: Write a function to calculate the factorial of a given number.

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  





//   Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
if (n <= 1) {
return false;
}
for (let i = 2; i * i <= n; i++) {
if (n % i === 0) {
return false;
}
}
return true;
}






//   Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )


function generateFibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
      const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextTerm);
    }
    return sequence.slice(0, n);
  }