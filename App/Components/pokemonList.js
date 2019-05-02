import React, { Component } from 'react'
import {observer} from 'mobx-react'
import { ScrollView, StyleSheet } from 'react-native'

import Card from './card'

@observer
class PokemonList extends Component {
  render(){
    return (
      <ScrollView style={styles.pokemonList}>
        {
          this.props.pokemons.map((pokemon, index) => (
            <Card key={index} image={pokemon.image} title={pokemon.name} onPress={() => this.props.removePokemon(pokemon)} />
          ))
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  pokemonList: {
    flex:1,
  }
})

export default PokemonList