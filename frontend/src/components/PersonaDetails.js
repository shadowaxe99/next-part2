```javascript
import React, { useState, useEffect } from 'react';
import PersonaService from '../services/PersonaService';

function PersonaDetails({ match }) {
    const [persona, setPersona] = useState({});

    useEffect(() => {
        fetchPersona();
    }, []);

    const fetchPersona = async () => {
        const fetchedPersona = await PersonaService.getPersona(match.params.id);
        setPersona(fetchedPersona);
    };

    return (
        <div id="persona-details">
            <h2>{persona.name}</h2>
            <p>{persona.description}</p>
            <div>
                <h3>Personality Traits:</h3>
                <ul>
                    {persona.traits && persona.traits.map((trait, index) => (
                        <li key={index}>{trait}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Theme:</h3>
                <p>{persona.theme}</p>
            </div>
            <div>
                <h3>Famous Personality:</h3>
                <p>{persona.famousPersonality}</p>
            </div>
        </div>
    );
}

export default PersonaDetails;
```