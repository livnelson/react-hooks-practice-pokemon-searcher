import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemons, setPokemons}) {
  const [addName, setAddName] = useState('')
  const [addHp, setAddHp] = useState('')
  const [addFrontUrl, setAddFrontUrl] = useState('')
  const [addBackUrl, setBackUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPokemon = {"name": addName, "hp": addHp, "sprites": {"front": addFrontUrl, "back": addBackUrl}}
    const newPokemonArray = [...pokemons, newPokemon]
    setPokemons(newPokemonArray)
    console.log(newPokemon)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
         onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value= {addName} onChange={(e) => setAddName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp"  value= {addHp} onChange={(e) => setAddHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value= {addFrontUrl}
            onChange={(e) => setAddFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value= {addBackUrl}
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
