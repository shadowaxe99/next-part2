```javascript
import React, { useState, useEffect } from 'react';
import PersonaService from '../services/PersonaService';

function PersonaMarketplace() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        getPersonas();
    }, []);

    const getPersonas = async () => {
        try {
            const response = await PersonaService.getPersonas();
            setPersonas(response.data);
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    };

    return (
        <div id="persona-marketplace">
            <h1>Persona Marketplace</h1>
            <div className="persona-list">
                {personas.map((persona) => (
                    <div key={persona.id} className="persona-card">
                        <h2>{persona.name}</h2>
                        <p>{persona.description}</p>
                        <button onClick={() => purchasePersona(persona.id)}>Purchase</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PersonaMarketplace;
```