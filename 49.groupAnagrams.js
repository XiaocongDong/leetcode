// question link https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let m = new Map(), ret = [];
    
    for(let s of strs) {
        let sortedS = s.split("").sort().join("");
        
        if(m.has(sortedS)) {
            let l = m.get(sortedS);
            l.push(s);
            m.set(sortedS, l);
        }else {
            m.set(sortedS, [s]);
        }
    }

    for(let [key, value] of m) {
        ret.push(value);
    }
    
    return ret;
};
