//  **Question 1**

// Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

// **Example 1:**

// **Input:** s1 = "sea", s2 = "eat"

// **Output:** 231

// **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

// Deleting "t" from "eat" adds 116 to the sum.

// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

//**************************************ANSWER - 1 ***************************************************************** */
function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    
    // Create a 2D array to store the minimum delete sum
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
    
    // Fill the first row
    for (let i = 1; i <= n; i++) {
      dp[0][i] = dp[0][i - 1] + s2.charCodeAt(i - 1);
    }
    
    // Fill the first column
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    
    // Fill the remaining cells
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)

//********************************************************************************************************************/

// **Question 2**

// Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

// The following rules define a **valid** string:

// - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// - Any right parenthesis ')' must have a corresponding left parenthesis '('.
// - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// - '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// **Example 1:**

// **Input:** s = "()"

// **Output:**

// true

//***************************************ANSWER - 2 **************************************************************/
function checkValidString(s) {
    let low = 0;  // Minimum number of open parentheses
    let high = 0; // Maximum number of open parentheses
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        low++;
        high++;
      } else if (s[i] === ')') {
        if (low > 0) {
          low--;
        }
        high--;
      } else { // s[i] === '*'
        if (low > 0) {
          low--;
        }
        high++;
      }
      
      if (high < 0) {
        return false;
      }
    }
    
    return low === 0;
  }
  
  // Test case
  const s = "()";
  const result = checkValidString(s);
  console.log(result);
  // Output: true
  
//******************************************************************************************************************/
// **Question 3**

// Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

// In one **step**, you can delete exactly one character in either string.

// **Example 1:**

// **Input:** word1 = "sea", word2 = "eat"

// **Output:** 2

// **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea"

//**************************************ANSWER - 3******************************************************************/
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    // Initialize a 2D array dp with size (m+1) x (n+1)
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    
    // Fill the first row and first column with cumulative deletions
    for (let i = 1; i <= m; i++) {
      dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
    
    // Fill the remaining cells of the dp array
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
    }
    
    return dp[m][n];
  }
  
  // Test case
  const word1 = "sea";
  const word2 = "eat";
  const result = minDistance(word1, word2);
  console.log(result);
  // Output: 2
  
//******************************************************************************************************************/
//  **Question 4**

// You need to construct a binary tree from a string consisting of parenthesis and integers.

// The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
// You always start to construct the **left** child node of the parent first if it exists.

// **Input:** s = "4(2(3)(1))(6(5))"

// **Output:** [4,2,6,3,1,5]

//***********************************ANSWER -4 *********************************************************************/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function str2tree(s) {
    if (!s) return null;
    
    let num = '';
    let index = 0;
    
    // Extract the root value from the string
    while (index < s.length && (s[index] !== '(' && s[index] !== ')')) {
      num += s[index];
      index++;
    }
    
    const root = new TreeNode(parseInt(num));
    let stack = [root];
    
    while (index < s.length) {
      if (s[index] === '(') {
        // Move to the left child
        index++;
        let node = stack[stack.length - 1];
        let childNum = '';
        
        while (index < s.length && (s[index] !== '(' && s[index] !== ')')) {
          childNum += s[index];
          index++;
        }
        
        let child = new TreeNode(parseInt(childNum));
        
        if (!node.left) {
          node.left = child;
        } else {
          node.right = child;
        }
        
        stack.push(child);
      } else if (s[index] === ')') {
        // Move back to the parent
        stack.pop();
        index++;
      }
    }
    
    return root;
  }
  
  // Test case
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  console.log(root);
  // Output: [4,2,6,3,1,5]
  
//******************************************************************************************************************/
//  **Question 5**

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

// - If the group's length is 1, append the character to s.
// - Otherwise, append the character followed by the group's length.

// The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done **modifying the input array,** return *the new length of the array*.

// You must write an algorithm that uses only constant extra space.

// **Example 1:**

// **Input:** chars = ["a","a","b","b","c","c","c"]

// **Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

// **Explanation:**

// The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

