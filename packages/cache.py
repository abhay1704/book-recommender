import collections

class SimpleCache:
	def __init__(self, capacity=6):
		self.cache = collections.OrderedDict()
		self.capacity = capacity

	def get(self, key):
		if key not in self.cache:
			return None
		# Move the key to the end to show that it was recently used
		self.cache.move_to_end(key)
		return self.cache[key]

	def put(self, key, value):
		if key in self.cache:
			# Move the key to the end to show that it was recently used
			self.cache.move_to_end(key)
		else:
			if len(self.cache) >= self.capacity:
				# Remove the first key-value pair
				self.cache.popitem(last=False)
		self.cache[key] = value
