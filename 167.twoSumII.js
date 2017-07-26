// question link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/#/description

/**
 * My solution, two pointers, one starts from the beginning and another starts from the end
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;
    
    // if all the integers are positive, this can save time
    // while(j >= 0 && numbers[j] > target) 
    //     j--;
    
    while(i <= j) {
        if(numbers[i] + numbers[j] > target) {
            j--;
        }else if(numbers[i] + numbers[j] < target) {
            i++;
        }else {
            return [i+1, j+1];
        }
    }
};
