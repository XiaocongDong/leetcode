// question link https://leetcode.com/problems/minimum-size-subarray-sum/tabs/description
/**
 * My solution, sliding window
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let min = nums.length + 1, i = 0, j = 0, end = nums.length - 1, sub = nums[0];
    
    // get the minimum length of subarray which start from i and its sum >= s
    while(j <= end) { 
        if(sub < s) {
            sub += nums[++j];
        }else {
            min = Math.min((j - i + 1), min);
            sub -= nums[i++];
        }
    }
    
    return min === nums.length + 1? 0: min;
};

