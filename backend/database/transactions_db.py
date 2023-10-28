```python
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .base import Base, Session
from .users_db import User
from .personas_db import Persona

class Transaction(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    persona_id = Column(Integer, ForeignKey('personas.id'))
    transaction_time = Column(DateTime)
    amount = Column(Integer)

    user = relationship("User", back_populates="transactions")
    persona = relationship("Persona", back_populates="transactions")

    def __init__(self, user_id, persona_id, transaction_time, amount):
        self.user_id = user_id
        self.persona_id = persona_id
        self.transaction_time = transaction_time
        self.amount = amount

def get_transaction(transaction_id):
    session = Session()
    transaction = session.query(Transaction).filter_by(id=transaction_id).first()
    session.close()
    return transaction

def add_transaction(user_id, persona_id, transaction_time, amount):
    session = Session()
    new_transaction = Transaction(user_id, persona_id, transaction_time, amount)
    session.add(new_transaction)
    session.commit()
    session.close()

def delete_transaction(transaction_id):
    session = Session()
    transaction = session.query(Transaction).filter_by(id=transaction_id).first()
    session.delete(transaction)
    session.commit()
    session.close()

def update_transaction(transaction_id, user_id=None, persona_id=None, transaction_time=None, amount=None):
    session = Session()
    transaction = session.query(Transaction).filter_by(id=transaction_id).first()
    if user_id is not None:
        transaction.user_id = user_id
    if persona_id is not None:
        transaction.persona_id = persona_id
    if transaction_time is not None:
        transaction.transaction_time = transaction_time
    if amount is not None:
        transaction.amount = amount
    session.commit()
    session.close()
```