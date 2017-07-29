// question link https://leetcode.com/problems/number-of-boomerangs/description/

/**
 * O(n^2)
 */


/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let ret = 0;
    
    for(let i = 0; i < points.length; i++) {
        let m = new Map();
        for(let j = 0; j < points.length; j++) {
            if(i !== j) {
                let d = dist(points[i], points[j]);
                
                if(m.has(d)) {
                    m.set(d, m.get(d) + 1);
                }else {
                    m.set(d, 1);
                }
            }
        }
        
        for(let [key, value] of m) {
            if(value >= 2) {
                ret += value * (value - 1);
            }
        }
    }
    
    return ret;
};
        
var dist = function(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) +
           (p1[1] - p2[1]) * (p1[1] - p2[1]);
};