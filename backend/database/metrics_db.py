```python
from pymongo import MongoClient
from bson.objectid import ObjectId

class MetricsDB:
    def __init__(self):
        self.client = MongoClient('mongodb://localhost:27017/')
        self.db = self.client['ai_persona_store']
        self.collection = self.db['metrics']

    def get_metrics(self):
        metrics = self.collection.find()
        return metrics

    def get_metric_by_id(self, id):
        metric = self.collection.find_one({'_id': ObjectId(id)})
        return metric

    def insert_metric(self, metric_data):
        result = self.collection.insert_one(metric_data)
        return result.inserted_id

    def update_metric(self, id, metric_data):
        self.collection.update_one({'_id': ObjectId(id)}, {"$set": metric_data})
        return self.get_metric_by_id(id)

    def delete_metric(self, id):
        self.collection.delete_one({'_id': ObjectId(id)})
        return True
```