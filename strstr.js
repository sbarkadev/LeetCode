

var strStr = function(haystack, needle) {
    if(needle[0] == '\0')
        return 0;
    return haystack.indexOf(needle);

};

// var strstr = function(haystack, needle)
// {
//     if(haystack.includes(needle))
//         return haystack.indexOf(needle);
//     return -1;
// }

console.log(strStr("hello","ll"));
console.log(strStr("hello","llaa"));
console.log(strStr("aaaa","bba"));
console.log(strStr("",""));
/*

Implement strStr().

Return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a
great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle 
is an empty string. This is consistent to C's strstr() 
and Java's indexOf().


Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:

Input: haystack = "", needle = ""
Output: 0


*/

/* https://careerkarma.com/blog/javascript-string-contains/ */