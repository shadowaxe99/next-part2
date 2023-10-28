```python
from flask import Blueprint, request
from . import db
from .models import Review

reviews = Blueprint('reviews', __name__)

@reviews.route('/reviews', methods=['POST'])
def add_review():
    review_data = request.get_json()
    new_review = Review(user=review_data['user'], persona=review_data['persona'], review=review_data['review'])
    db.session.add(new_review)
    db.session.commit()
    return 'Done', 201

@reviews.route('/reviews', methods=['GET'])
def get_reviews():
    review_list = Review.query.all()
    reviews = []
    for review in review_list:
        reviews.append({'user': review.user, 'persona': review.persona, 'review': review.review})
    return {"reviews": reviews}

@reviews.route('/reviews/<id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {"result": "review deleted"}
    return {"error": "review not found"}

@reviews.route('/reviews/<id>', methods=['PUT'])
def update_review(id):
    review = Review.query.get(id)
    if review:
        review_data = request.get_json()
        review.review = review_data['review']
        db.session.commit()
        return {"result": "review updated"}
    return {"error": "review not found"}
```