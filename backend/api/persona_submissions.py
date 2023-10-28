```python
from flask import Blueprint, request
from .persona_submissions_db import PersonaSubmissionDB
from .moderation import moderateContent

persona_submissions = Blueprint('persona_submissions', __name__)
db = PersonaSubmissionDB()

@persona_submissions.route('/submit', methods=['POST'])
def submit_persona():
    submission = request.get_json()
    if not submission:
        return {"error": "No submission data provided"}, 400

    # Validate submission data against SubmissionSchema
    errors = SubmissionSchema().validate(submission)
    if errors:
        return {"error": "Invalid submission data", "details": errors}, 400

    # Moderate the content of the submission
    moderation_result = moderateContent(submission)
    if not moderation_result['approved']:
        return {"error": "Submission not approved", "reason": moderation_result['reason']}, 403

    # Save the submission to the database
    db.save(submission)

    return {"message": "Submission received and approved"}, 200

@persona_submissions.route('/<int:id>', methods=['GET'])
def get_submission(id):
    submission = db.get(id)
    if not submission:
        return {"error": "Submission not found"}, 404

    return submission, 200
```