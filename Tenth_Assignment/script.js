//  **Question 1**

// Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.

// An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.

// **Example 1:**
// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

//************************************ANSWER - 1********************************************************** */
function isPowerOfThree(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n % 3 === 0) {
      n /= 3;
    }
  
    return n === 1;
  }
  
  console.log(isPowerOfThree(27)); // Output: true
  console.log(isPowerOfThree(0)); // Output: false
  console.log(isPowerOfThree(-1)); // Output: false
  
//******************************************************************************************************** */

// < **Question 2**

// You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

// - Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
// - Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
// - Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

// Given the integer `n`, return *the last number that remains in* `arr`.

// **Example 1:**

// Input: n = 9
// Output: 6
// Explanation:
// arr = [1, 2,3, 4,5, 6,7, 8,9]
// arr = [2,4, 6,8]
// arr = [2, 6]
// arr = [6]

// Example 2:
// Input: n = 1
// Output: 1

//************************************ANSWER - 2********************************************************** */
function lastRemaining(n) {
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    let leftToRight = true;
  
    while (arr.length > 1) {
      if (leftToRight) {
        arr = arr.filter((_, index) => index % 2 !== 0); // Remove alternate numbers from left to right
      } else {
        arr = arr.filter((_, index) => index % 2 === 0).reverse(); // Remove alternate numbers from right to left
      }
  
      leftToRight = !leftToRight;
    }
  
    return arr[0];
  }
  
  console.log(lastRemaining(9)); // Output: 6
  console.log(lastRemaining(1)); // Output: 1
  
//******************************************************************************************************** */

// **Question 3**

// ****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

//************************************ANSWER - 3********************************************************** */

function printSubsets(set, subset = '', index = 0) {
    // Base case: If index is equal to the length of set, print the current subset
    if (index === set.length) {
      console.log(subset);
      return;
    }
  
    // Recursive case 1: Include the current character in the subset
    printSubsets(set, subset + set[index], index + 1);
  
    // Recursive case 2: Exclude the current character from the subset
    printSubsets(set, subset, index + 1);
  }
  
  printSubsets("abc");
  printSubsets("abcd");
  
//******************************************************************************************************** */

// **Question 4**

// Given a string calculate length of the string using recursion.

// **Examples:**
// Input : str = "abcd"
// Output :4

// Input : str = "GEEKSFORGEEKS"
// Output :13

//************************************ANSWER - 4********************************************************** */
function calculateLength(str) {
    // Base case: if the string is empty, return 0
    if (str === '') {
      return 0;
    }
  
    // Recursive case: return 1 plus the length of the string without the first character
    return 1 + calculateLength(str.slice(1));
  }
  
  console.log(calculateLength("abcd")); // Output: 4
  console.log(calculateLength("GEEKSFORGEEKS")); // Output: 13
  
//******************************************************************************************************** */

// **Question 5**

// We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.

// **Examples :**
// Input  : S = "abcab"
// Output : 7
// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

// Input  : S = "aba"
// Output : 4
// The substrings are a, b, a and aba

//************************************ANSWER - 5********************************************************** */
function countContiguousSubstrings(S) {
    let count = 0;
  
    // Iterate through each character in the string
    for (let i = 0; i < S.length; i++) {
      let charCount = 0;
      
      // Count the number of contiguous substrings ending at the current character
      for (let j = i; j < S.length; j++) {
        if (S[i] === S[j]) {
          charCount++;
        }
        count += charCount;
      }
    }
  
    return count;
  }
  
  console.log(countContiguousSubstrings("abcab")); // Output: 7
  console.log(countContiguousSubstrings("aba")); // Output: 4
  
//******************************************************************************************************** */

// 💡 **Question 6**

// The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

// **Example 1:**
// Input:
// N = 2
// Output:
// move disk 1 from rod 1 to rod 2
// move disk 2 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 3
// 3
// Explanation:For N=2 , steps will be
// as follows in the example and total
// 3 steps will be taken.

// Example 2:
// Input:
// N = 3
// Output:
// move disk 1 from rod 1 to rod 3
// move disk 2 from rod 1 to rod 2
// move disk 1 from rod 3 to rod 2
// move disk 3 from rod 1 to rod 3
// move disk 1 from rod 2 to rod 1
// move disk 2 from rod 2 to rod 3
// move disk 1 from rod 1 to rod 3
// 7
// Explanation:For N=3 , steps will be
// as follows in the example and total
// 7 steps will be taken.

//************************************ANSWER - 6********************************************************** */
function towerOfHanoi(N, fromRod, toRod, auxRod) {
    if (N === 1) {
      console.log(`move disk 1 from rod ${fromRod} to rod ${toRod}`);
      return 1;
    }
  
    let moves = 0;
  
    moves += towerOfHanoi(N - 1, fromRod, auxRod, toRod);
  
    console.log(`move disk ${N} from rod ${fromRod} to rod ${toRod}`);
    moves++;
  
    moves += towerOfHanoi(N - 1, auxRod, toRod, fromRod);
  
    return moves;
  }
  
  function solveTowerOfHanoi(N) {
    console.log(`Total moves: ${towerOfHanoi(N, 1, 3, 2)}`);
  }
  
  solveTowerOfHanoi(2);
  solveTowerOfHanoi(3);
  
//******************************************************************************************************** */


// 💡 **Question 7**

// Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.

// **Examples:**

// > Input: str = “cd”
// > 
// > 
// > **Output:** cd dc
// > 
// > **Input:** str = “abb”
// > 
// > **Output:** abb abb bab bba bab bba


//************************************ANSWER - 7********************************************************** */
function swap(str, i, j) {
    const charArray = str.split('');
    const temp = charArray[i];
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return charArray.join('');
  }
  
  function permute(str, l, r, result) {
    if (l === r) {
      result.push(str);
      return;
    }
  
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l + 1, r, result);
      str = swap(str, l, i); // backtrack to restore the original string
    }
  }
  
  function printPermutations(str) {
    const result = [];
    permute(str, 0, str.length - 1, result);
    result.forEach(perm => console.log(perm));
  }
  
  printPermutations("cd");
  printPermutations("abb");
  
//******************************************************************************************************** */

// **Question 8**

// Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.

// **Examples :**
// Input : abc de
// Output : 3
// There are three consonants b, c and d.

// Input : geeksforgeeks portal
// Output : 12

//************************************ANSWER - 8********************************************************** */
function countConsonants(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
      if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  const str1 = 'abc de';
  console.log(countConsonants(str1)); // Output: 3
  
  const str2 = 'geeksforgeeks portal';
  console.log(countConsonants(str2)); // Output: 12
  
//******************************************************************************************************** */

