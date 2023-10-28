import React, { useState, useEffect } from 'react';
import PersonaService from '../services/PersonaService';

function PreviewPersona() {
    const [persona, setPersona] = useState(null);

    useEffect(() => {
        const fetchPersona = async () => {
            const response = await PersonaService.getPersona();
            setPersona(response);
        };
        fetchPersona();
    }, []);

    const previewPersona = () => {
        // Logic to preview persona goes here
        // This could include text responses, voice, and visual representation
        // For the sake of this example, we will just log the persona
        console.log(persona);
    };

    return (
        <div id="preview-persona">
            <h2>Preview Persona</h2>
            {persona ? (
                <div>
                    <h3>{persona.name}</h3>
                    <button onClick={previewPersona}>Preview</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PreviewPersona;