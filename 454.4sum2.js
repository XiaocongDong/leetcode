// question link https://leetcode.com/problems/4sum-ii/description/

/**
 * use two maps to stores all the combination of (A, B) and (C, D);
 * O(n^2log(n)) 
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    let ret = 0, len = A.length, m1 = new Map(), m2 = new Map();
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = C[i] + D[j];
            
            if(m1.has(sum)) {
                m1.set(sum, m1.get(sum) + 1);
            }else {
                m1.set(sum, 1);
            }
        }
    }
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            let sum = A[i] + B[j];
            
            if(m2.has(sum)) {
                m2.set(sum, m2.get(sum) + 1);
            }else {
                m2.set(sum, 1);
            }
        }
    }
    
    for(let [key, value] of m2) {
        let res = 0 - parseInt(key);
        
        if(m1.has(res)) {
            ret += m1.get(res) * value;
        }
    }
    
    return ret;
};