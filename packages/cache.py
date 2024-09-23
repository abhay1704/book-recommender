import collections
import json
import os

class SimpleCache:
	def __init__(self, capacity=6, file_name="cache.json"):
		self.cache = collections.OrderedDict()
		self.capacity = capacity
		self.file_name = file_name
		
		# Load the existing data from the JSON file into memory
		if os.path.exists(self.file_name):
			with open(self.file_name, 'r') as file:
				try:
					self.json_cache = json.load(file)
				except json.JSONDecodeError:
					self.json_cache = {}
		else:
			self.json_cache = {}

	def get(self, key):
		# First, check in RAM
		if key in self.cache:
			self.cache.move_to_end(key)  # Mark as recently used
			return self.cache[key]

		# Then, check in the JSON file if not in RAM
		if key in self.json_cache:
			return self.json_cache[key]

		# If not found in both, return None
		return None

	def put(self, key, value):
		# Put the value in the in-memory cache
		if key in self.cache:
			self.cache.move_to_end(key)  # Mark as recently used
		else:
			if len(self.cache) >= self.capacity:
				self.cache.popitem(last=False)  # Remove the oldest entry from RAM cache

		# Add to the in-memory cache
		self.cache[key] = value

		# Persist to the JSON file
		self.json_cache[key] = value
		self._save_to_json()

	def _save_to_json(self):
		# Write the entire json_cache back to the file
		with open(self.file_name, 'w') as file:
			json.dump(self.json_cache, file, indent=4)
