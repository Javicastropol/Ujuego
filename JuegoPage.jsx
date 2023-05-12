import React, { useState, useEffect } from 'react';
import './JuegoPage.css';

function JuegoPage () {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    async function fetchSuperheroes() {
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const data = await response.json();
      setSuperheroes(data);
    }
    fetchSuperheroes();
  }, []);

  if (superheroes.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <ul className='cards'>
      {superheroes.map(superhero => (
        <li className='card' key={superhero.id}>
          <img src={superhero.images.sm} alt={superhero.name} />
          <div className="card-body">
          <h2 className="card-title">{superhero.name}</h2>
          <p className="card-text">{superhero.connections.groupAffiliation}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default JuegoPage;







