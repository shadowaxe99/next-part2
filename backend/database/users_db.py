```python
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship
from .base import Base, Session

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(120), unique=True, nullable=False)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)

    reviews = relationship("Review", back_populates="user")
    transactions = relationship("Transaction", back_populates="user")
    submissions = relationship("Submission", back_populates="user")

    def __repr__(self):
        return f'<User {self.username}>'

class UserSchema(Schema):
    id = fields.Int(dump_only=True)
    username = fields.Str(required=True)
    email = fields.Email(required=True)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

def get_user(user_id):
    session = Session()
    user = session.query(User).filter_by(id=user_id).first()
    session.close()
    return user

def add_user(user_data):
    session = Session()
    user = User(**user_data)
    session.add(user)
    session.commit()
    session.close()

def update_user(user_id, user_data):
    session = Session()
    user = session.query(User).filter_by(id=user_id).first()
    if user:
        for key, value in user_data.items():
            setattr(user, key, value)
        session.commit()
    session.close()

def delete_user(user_id):
    session = Session()
    user = session.query(User).filter_by(id=user_id).first()
    if user:
        session.delete(user)
        session.commit()
    session.close()
```