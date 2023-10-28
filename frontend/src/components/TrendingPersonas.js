import React, { useEffect, useState } from 'react';
import { getPersonas } from '../services/PersonaService';

const TrendingPersonas = () => {
  const [trendingPersonas, setTrendingPersonas] = useState([]);

  useEffect(() => {
    fetchTrendingPersonas();
  }, []);

  const fetchTrendingPersonas = async () => {
    const personas = await getPersonas();
    const sortedPersonas = personas.sort((a, b) => b.metrics.usage - a.metrics.usage);
    setTrendingPersonas(sortedPersonas.slice(0, 10));
  };

  return (
    <div id="trending-personas">
      <h2>Trending Personas</h2>
      {trendingPersonas.map((persona, index) => (
        <div key={index}>
          <h3>{persona.name}</h3>
          <p>{persona.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPersonas;