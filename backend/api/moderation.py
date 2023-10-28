```python
from flask import Flask, request, jsonify
from backend.database.moderation_db import ModerationDB

app = Flask(__name__)
moderation_db = ModerationDB()

@app.route('/moderation', methods=['POST'])
def moderate_content():
    data = request.get_json()
    moderation = data.get('moderation')
    if not moderation:
        return jsonify({'message': 'No moderation data provided'}), 400
    result = moderation_db.moderate_content(moderation)
    return jsonify(result), 200

@app.route('/moderation', methods=['GET'])
def get_moderation():
    moderation_id = request.args.get('id')
    if not moderation_id:
        return jsonify({'message': 'No moderation id provided'}), 400
    moderation = moderation_db.get_moderation(moderation_id)
    if not moderation:
        return jsonify({'message': 'No moderation found for given id'}), 404
    return jsonify(moderation), 200

if __name__ == '__main__':
    app.run(debug=True)
```