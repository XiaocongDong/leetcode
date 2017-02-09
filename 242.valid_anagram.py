"""
    option1: sort and compare each char in both the arrays
    option2: sort and join the list and compare two strings directly 
    option3: create a buff map as follow, the map can be replaced with the 26-length array
"""
class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        s_len = len(s)
        t_len = len(t)
        
        if s_len != t_len:
            return False
            
        buff_map = {}
        
        for i in xrange(s_len):
            s_char = s[i]
            t_char = t[i]
            if s_char not in buff_map:
                buff_map[s_char] = 1
            else:
                buff_map[s_char] = buff_map[s_char] + 1
                
            if buff_map[s_char] == 0:
                del buff_map[s_char]
            
            if t_char not in buff_map:
                buff_map[t_char] = -1
            else:
                buff_map[t_char] = buff_map[t_char] - 1
                
            if buff_map[t_char] == 0:
                del buff_map[t_char]
                 
        if buff_map:
            return False
        else:
            return True