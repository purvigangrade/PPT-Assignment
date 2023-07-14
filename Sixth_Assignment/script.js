// <aside>
// 💡 **Question 1**

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].

// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

// **Example 1:**

// **Input:** s = "IDID"

// **Output:**

// [0,4,1,3,2]

// </aside>

//*************************************ANSWER - 1********************************************************** */

// function findPermutation(s) {
//     const n = s.length;
//     const perm = new Array(n + 1);
//     let currentNum = 1;
  
//     for (let i = 0; i <= n; i++) {
//       if (i === n || s[i] === 'I') {
//         for (let j = i; j >= 0 && (i === n || s[j] === 'I'); j--) {
//           perm[j] = currentNum++;
//         }
//       }
//     }
  
//     return perm;
//   }
  
//   // Test case
//   const s = "IDID";
//   const perm = findPermutation(s);
//   console.log(perm); // Output: [0, 4, 1, 3, 2]

//******************************************************************************************************* */
//  **Question 2**

// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// **Example 1:**

// **Input:** matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3

// **Output:** true

//********************************ANSWER-2***************************************************************** */
// function searchMatrix(matrix, target) {
//     const m = matrix.length;
//     const n = matrix[0].length;
  
//     let left = 0;
//     let right = m * n - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       const num = matrix[Math.floor(mid / n)][mid % n];
  
//       if (num === target) {
//         return true;
//       } else if (num < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return false;
//   }
  
//   // Test case
//   const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
//   const target = 3;
//   const found = searchMatrix(matrix, target);
//   console.log(found); // Output: true
  
//******************************************************************************************************* */
//  **Question 3**

// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

//     **Example 1:**

// **Input:** arr = [2,1]

// **Output:**

// false
  
//********************************ANSWER - 3*********************************************************************** */
// function validMountainArray(arr) {
//     const n = arr.length;
//     let i = 0;
  
//     // Check for increasing sequence
//     while (i + 1 < n && arr[i] < arr[i + 1]) {
//       i++;
//     }
  
//     // Check if peak is not at the first or last index
//     if (i === 0 || i === n - 1) {
//       return false;
//     }
  
//     // Check for decreasing sequence
//     while (i + 1 < n && arr[i] > arr[i + 1]) {
//       i++;
//     }
  
//     return i === n - 1;
//   }
  
//   // Test case
//   const arr = [2, 1];
//   const isValidMountain = validMountainArray(arr);
//   console.log(isValidMountain); // Output: false
  
//***************************************************************************************************************** */
// <aside>
// 💡 **Question 4**

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// **Example 1:**

// **Input:** nums = [0,1]

// **Output:** 2

// **Explanation:**

// [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

// </aside>

