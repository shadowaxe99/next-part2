```python
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://localhost:27017/')
db = client['ai_persona_store']
reviews_collection = db['reviews']

class ReviewSchema:
    def __init__(self, user_id, persona_id, review_text, rating):
        self.user_id = user_id
        self.persona_id = persona_id
        self.review_text = review_text
        self.rating = rating

def insert_review(review):
    review_data = {
        'user_id': ObjectId(review.user_id),
        'persona_id': ObjectId(review.persona_id),
        'review_text': review.review_text,
        'rating': review.rating
    }
    result = reviews_collection.insert_one(review_data)
    return str(result.inserted_id)

def get_reviews_by_persona(persona_id):
    reviews = reviews_collection.find({'persona_id': ObjectId(persona_id)})
    return [review for review in reviews]

def get_review_by_id(review_id):
    review = reviews_collection.find_one({'_id': ObjectId(review_id)})
    return review

def update_review(review_id, updated_review):
    reviews_collection.update_one(
        {'_id': ObjectId(review_id)},
        {'$set': updated_review}
    )

def delete_review(review_id):
    reviews_collection.delete_one({'_id': ObjectId(review_id)})
```