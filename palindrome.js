
var isPalindrome = function(x) {

    if(x < 0)
        return false
    let y = x;
    let result = 0;
    while(y / 10 != 0)
    {
        result = result*10 + (y % 10) ;
        y = Math.floor(y / 10);

    }
    if(x != result)
        return false;
    return true;

};

console.log(isPalindrome(123568)); 
console.log(isPalindrome(121)); 
console.log(isPalindrome(-121)); 
console.log(isPalindrome(10)); 
/*
Palindrome Number

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
*/