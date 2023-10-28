```python
from flask import Blueprint, request
from backend.database.metrics_db import MetricsDB

metrics = Blueprint('metrics', __name__)
metrics_db = MetricsDB()

@metrics.route('/metrics', methods=['GET'])
def get_metrics():
    return metrics_db.get_all_metrics()

@metrics.route('/metrics/<id>', methods=['GET'])
def get_metric(id):
    return metrics_db.get_metric(id)

@metrics.route('/metrics', methods=['POST'])
def create_metric():
    data = request.get_json()
    return metrics_db.create_metric(data)

@metrics.route('/metrics/<id>', methods=['PUT'])
def update_metric(id):
    data = request.get_json()
    return metrics_db.update_metric(id, data)

@metrics.route('/metrics/<id>', methods=['DELETE'])
def delete_metric(id):
    return metrics_db.delete_metric(id)

@metrics.route('/metrics/user_engagement', methods=['GET'])
def get_user_engagement_metrics():
    return metrics_db.get_user_engagement_metrics()

@metrics.route('/metrics/marketplace_traffic', methods=['GET'])
def get_marketplace_traffic_metrics():
    return metrics_db.get_marketplace_traffic_metrics()
```