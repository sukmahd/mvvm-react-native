import React, { Component, Fragment } from "react";

import PokemonList from '../../Components/pokemonList' 
import PokemonForm from '../../Components/pokemonForm'

class PokemonView extends Component {
  render(){  
    
    const {
      pokemons,
      randomizePokemon,
      setPokemonName,
      addPokemon,
      pokemonImage,
      pokemonName,
      removePokemon,
      shouldDisableSubmit
    } = this.props
        
    return (
      <Fragment>
        <PokemonForm
          randomizePokemon={randomizePokemon}
          setPokemonName={setPokemonName}
          addPokemon={addPokemon}
          pokemonName={pokemonName}
          pokemonImage={pokemonImage}
          shouldDisableSubmit={shouldDisableSubmit}
        />
        <PokemonList
          pokemons={pokemons}
          removePokemon={removePokemon}
        />
      </Fragment>
    )
  }
}

export default PokemonView
