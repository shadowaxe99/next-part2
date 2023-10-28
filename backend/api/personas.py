```python
from flask import Flask, request, jsonify
from backend.database.personas_db import PersonaDB

app = Flask(__name__)
persona_db = PersonaDB()

@app.route('/api/personas', methods=['GET'])
def get_personas():
    personas = persona_db.get_all_personas()
    return jsonify(personas), 200

@app.route('/api/personas/<int:persona_id>', methods=['GET'])
def get_persona(persona_id):
    persona = persona_db.get_persona_by_id(persona_id)
    if persona:
        return jsonify(persona), 200
    else:
        return jsonify({"error": "Persona not found"}), 404

@app.route('/api/personas', methods=['POST'])
def create_persona():
    persona_data = request.get_json()
    new_persona = persona_db.create_persona(persona_data)
    return jsonify(new_persona), 201

@app.route('/api/personas/<int:persona_id>', methods=['PUT'])
def update_persona(persona_id):
    persona_data = request.get_json()
    updated_persona = persona_db.update_persona(persona_id, persona_data)
    if updated_persona:
        return jsonify(updated_persona), 200
    else:
        return jsonify({"error": "Persona not found"}), 404

@app.route('/api/personas/<int:persona_id>', methods=['DELETE'])
def delete_persona(persona_id):
    deleted_persona = persona_db.delete_persona(persona_id)
    if deleted_persona:
        return jsonify(deleted_persona), 200
    else:
        return jsonify({"error": "Persona not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
```