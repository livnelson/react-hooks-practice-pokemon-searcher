import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemons, setPokemons] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokemonArray => {
        console.log(pokemonArray)
        setPokemons(pokemonArray)
      })
  },[])

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemons={pokemons} setPokemons={setPokemons}/>
      <br />
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <br />
      <PokemonCollection pokemons={pokemons} searchQuery={searchQuery} />
    </Container>
  );
}

export default PokemonPage;
