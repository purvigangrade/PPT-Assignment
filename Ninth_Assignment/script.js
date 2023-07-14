// **Question 1**

// Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

// An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

// **Example 1:**
// Input: n = 1 

// Output: true

// **Example 2:**
// Input: n = 16 

// Output: true

// **Example 3:**
// Input: n = 3 

// Output: false

//**************************************ANSWER - 1********************************************************* */
function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n % 2 === 0) {
      n /= 2;
    }
  
    return n === 1;
  }
  
  // Test cases
  console.log(isPowerOfTwo(1)); // Output: true
  console.log(isPowerOfTwo(16)); // Output: true
  console.log(isPowerOfTwo(3)); // Output: false
  
//********************************************************************************************************* */

// **Question 2**

// Given a number n, find the sum of the first natural numbers.

// **Example 1:**

// Input: n = 3 

// Output: 6

// **Example 2:**

// Input  : 5 

// Output : 15

//**************************************ANSWER - 2********************************************************* */
function sumOfFirstNNumbers(n) {
    return (n * (n + 1)) / 2;
  }
  
  // Test cases
  console.log(sumOfFirstNNumbers(3)); // Output: 6
  console.log(sumOfFirstNNumbers(5)); // Output: 15
  
//********************************************************************************************************* */

// **Question 3**

// ****Given a positive integer, N. Find the factorial of N. 

// **Example 1:**

// Input: N = 5 

// Output: 120

// **Example 2:**

// Input: N = 4

// Output: 24

//**************************************ANSWER - 3********************************************************* */
function factorial(N) {
    if (N === 0 || N === 1) {
      return 1;
    } else {
      return N * factorial(N - 1);
    }
  }
  
  // Test cases
  console.log(factorial(5)); // Output: 120
  console.log(factorial(4)); // Output: 24
  
//********************************************************************************************************* */

// **Question 4**

// Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

// **Example 1 :** 

// Input: N = 5, P = 2

// Output: 25

// **Example 2 :**
// Input: N = 2, P = 5

// Output: 32

//**************************************ANSWER - 4********************************************************* */
function power(N, P) {
    let result = 1;
    for (let i = 1; i <= P; i++) {
      result *= N;
    }
    return result;
  }
  
  // Test cases
  console.log(power(5, 2)); // Output: 25
  console.log(power(2, 5)); // Output: 32
  
//********************************************************************************************************* */

// **Question 5**

// Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

// **Example 1:**

// Input: arr = {1, 4, 3, -5, -4, 8, 6};
// Output: 8

// **Example 2:**

// Input: arr = {1, 4, 45, 6, 10, -8};
// Output: 45

//**************************************ANSWER - 5********************************************************* */
function findMax(arr, index) {
    if (index === arr.length - 1) {
      return arr[index];
    }
    
    const maxRest = findMax(arr, index + 1);
    
    return Math.max(arr[index], maxRest);
  }
  
  // Test cases
  const arr1 = [1, 4, 3, -5, -4, 8, 6];
  console.log(findMax(arr1, 0)); // Output: 8
  
  const arr2 = [1, 4, 45, 6, 10, -8];
  console.log(findMax(arr2, 0)); // Output: 45
  
//********************************************************************************************************* */

// **Question 6**

// Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.

// **Example 1:**

// Input : a = 2 d = 1 N = 5
// Output : 6
// The 5th term of the series is : 6

// **Example 2:**

// Input : a = 5 d = 2 N = 10
// Output : 23
// The 10th term of the series is : 23

//**************************************ANSWER - 6********************************************************* */

function findNthTerm(a, d, N) {
    return a + (N - 1) * d;
  }
  
  // Test cases
  console.log(findNthTerm(2, 1, 5)); // Output: 6
  console.log(findNthTerm(5, 2, 10)); // Output: 23
  
//********************************************************************************************************* */

// **Question 7**

// Given a string S, the task is to write a program to print all permutations of a given string.

// **Example 1:**

// ***Input:***

// *S = “ABC”*

// ***Output:***

// *“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”*

// **Example 2:**

// ***Input:***

// *S = “XY”*

// ***Output:***

// *“XY”, “YX”*

//**************************************ANSWER - 7********************************************************* */

function permuteString(str) {
    const result = [];
    permuteHelper(str, 0, str.length - 1, result);
    return result;
  }
  
  function permuteHelper(str, left, right, result) {
    if (left === right) {
      result.push(str);
      return;
    }
  
    for (let i = left; i <= right; i++) {
      str = swapCharacters(str, left, i);
      permuteHelper(str, left + 1, right, result);
      str = swapCharacters(str, left, i); // backtrack
    }
  }
  
  function swapCharacters(str, i, j) {
    const charArray = str.split("");
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join("");
  }
  
  // Test case
  console.log(permuteString("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
  console.log(permuteString("XY")); // Output: ["XY", "YX"]
  
//********************************************************************************************************* */

// **Question 8**

// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

//**************************************ANSWER - 8********************************************************* */
function findProduct(arr) {
    let product = 1;
  
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  // Test cases
  console.log(findProduct([1, 2, 3, 4, 5])); // Output: 120
  console.log(findProduct([1, 6, 3])); // Output: 18
  
//********************************************************************************************************* */
