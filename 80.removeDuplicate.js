// question link https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/#/description


/**
 *  My solution 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // if the nums contain less than 2 elements
    // return
    if(nums.length <= 2) return nums.length;
    
    // i stands for the last index of the element that has 
    // appeared less than twice, cnt is a counter that is used 
    // to count how many duplicates current element has, the initial
    // number for this is 1
    let i = 0, cnt = 1;
    
    // iterate through the list, from i
    // cause we already know the first number is
    // not a duplicate
    for(let j = 1; j < nums.length; j++) {
        if(nums[j] === nums[i]) {
            cnt ++;
        }else {
            // since it can only no more than 2
            // duplicates, when the counter is 
            // more than 2, it should only be 2
            if(cnt > 2) cnt = 2;
            // set the ahead cnt - 1 element to nums[i]
            for(let k = 1; k < cnt; k++) {
                nums[i + k] = nums[i];
            }
            // i now points to the new element
            i += cnt;
            nums[i] = nums[j];
            // reset
            cnt = 1;
        }
    }
    // if the array only contains the same elements
    if(i != 0) {
        if(cnt >= 2) {
            // set the ahead one elements
            nums[i + 1] = nums[i];
            i++;
        } 
    }else {
        if(cnt >= 2) {
            i ++;
        }
    }
    
    return i + 1;
};

/**
 * Optimized Solution
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // i - 1 is the index of the last element 
    // that should be in the new array
    let i = 0;

    for(let n of nums) {
        if(i < 2 || n > nums[i - 2]) {
            nums[i] = n;
            i++;
        }
    }
    return i;
}
