import React, { useEffect, useState } from 'react';
import '../../App.css';
import Pokemon from '../Pokemon/pokemon';
import '../Navbar/Navbar.css'
import Navbar from '../Navbar/Navbar';

function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20');

  const getAllPokemons = async () => {
    const resp = await fetch(loadPokemons);
    const data = await resp.json();

    setLoadPokemons(data.next);
    
    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data]);

        allPokemons.sort((a,b) => a.id - b.id);

      });
    };
    createPokemonObject(data.results)
  };

  useEffect(() => {
    getAllPokemons()
  });

  return (
    <>
    <div className='App'>
      <Navbar />
    </div>
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          { allPokemons.map((pokemon, index) => 
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              imagePoke={pokemon.sprites.front_shiny}
              type={pokemon.types[0].type.name}
              height={pokemon.height}
              weight={pokemon.weight}
              pokemon={pokemon}
              // sideType={pokemon.types[1].type.name}
              key={index}
          />
          )}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load</button>
      </div>
    </div>
  </>
  );
}

export default Home