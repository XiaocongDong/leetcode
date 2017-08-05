// question link https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    
    for(let i = 0; i <= nums.length; i++) {
        let n = nums[i];
        
        if(set.has(n)) {
            return true;
        }
        
        set.add(n);

        if(set.size > k) {
            set.delete(nums[i - k]);
        }
    }
    
    return false;
};