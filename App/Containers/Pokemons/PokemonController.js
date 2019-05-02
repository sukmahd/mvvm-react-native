import React, { Component } from 'react'
import PokemonView from './PokemonView'

import Images from '../../Assets/images'

const images = Object.values(Images)

class PokemonController extends Component {
  state = {
    pokemonImage: Images.image1,
    pokemonName: ''
  }

  setRandomPokemonImage = () => {
    const rand = Math.floor(Math.random() * 10)
    this.setState({ pokemonImage: images[rand] })
  }

  setPokemonName = (value) => {    
    this.setState({ pokemonName: value })    
  }

  clearPokemonName = () => {
    this.setState({ pokemonName: '' })
  }

  savePokemon = () => {    
    this.props.viewModel.addPokemon({
      image: this.state.pokemonImage,
      name: this.state.pokemonName
    })
  }

  addPokemon = () => {
    this.savePokemon()
    this.clearPokemonName()
  }

  removePokemon = (pokemon) => {
    this.props.viewModel.removePokemon(pokemon)
  }

  render(){
    const { viewModel } = this.props

    return (
      <PokemonView
        pokemons={viewModel.getPokemons()}
        pokemonImage={this.state.pokemonImage}
        randomizePokemon={this.setRandomPokemonImage}
        setPokemonName={this.setPokemonName}
        addPokemon={this.addPokemon}
        removePokemon={this.removePokemon}
        pokemonName={this.state.pokemonName}
        shouldDisableSubmit={!this.state.pokemonName}
      />
    )
  }
}

export default PokemonController
