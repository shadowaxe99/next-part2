```python
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://localhost:27017/')
db = client['elysium']
moderation_collection = db['moderation']

def get_moderation(moderation_id):
    return moderation_collection.find_one({'_id': ObjectId(moderation_id)})

def add_moderation(moderation):
    return str(moderation_collection.insert_one(moderation).inserted_id)

def update_moderation(moderation_id, moderation):
    moderation_collection.update_one({'_id': ObjectId(moderation_id)}, {"$set": moderation})

def delete_moderation(moderation_id):
    moderation_collection.delete_one({'_id': ObjectId(moderation_id)})

def get_all_moderations():
    return list(moderation_collection.find({}))

def get_moderations_by_status(status):
    return list(moderation_collection.find({'status': status}))
```