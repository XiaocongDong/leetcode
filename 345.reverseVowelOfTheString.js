// question link https://leetcode.com/problems/reverse-vowels-of-a-string/#/description

/**
 *  My Solution, pointers collison 
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let i = 0, j = s.length - 1;
    
    while(i < j) {
        if(!isVowel(s[i])) {
            i++;
            continue;
        }
        
        if(!isVowel(s[j])) {
            j--;
            continue;
        }
        s = swap(s, i++, j--);
    }
    
    return s;
};

var isVowel = function(c) {
    // Vowels aeiou
    let lc = c.toLowerCase();  
    let cCode = lc.charCodeAt(0);
    
    return (cCode === 97 || cCode === 101 || cCode === 105 || cCode === 111 || cCode === 117);
}

var swap = function(s, n, m) {
    // swap string in JS
    return s.substring(0, n) + s[m] + s.substring(n + 1, m) + s[n] + s.substring(m + 1);
}