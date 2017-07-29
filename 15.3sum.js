/**
 * Question link: https://leetcode.com/problems/3sum/description/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * sorted, two pointers, skip the duplicates, find the first one, second one and last one
 */
var threeSum = function(nums) {
    let ret = [];
    nums = nums.sort((a, b) => a - b);
    
    let i = 0;
    while(i < nums.length - 2) {
        if( i === 0 || (i > 0) && (nums[i] != nums[i - 1])) {
            let sum = 0 - nums[i];
            let lo = i + 1, hi = nums.length - 1;
            
            while(lo < hi) {
                if(nums[lo] + nums[hi] === sum) {
                    ret.push([nums[i], nums[lo], nums[hi]]);
                    
                    while(nums[lo] === nums[lo + 1]) lo++;
                    while(nums[hi] === nums[hi - 1]) hi--;
                    
                    lo++;
                    hi--;
                }else if(nums[lo] + nums[hi] > sum) {
                    hi--;
                }else {
                    lo++;
                }
            }
        }
        i++;
    }
    
    return ret;
};