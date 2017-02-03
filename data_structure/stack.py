"""
implementation of Stack in Python
"""

class Stack:

	def __init__(self):
		self.__storage = []

	def is_empty(self):
		return len(self.__storage) == 0

	def pop(self):
		return self.__storage.pop()

	def push(self, p):
		self.__storage.append(p)

	def peek(self):
		if not self.__storage:
			return None

		return self.__storage[-1]

if __name__ == "__main__":
    s = Stack()
    s.push(1)
    s.push(2)
    print(s.is_empty())
    print(s.pop())
    print(s.pop())	
    print(s.is_empty())
