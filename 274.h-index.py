"""
Explanation: when the array is sorted, you can make sure after one specific index, the rest of the number
are all larger than one number, let say we have an index i, from index i, there are N - i numbers which 
are bigger than citations[i], if citations[i] >= N - i, it means there are (N - i) citations is larger than 
N - i, and if i is the first index that meets this criteria, we can also draw the conclusion that 
the former numbers of the array, are all smaller than N - i, this assumption can be proved as follow:
	citations[i] >= N - i  ==> i is the first one which match  ==>
	citations[i - 1] < N - i + 1 ==> citations[i - 1] <= N - i  
"""
class Solution(object):
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        citations.sort()
        length = len(citations)
        for i, c in enumerate(citations):
        	num = length - i
        	if num <= citations[i]:
        		return num
        return 0
