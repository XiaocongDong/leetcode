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
