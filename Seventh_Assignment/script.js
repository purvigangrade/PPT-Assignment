//  **Question 1**

// Given two strings s and t, *determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// **Example 1:**

// **Input:** s = "egg", t = "add"

// **Output:** true

//******************************ANSWER-1************************************************************* */
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapS = new Map();
    const mapT = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if ((mapS.has(charS) && mapS.get(charS) !== charT) || (mapT.has(charT) && mapT.get(charT) !== charS)) {
        return false;
      }
  
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    }
  
    return true;
  }
  
  // Test case
  const s = "egg";
  const t = "add";
  const result = isIsomorphic(s, t);
  console.log(result);
  // Output: true  

//*************************************************************************************************** */

// **Question 2**

// Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

// A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

// **Example 1:**

// **Input:** num = "69"

// **Output:**

// true

//******************************ANSWER-2*********************************************************************** */
function isStrobogrammatic(num) {
    const map = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6',
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      if (!map[num[left]] || map[num[left]] !== num[right]) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Test case
  const num = "69";
  const result = isStrobogrammatic(num);
  console.log(result);
  // Output: true
  
//************************************************************************************************************* */
// **Question 3**

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// **Example 1:**

// **Input:** num1 = "11", num2 = "123"

// **Output:**

// "134"

//******************************ANSWER-3*********************************************************************** */
function addStrings(num1, num2) {
    let sum = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      let digitSum = digit1 + digit2 + carry;
      carry = Math.floor(digitSum / 10);
      digitSum %= 10;
  
      sum = digitSum.toString() + sum;
  
      i--;
      j--;
    }
  
    return sum;
  }
  
  // Test case
  const num1 = "11";
  const num2 = "123";
  const result = addStrings(num1, num2);
  console.log(result);
  // Output: "134"
  
//************************************************************************************************************* */
// **Question 4**

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// **Example 1:**

// **Input:** s = "Let's take LeetCode contest"

// **Output:** "s'teL ekat edoCteeL tsetnoc"

//******************************ANSWER - 4*********************************************************************** */
function reverseWords(s) {
    const words = s.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split("").reverse().join("");
    }
  
    return words.join(" ");
  }
  
  // Test case
  const s = "Let's take LeetCode contest";
  const result = reverseWords(s);
  console.log(result);
  // Output: "s'teL ekat edoCteeL tsetnoc"
  
//*************************************************************************************************************** */
//  **Question 5**

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// **Example 1:**

// **Input:** s = "abcdefg", k = 2

// **Output:**

// "bacdfeg"

//******************************ANSWER - 5*********************************************************************** */
function reverseStr(s, k) {
    const chars = s.split("");
  
    for (let i = 0; i < s.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, s.length - 1);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join("");
  }
  
  // Test case
  const s = "abcdefg";
  const k = 2;
  const result = reverseStr(s, k);
  console.log(result);
  // Output: "bacdfeg"
  
//*************************************************************************************************************** */
//  **Question 6**

// Given two strings s and goal, return true *if and only if* s *can become* goal *after some number of **shifts** on* s.

// A **shift** on s consists of moving the leftmost character of s to the rightmost position.

// - For example, if s = "abcde", then it will be "bcdea" after one shift.

// **Example 1:**

// **Input:** s = "abcde", goal = "cdeab"

// **Output:**

// true

//******************************ANSWER - 6*********************************************************************** */
function rotateString(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    const rotated = s + s;
    return rotated.includes(goal);
  }
  
  // Test case
  const s = "abcde";
  const goal = "cdeab";
  const result = rotateString(s, goal);
  console.log(result);
  // Output: true
  
//*************************************************************************************************************** */
//  **Question 7**

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// **Example 1:**

// **Input:** s = "ab#c", t = "ad#c"

// **Output:** true

// **Explanation:**

// Both s and t become "ac".

//*******************************************ANSWER - 7*********************************************************** */
function backspaceCompare(s, t) {
    const processString = (str) => {
      const stack = [];
  
      for (let char of str) {
        if (char === '#') {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
  
      return stack.join('');
    };
  
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  
  // Test case
  const s = "ab#c";
  const t = "ad#c";
  const result = backspaceCompare(s, t);
  console.log(result);
  // Output: true

//*************************************************************************************************************** */
//  **Question 8**

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// **Example 1:**
// **Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

// **Output:** true

//*****************************************ANSWER - 8 ************************************************************* */
function checkStraightLine(coordinates) {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      if ((x - x1) * deltaY !== (y - y1) * deltaX) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test case
  const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
  const result = checkStraightLine(coordinates);
  console.log(result);
  // Output: true
  
//*************************************************************************************************************** */
