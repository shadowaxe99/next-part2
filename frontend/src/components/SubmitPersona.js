```javascript
import React, { useState } from 'react';
import { submitPersona } from '../services/PersonaSubmissionService';

const SubmitPersona = () => {
    const [persona, setPersona] = useState({
        name: '',
        description: '',
        traits: '',
        theme: '',
        famousPersonality: ''
    });

    const handleChange = (event) => {
        setPersona({
            ...persona,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await submitPersona(persona);
        if (response.status === 200) {
            alert('Persona submitted successfully!');
        } else {
            alert('Failed to submit persona. Please try again.');
        }
    };

    return (
        <div id="submit-persona">
            <h2>Submit Your Persona</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" onChange={handleChange} required />
                </label>
                <label>
                    Traits:
                    <input type="text" name="traits" onChange={handleChange} required />
                </label>
                <label>
                    Theme:
                    <input type="text" name="theme" onChange={handleChange} required />
                </label>
                <label>
                    Famous Personality:
                    <input type="text" name="famousPersonality" onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitPersona;
```