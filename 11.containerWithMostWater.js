// question link https://leetcode.com/problems/container-with-most-water/#/description

/**
 * My solution, pointers collison
 * Mathematical induction(数学归纳法)
 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i = 0, j = height.length - 1;
    let max = 0;
    
    while(i < j) {
        // calculate the volume
        let volume = (j - i) * Math.min(height[i], height[j]);
        
        max = Math.max(volume, max);
        if(height[i] < height[j]) {
            i++;
        }
        else if(height[i] > height[j]) {
            j--;
        }
        else {
            j--;
        }
    }
    
    return max;
};