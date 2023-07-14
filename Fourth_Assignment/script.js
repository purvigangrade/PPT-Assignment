// 1. Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// **Example 1:**

// Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]

// Output: [1,5]

// **Explanation:** Only 1 and 5 appeared in the three arrays.

//***************************ANSWER -1************************************************************** */
function arraysIntersection(arr1, arr2, arr3) {
    const result = [];
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Test case
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  const intersection = arraysIntersection(arr1, arr2, arr3);
  console.log(intersection); // Output: [1, 5]  
//************************************************************************************************** */
// **Question 2**

// Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// **Note** that the integers in the lists may be returned in **any** order.

// **Example 1:**

// **Input:** nums1 = [1,2,3], nums2 = [2,4,6]

// **Output:** [[1,3],[4,6]]
//***************************ANSWER -2************************************************************** */
function distinctNumbers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const notInNums2 = [];
    const notInNums1 = [];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        notInNums2.push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        notInNums1.push(num);
      }
    }
  
    return [notInNums2, notInNums1];
  }
  
  // Test case
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const answer = distinctNumbers(nums1, nums2);
  console.log(answer); // Output: [[1, 3], [4, 6]]  
//************************************************************************************************** */
// **Question 3**
// Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// **Example 1:**

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]

// Output: [[1,4,7],[2,5,8],[3,6,9]]

//***************************ANSWER -3************************************************************** */
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transposed = [];
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(matrix[i][j]);
      }
      transposed.push(row);
    }
  
    return transposed;
  }
  
  // Test case
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const transposedMatrix = transpose(matrix);
  console.log(transposedMatrix); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]  
//************************************************************************************************** */
//  **Question 4**
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

// **Example 1:**

// Input: nums = [1,4,3,2]

// Output: 4

// **Explanation:** All possible pairings (ignoring the ordering of elements) are:

// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3

// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3

// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

// So the maximum possible sum is 4.

//************************************ANSWER - 4************************************************************** */
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
  
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sum += nums[i];
    }
  
    return sum;
  }
  
  // Test case
  const nums = [1, 4, 3, 2];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 4  
//************************************************************************************************** */
// **Question 5**
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of **complete rows** of the staircase you will build*.

// **Example 1:**
// **Input:** n = 5

// **Output:** 2

// **Explanation:** Because the 3rd row is incomplete, we return 2.

//*****************************************ANSWER - 5********************************************************* */

function arrangeCoins(n) {
    let completeRows = 0;
    let row = 1;
  
    while (n >= row) {
      n -= row;
      row++;
      completeRows++;
    }
  
    return completeRows;
  }
  
  // Test case
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); // Output: 2  
//************************************************************************************************** */
//  **Question 6**
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// **Example 1:**

// Input: nums = [-4,-1,0,3,10]

// Output: [0,1,9,16,100]

// **Explanation:** After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

//**************************************ANSWER-6************************************************************ */
function sortedSquares(nums) {
    const squares = nums.map(num => num * num);
    squares.sort((a, b) => a - b);
    return squares;
  }
  
  // Test case
  const nums = [-4, -1, 0, 3, 10];
  const sortedSquaresArray = sortedSquares(nums);
  console.log(sortedSquaresArray); // Output: [0, 1, 9, 16, 100]
  
//************************************************************************************************** */
//  **Question 7**
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return *the number of maximum integers in the matrix after performing all the operations*

// **Example 1:**
// **Input:** m = 3, n = 3, ops = [[2,2],[3,3]]

// **Output:** 4

// **Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

//**************************************ANSWER-7************************************************************ */
function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [row, col] of ops) {
      minRow = Math.min(minRow, row);
      minCol = Math.min(minCol, col);
    }
  
    return minRow * minCol;
  }
  
  // Test case
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = maxCount(m, n, ops);
  console.log(maxIntegers); // Output: 4
  
//******************************************************************************************************* */
//  **Question 8**

// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// *Return the array in the form* [x1,y1,x2,y2,...,xn,yn].

// **Example 1:**

// **Input:** nums = [2,5,1,3,4,7], n = 3

// **Output:** [2,3,5,4,1,7]

// **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
//***********************************ANSWER -8 ********************************************************** */
function shuffle(nums, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
    return result;
  }
  
  // Test case
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const shuffledArray = shuffle(nums, n);
  console.log(shuffledArray); // Output: [2, 3, 5, 4, 1, 7]  
//******************************************************************************************************* */
