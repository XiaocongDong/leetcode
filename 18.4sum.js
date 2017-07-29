// question link https://leetcode.com/problems/4sum/description/

/**
 * like 15, 3sum O(n3);
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ret = [];
    nums = nums.sort((a, b) => a - b);
    
    let first = 0;
    
    while(first < nums.length - 3) {
        if(first === 0 || ((first > 0) && nums[first] !== nums[first - 1])) {
            let second = first + 1;     
            
            while(second < nums.length - 2) {
                if(second === first + 1 || ((second > 1) && nums[second] !== nums[second - 1])) {
                    let lo = second + 1, hi = nums.length - 1, sum = target - (nums[first] + nums[second]);

                    while(lo < hi) {
                         if(nums[lo] + nums[hi] === sum) {
                            ret.push([nums[first], nums[second], nums[lo], nums[hi]]);
                             
                            while(nums[lo] === nums[lo + 1]) lo++;
                            while(nums[hi] === nums[hi - 1]) hi--;

                            lo++;
                            hi--;
                        }else if(nums[lo] + nums[hi] > sum){
                            hi--;
                        }else {
                            lo++;
                        }
                    }
                    
                    second++;
                }else {
                    second++;
                }
            }
            
            first++;      
        }else {
            first++;
        }      
    }
    
    return ret;
};