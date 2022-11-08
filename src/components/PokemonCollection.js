import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons, searchQuery }) {

  const searchResults = pokemons.filter((pokemon) => {
    if (searchQuery === "") return true
    return pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const allCards = searchResults.map((pokemon) => {
      // console.log(pokemon.name)
    return (
        <PokemonCard 
          key = {pokemon.id}
          name = {pokemon.name}
          sprites = {pokemon.sprites}
          hp = {pokemon.hp}
        />
      )
    }) 

  
  return (
    <Card.Group itemsPerRow={6}>
      {console.log(PokemonCard)}
      {allCards}
    </Card.Group>
  );
}

export default PokemonCollection;