//***********************************ANSWER -5*********************************************************************/
function compress(chars) {
    let index = 0; // Current index in the modified array
    let count = 1; // Count of consecutive repeating characters
    
    for (let i = 1; i <= chars.length; i++) {
      if (i < chars.length && chars[i] === chars[i - 1]) {
        count++; // Increment count for consecutive repeating characters
      } else {
        chars[index] = chars[i - 1]; // Update the character in the modified array
        
        if (count > 1) {
          // Convert count to string and split into characters
          const countStr = count.toString().split('');
          chars.splice(index + 1, 0, ...countStr); // Insert count characters after the character
          index += countStr.length; // Update the index
        }
        
        index++; // Move to the next position in the modified array
        count = 1; // Reset count for the next group
      }
    }
    
    return index; // Return the new length of the array
  }
  
  // Test case
  const chars = ["a","a","b","b","c","c","c"];
  const newLength = compress(chars);
  console.log(newLength); // Output: 6
  console.log(chars.slice(0, newLength)); // Output: ["a","2","b","2","c","3"]

//*************************************************************************************************************/
// **Question 6**

// Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

// An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// **Example 1:**

// **Input:** s = "cbaebabacd", p = "abc"

// **Output:** [0,6]

// **Explanation:**

// The substring with start index = 0 is "cba", which is an anagram of "abc".

// The substring with start index = 6 is "bac", which is an anagram of "abc".

//***********************************ANSWER -6*********************************************************************/
function findAnagrams(s, p) {
    const result = [];
    const targetCount = new Array(26).fill(0); // Frequency count of characters in p
    const windowCount = new Array(26).fill(0); // Frequency count of characters in the sliding window
    const aCharCode = 'a'.charCodeAt(0);
    
    // Calculate frequency count of characters in p
    for (let i = 0; i < p.length; i++) {
      const charIndex = p.charCodeAt(i) - aCharCode;
      targetCount[charIndex]++;
    }
    
    let left = 0; // Left pointer of the sliding window
    
    // Iterate through the string s with the right pointer of the sliding window
    for (let right = 0; right < s.length; right++) {
      const charIndex = s.charCodeAt(right) - aCharCode;
      windowCount[charIndex]++; // Increment frequency count of character in the window
      
      // If the window size is equal to the size of p, check for an anagram
      if (right - left + 1 === p.length) {
        if (windowCount.every((count, index) => count === targetCount[index])) {
          result.push(left); // Found an anagram, add the left pointer to the result
        }
        
        // Move the window by incrementing the left pointer and updating the counts
        const leftCharIndex = s.charCodeAt(left) - aCharCode;
        windowCount[leftCharIndex]--;
        left++;
      }
    }
    
    return result;
  }
  
  // Test case
  const s = "cbaebabacd";
  const p = "abc";
  const indices = findAnagrams(s, p);
  console.log(indices); // Output: [0, 6]
  
//*****************************************************************************************************************/

// **Question 7**

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// **Example 1:**

// **Input:** s = "3[a]2[bc]"

// **Output:** "aaabcbc"

//**************************************ANSWER - 7******************************************************************/
function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === ']') {
        // Pop characters until '[' is encountered
        let decodedString = '';
        while (stack[stack.length - 1] !== '[') {
          decodedString = stack.pop() + decodedString;
        }
        stack.pop(); // Pop '[' from the stack
        
        // Pop digits until a non-digit character is encountered
        let repeatCount = '';
        while (!isNaN(stack[stack.length - 1])) {
          repeatCount = stack.pop() + repeatCount;
        }
        
        repeatCount = parseInt(repeatCount);
        
        // Repeat the decodedString and push it back to the stack
        decodedString = decodedString.repeat(repeatCount);
        stack.push(decodedString);
      } else {
        // Push characters to the stack
        stack.push(s[i]);
      }
    }
    
    return stack.join('');
  }
  
  // Test case
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"
  
//*****************************************************************************************************************/
// **Question 8**

// Given two strings s and goal, return true *if you can swap two letters in* s *so the result is equal to* goal*, otherwise, return* false*.*

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// **Example 1:**

// **Input:** s = "ab", goal = "ba"

// **Output:** true

// **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

//******************************************ANSWER - 8 ************************************************************/
function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if there are any repeated characters in s
      const charSet = new Set(s);
      return charSet.size < s.length;
    }
  
    const mismatchedIndices = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchedIndices.push(i);
      }
    }
  
    if (mismatchedIndices.length !== 2) {
      return false;
    }
  
    const [idx1, idx2] = mismatchedIndices;
    return s[idx1] === goal[idx2] && s[idx2] === goal[idx1];
  }
  
  // Test case
  const s = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(s, goal);
  console.log(canSwap); // Output: true
  
//*****************************************************************************************************************/
  
