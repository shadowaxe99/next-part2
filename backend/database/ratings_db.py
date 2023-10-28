```python
from pymongo import MongoClient
from bson.objectid import ObjectId

class RatingsDB:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['ai_persona_store']
        self.collection = self.db['ratings']

    def get_rating(self, rating_id):
        return self.collection.find_one({'_id': ObjectId(rating_id)})

    def get_all_ratings(self):
        return list(self.collection.find({}))

    def get_ratings_by_user(self, user_id):
        return list(self.collection.find({'user': user_id}))

    def get_ratings_by_persona(self, persona_id):
        return list(self.collection.find({'persona': persona_id}))

    def add_rating(self, rating):
        return str(self.collection.insert_one(rating).inserted_id)

    def update_rating(self, rating_id, rating):
        self.collection.update_one({'_id': ObjectId(rating_id)}, {"$set": rating})

    def delete_rating(self, rating_id):
        self.collection.delete_one({'_id': ObjectId(rating_id)})

    def get_average_rating(self, persona_id):
        ratings = self.get_ratings_by_persona(persona_id)
        if ratings:
            return sum([rating['rating'] for rating in ratings]) / len(ratings)
        else:
            return None
```