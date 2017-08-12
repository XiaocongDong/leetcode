// question link https://leetcode.com/problems/sum-of-left-leaves/description/

/**
 * need to mark if a node is left node
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root == null) return 0;
    
    return _sumOfLeftLeaves(root, false)
};
       
var _sumOfLeftLeaves = function(root, left) {
    let sum = 0;
    if(root.left !== null) {
        sum += _sumOfLeftLeaves(root.left, true);
    }
    if(root.right !== null) {
        sum += _sumOfLeftLeaves(root.right, false);
    }
    
    if(root.left == null && root.right == null) {
        if(left) {
            return root.val;
        }else {
            return 0;
        }
    }
    
    return sum;
};
