```python
from flask import Blueprint, request
from .ratings_db import RatingDB
from .users_db import UserDB
from .personas_db import PersonaDB

ratings = Blueprint('ratings', __name__)

rating_db = RatingDB()
user_db = UserDB()
persona_db = PersonaDB()

@ratings.route('/ratings', methods=['POST'])
def submit_rating():
    data = request.get_json()
    user_id = data.get('user_id')
    persona_id = data.get('persona_id')
    rating_value = data.get('rating_value')

    user = user_db.get_user(user_id)
    persona = persona_db.get_persona(persona_id)

    if not user or not persona:
        return {'message': 'User or Persona not found'}, 404

    rating = rating_db.create_rating(user_id, persona_id, rating_value)

    return {'message': 'Rating submitted successfully', 'rating': rating}, 201

@ratings.route('/ratings', methods=['GET'])
def get_ratings():
    persona_id = request.args.get('persona_id')
    ratings = rating_db.get_ratings(persona_id)
    return {'ratings': ratings}, 200
```