"""
	BST binary search tree, time complexity is O(logN), N refers to the number of the collection
"""
from stack import Stack

class BinarySearchTree:

	class Node:

		def __init__(self, val):
			self.left = None
			self.right = None
			self.val = val

	def __init__(self):
		self.root = None

	def add_element(self, val):

		# if the root is None, create root node
		if not self.root:
			self.root = self.Node(val)
			return 

		# when val is bigger than the value of 
		# current node search on the right side
		# when val is smaller than the value of 
		# cuurent node search on the left side
		current = self.root

		while(True):
			if val > current.val:
				if current.right is None:
					current.right = self.Node(val)
					break
				else:
					current = current.right
					continue
			if val <= current.val:
				if current.left is None:
					current.left = self.Node(val)
					break
				else:
					current = current.left
					continue

	# implement the preoder traversal by Stack
	def preorder_traversal(self):
		if not self.root:
			return

		stack = Stack()
		stack.push(self.root)
		visited_nodes = []
		while(not stack.is_empty()):
			current = stack.peek()
			if not (current in visited_nodes) and current.left:
				stack.push(current.left)
			else:
				print(current.val)
				stack.pop()
				if current.right:
					stack.push(current.right)
			visited_nodes.append(current)

	def search(self, val):
		if not self.root:
			return False
		current = self.root
		while(current):
			if current.val == val:
				return True
			elif current.val < val:
				current = current.right
			else:
				current = current.left

		return False






