```javascript
import React, { useEffect, useState } from 'react';
import PersonaService from '../services/PersonaService';

function TopRatedPersonas() {
    const [topRatedPersonas, setTopRatedPersonas] = useState([]);

    useEffect(() => {
        fetchTopRatedPersonas();
    }, []);

    const fetchTopRatedPersonas = async () => {
        const response = await PersonaService.getTopRatedPersonas();
        setTopRatedPersonas(response.data);
    };

    return (
        <div id="top-rated-personas">
            <h2>Top Rated Personas</h2>
            {topRatedPersonas.map((persona, index) => (
                <div key={index}>
                    <h3>{persona.name}</h3>
                    <p>{persona.description}</p>
                    <p>Rating: {persona.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default TopRatedPersonas;
```