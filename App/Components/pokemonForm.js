import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Image from './image'
import Button from './button'
import Input from './input'

import colors from '../Configs/colors'

class pokemonForm extends Component {
  render(){
    const {
      pokemonImage,
      randomizePokemon,
      setPokemonName,
      addPokemon,
      pokemonName
    } = this.props

    return (
      <View style={styles.pokemonForm}>
        <Image source={pokemonImage}/>
        <Button onPress={randomizePokemon} >Show Random</Button>
        <Input value={pokemonName} onChange={setPokemonName} placeholder='Enter Pokemon Name'/>
        <Button onPress={addPokemon}>Add to Pokedexx</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pokemonForm: {
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 50,
    margin: 20,
    flexDirection: 'column',
    backgroundColor: colors.CADET_BLUE
  }
})

export default pokemonForm