// question link https://leetcode.com/problems/kth-largest-element-in-an-array/#/description

/**
 * My Solution, based on the quick sort partion, each time when I do 
 * the partion, I can get the sorted index of the first of element,
 * when the index < k, try to look at the right part, when the 
 * index > k, try to look at the left part
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(k > nums.length) return;
    // cause this implementation is sorting the array
    // from small to large
    // need to convert k into the index of 
    // the sorted array first
    k = nums.length - k;
    
    let start = 0, end = nums.length - 1;
    
    while(start <= end) {
        let p = partition(nums, start, end);
        if(p < k) {
            start = p + 1;
        }
        else if(p > k) {
            end = p - 1;
        }
        else {
            return nums[k];
        }
    }
    
    return;
};

var partition = function(nums, start, end) {
    let k = start, pivot = nums[start];
    
    for(let j = start + 1; j <= end; j++) {
        if(nums[j] <= pivot) {
            swap(nums, ++k, j);
        }
    }
    
    swap(nums, k, start);
    return k;
}

var swap = function(nums, m, n) {
    if(m === n) return;
    
    var temp = nums[m];
    nums[m] = nums[n];
    nums[n] = temp;
}