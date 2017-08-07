// question link https://leetcode.com/problems/reverse-linked-list-ii/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m === n) return head;
    n = n - m + 1;
    
    // start points to the first element that doesn't need to be reversed
    let start = null, curr = head;
    
    // go to the first element that need to be reversed
    while(m > 1) {
        start = curr;
        curr = curr.next;
        m--;
    }
    // first is the frist revered element
    let prev = null, next, first = curr;
    while(n >= 1) {
        next = curr.next;     
        curr.next = prev;
        prev = curr;
        curr = next;
        n--;
    }
    
    if(curr != null) {
        first.next = curr;
    }
    
    if(start != null) {
        start.next = prev;
    }
    
    return start === null? prev: head;
};