//********************************ANSWER - 4*********************************************************************** */
// function findMaxLength(nums) {
//     const map = new Map();
//     map.set(0, -1);
//     let maxLength = 0;
//     let count = 0;
  
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 0) {
//         count--;
//       } else {
//         count++;
//       }
  
//       if (map.has(count)) {
//         maxLength = Math.max(maxLength, i - map.get(count));
//       } else {
//         map.set(count, i);
//       }
//     }
  
//     return maxLength;
//   }
  
//   // Test case
//   const nums = [0, 1];
//   const maxLength = findMaxLength(nums);
//   console.log(maxLength); // Output: 2
//************************************************************************************************************* */

// <aside>
// 💡 **Question 5**

// The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] * b[i] for all 0 <= i < a.length (**0-indexed**).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return *the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in* nums1.

// **Example 1:**

// **Input:** nums1 = [5,3,4,2], nums2 = [4,2,2,5]

// **Output:** 40

// **Explanation:**

// We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3*4 + 5*2 + 4*2 + 2*5 = 40.

// </aside>

//**************************************ANSWER - 5************************************************************** */
// function minProductSum(nums1, nums2) {
//     nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
//     nums2.sort((a, b) => b - a); // Sort nums2 in descending order
  
//     let minProductSum = 0;
  
//     for (let i = 0; i < nums1.length; i++) {
//       minProductSum += nums1[i] * nums2[i];
//     }
  
//     return minProductSum;
//   }
  
//   // Test case
//   const nums1 = [5, 3, 4, 2];
//   const nums2 = [4, 2, 2, 5];
//   const result = minProductSum(nums1, nums2);
//   console.log(result); // Output: 40
  
//************************************************************************************************************* */
// <aside>
// 💡 **Question 6**

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// **Example 1:**

// **Input:** changed = [1,3,4,2,6,8]

// **Output:** [1,3,4]

// **Explanation:** One possible original array could be [1,3,4]:

// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.

// Other original arrays could be [4,3,1] or [3,1,4].

// </aside>

//**************************************ANSWER - 6************************************************************** */
// function findOriginalArray(changed) {
//     if (changed.length % 2 !== 0) {
//       return [];
//     }
  
//     const original = [];
//     const numCounts = new Map();
  
//     for (let num of changed) {
//       numCounts.set(num, (numCounts.get(num) || 0) + 1);
//     }
  
//     changed.sort((a, b) => a - b);
  
//     for (let num of changed) {
//       if (numCounts.get(num) === 0) {
//         continue;
//       }
  
//       const doubleNum = num * 2;
  
//       if (!numCounts.has(doubleNum) || numCounts.get(doubleNum) === 0) {
//         return [];
//       }
  
//       original.push(num);
//       numCounts.set(num, numCounts.get(num) - 1);
//       numCounts.set(doubleNum, numCounts.get(doubleNum) - 1);
//     }
  
//     return original;
//   }
  
//   // Test case
//   const changed = [1, 3, 4, 2, 6, 8];
//   const result = findOriginalArray(changed);
//   console.log(result); // Output: [1, 3, 4]
  
//************************************************************************************************************* */
//  **Question 7**

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// **Example 1:**
// **Input:** n = 3

// **Output:** [[1,2,3],[8,9,4],[7,6,5]]

//**************************************ANSWER - 7************************************************************** */
// function generateMatrix(n) {
//     const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
//     let num = 1;
//     let topRow = 0;
//     let bottomRow = n - 1;
//     let leftCol = 0;
//     let rightCol = n - 1;
  
//     while (topRow <= bottomRow && leftCol <= rightCol) {
//       // Traverse right
//       for (let col = leftCol; col <= rightCol; col++) {
//         matrix[topRow][col] = num++;
//       }
//       topRow++;
  
//       // Traverse down
//       for (let row = topRow; row <= bottomRow; row++) {
//         matrix[row][rightCol] = num++;
//       }
//       rightCol--;
  
//       // Traverse left
//       if (topRow <= bottomRow) {
//         for (let col = rightCol; col >= leftCol; col--) {
//           matrix[bottomRow][col] = num++;
//         }
//         bottomRow--;
//       }
  
//       // Traverse up
//       if (leftCol <= rightCol) {
//         for (let row = bottomRow; row >= topRow; row--) {
//           matrix[row][leftCol] = num++;
//         }
//         leftCol++;
//       }
//     }
  
//     return matrix;
//   }
  
//   // Test case
//   const n = 3;
//   const result = generateMatrix(n);
//   console.log(result);
//   // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
  
//*************************************************************************************************************** */
//  **Question 8**

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

// **Example 1:**
// **Input:** mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]

// **Output:**

// [[7,0,0],[-7,0,3]]

//**************************************ANSWER - 8************************************************************** */
function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill().map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let l = 0; l < k; l++) {
          result[i][j] += mat1[i][l] * mat2[l][j];
        }
      }
    }
  
    return result;
  }
  
  // Test case
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = multiply(mat1, mat2);
  console.log(result);
  // Output: [[7, 0, 0], [-7, 0, 3]]
  
//************************************************************************************************************** */
