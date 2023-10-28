```python
from flask import Blueprint, request
from .database.transactions_db import TransactionSchema, transaction

transactions = Blueprint('transactions', __name__)

@transactions.route('/transactions', methods=['POST'])
def create_transaction():
    transaction_data = request.get_json()
    errors = TransactionSchema().validate(transaction_data)
    if errors:
        return errors, 422
    new_transaction = transaction.create(transaction_data)
    return TransactionSchema().dump(new_transaction), 201

@transactions.route('/transactions/<int:id>', methods=['GET'])
def get_transaction(id):
    transaction_data = transaction.get(id)
    if not transaction_data:
        return {"error": "Transaction not found"}, 404
    return TransactionSchema().dump(transaction_data), 200

@transactions.route('/transactions/<int:id>', methods=['PUT'])
def update_transaction(id):
    transaction_data = request.get_json()
    errors = TransactionSchema().validate(transaction_data)
    if errors:
        return errors, 422
    updated_transaction = transaction.update(id, transaction_data)
    if not updated_transaction:
        return {"error": "Transaction not found"}, 404
    return TransactionSchema().dump(updated_transaction), 200

@transactions.route('/transactions/<int:id>', methods=['DELETE'])
def delete_transaction(id):
    deleted = transaction.delete(id)
    if not deleted:
        return {"error": "Transaction not found"}, 404
    return {}, 204
```