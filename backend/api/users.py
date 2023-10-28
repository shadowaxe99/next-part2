```python
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from backend.database.users_db import UserSchema, UsersDB

app = Flask(__name__)
api = Api(app)

class UsersAPI(Resource):
    def get(self, user_id):
        user = UsersDB.get_user(user_id)
        if user:
            return UserSchema().dump(user), 200
        return {"message": "User not found"}, 404

    def post(self):
        new_user = UserSchema().load(request.get_json())
        user_id = UsersDB.create_user(new_user)
        return {"message": "User created", "user_id": user_id}, 201

    def put(self, user_id):
        user_data = UserSchema().load(request.get_json())
        UsersDB.update_user(user_id, user_data)
        return {"message": "User updated"}, 200

    def delete(self, user_id):
        UsersDB.delete_user(user_id)
        return {"message": "User deleted"}, 200

api.add_resource(UsersAPI, '/api/users/<int:user_id>', '/api/users')

if __name__ == '__main__':
    app.run(debug=True)
```