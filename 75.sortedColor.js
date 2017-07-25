// question link: https://leetcode.com/problems/sort-colors/#/description

/**
 * My solution based on three-partition quick sort
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    /**
     * loop invariant
     * nums[0...i) < 1 nums[i...k] = 1, nums(j...nums.length - 1] > 1 
     */
    let i = 0, k = 0, j = nums.length - 1;
    
    while(k <= j) {
        if(nums[k] < 1) {
            swap(nums, k++, i++);
        }
        else if(nums[k] === 1) {
            k++;
        }
        else {
            swap(nums, k, j--);
        }
    }
};
  
var swap = function(nums, n, m) {
    let temp = nums[m];
    nums[m] = nums[n];
    nums[n] = temp;
}

/**
 * Optimization, in the above aolution, the range of k should be [0, j]
 */

 var sortColors = function(nums) {
    let i = 0, j = nums.length - 1;
    // notes: no self-increment for j 
    for(let k = 0; k <= j;) {
        if(nums[k] < 1) {
            swap(nums, k++, i++);
        }
        else if(nums[k] === 1) {
            k++;
        }
        else {
            swap(nums, k, j--);
        }
    }
};
