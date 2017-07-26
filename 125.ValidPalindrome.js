// question link https://leetcode.com/problems/valid-palindrome/#/description

/**
 * My solution, two pointer i and j, 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {    
    if(s.length === 0) return true;
    s = s.toLowerCase();
    
    let i = 0, j = s.length - 1;
   
    while(i < j) {
        let iCode = s[i].charCodeAt(0), jCode = s[j].charCodeAt(0);
        
        if(!isAlphanumeric(iCode)) {i++; continue;}
        if(!isAlphanumeric(jCode)) {j--; continue;}
        
        if(iCode === jCode) {
            i++;
            j--;
        }else {
            return false;
        }
    }
    
    return true;
};

var isAlphanumeric = function(code) {
    return (code > 47 && code < 58) || (code > 96 && code < 123);
}