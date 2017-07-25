// question link: https://leetcode.com/problems/sort-colors/#/description

/**
 * My solution based on three-partition quick sort
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
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
