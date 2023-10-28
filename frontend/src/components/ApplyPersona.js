```javascript
import React, { useState, useEffect } from 'react';
import { applyPersona } from '../services/PersonaService';

const ApplyPersona = ({ user, persona }) => {
    const [applied, setApplied] = useState(false);

    useEffect(() => {
        if (user && persona) {
            setApplied(user.currentPersona === persona.id);
        }
    }, [user, persona]);

    const handleApply = async () => {
        try {
            await applyPersona(user.id, persona.id);
            setApplied(true);
        } catch (error) {
            console.error('Failed to apply persona:', error);
        }
    };

    return (
        <div id="apply-persona">
            {applied ? (
                <p>Persona {persona.name} is currently applied.</p>
            ) : (
                <button onClick={handleApply}>Apply Persona</button>
            )}
        </div>
    );
};

export default ApplyPersona;
```