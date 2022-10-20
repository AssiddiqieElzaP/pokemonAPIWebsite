import React, { useEffect, useState } from 'react';
import Pokemon from '../Pokemon/pokemon';
import '../Navbar/Navbar.css'
import Navbar from '../Navbar/Navbar';

function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = async () => {
    const resp = await fetch(loadPokemons);
    const data = await resp.json();

    setLoadPokemons(data.next);
    
    function createPokemonObject (result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        const pokemonName = pokemon.name.charAt(0).toUpperCase();

        setAllPokemons(currentList => [...currentList, data]);

        await allPokemons.sort((a,b) => a.id - b.id);

      });
    };
    createPokemonObject(data.results)
  };

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <>
    <div className='navbar-container'>
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
        <button className="load-more" onClick={() => getAllPokemons()}>Load Pokemons</button>
      </div>
    </div>
  </>
  );
}

export default Home