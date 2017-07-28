// question link https://leetcode.com/problems/word-pattern/tabs/description/

/**
 * My sollution, since in str and pattern different position stores different char/str
 * converted them to same value and compare
 * Time o(nlog(n)), space o(n)
 */

 /**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let sArr = str.split(" ");
    let pArr = pattern.split("");
    let sM = new Map();
    let pM = new Map();
    
    if(sArr.length != pArr.length) return false;
    
    let cnt = 0;
    
    for(let i in pArr) {
        if(pM.has(pArr[i])) {
            pArr[i] = pM.get(pArr[i]);
        }else {
            pM.set(pArr[i], cnt);
            pArr[i] = cnt++;
        }
    }
    
    cnt = 0;
    
    for(let i in sArr) {
        if(sM.has(sArr[i])) {
            sArr[i] = sM.get(sArr[i]);
        }else {
            sM.set(sArr[i], cnt);
            sArr[i] = cnt++;
        }
    }
    
    for(let i in sArr) {
        if(sArr[i] != pArr[i]) {
            return false;
        }
    }
    
    return true;
};