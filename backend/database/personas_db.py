```python
from pymongo import MongoClient
from bson.objectid import ObjectId

class PersonaDB:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['elysium']
        self.personas = self.db['personas']

    def get_all_personas(self):
        return list(self.personas.find())

    def get_persona(self, persona_id):
        return self.personas.find_one({'_id': ObjectId(persona_id)})

    def add_persona(self, persona):
        result = self.personas.insert_one(persona)
        return str(result.inserted_id)

    def update_persona(self, persona_id, persona):
        self.personas.update_one({'_id': ObjectId(persona_id)}, {"$set": persona})

    def delete_persona(self, persona_id):
        self.personas.delete_one({'_id': ObjectId(persona_id)})

    def get_personas_by_category(self, category):
        return list(self.personas.find({'category': category}))

    def get_top_rated_personas(self):
        return list(self.personas.find().sort('rating', -1).limit(10))

    def get_trending_personas(self):
        return list(self.personas.find().sort('purchase_count', -1).limit(10))
```