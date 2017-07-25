// question link https://leetcode.com/problems/merge-sorted-array/#/description

/**
 * My solution, based on merge two sorted array, need to create auxiliary array
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let auxArr = new Array(m + n);
    
    let i = 0, j = 0, k = 0;
    
    while(i < m && j < n) {
        if(nums1[i] < nums2[j]) {
            auxArr[k++] = nums1[i++];
        }
        else {
            auxArr[k++] = nums2[j++];
        }
    }
    
    while(i < m) 
        auxArr[k++] = nums1[i++];
    
    while(j < n)
        auxArr[k++] = nums2[j++];
    
    for(let w in auxArr)
        nums1[w] = auxArr[w];
};

/**
 * Optimization, from the end to the begin
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while(i > -1 && j > -1) nums1[k--] = (nums1[i] > nums2[j] ) ? nums1[i--]: nums2[j--];
    // no need to know if i > -1, cause the data in nums1 is already in nums1
    while(j > -1) nums1[k--] = nums2[j--];
};