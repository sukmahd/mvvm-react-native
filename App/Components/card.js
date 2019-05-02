import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../Configs/colors'
import Image from '../Components/image'
import Button from '../Components/button'


class Card extends Component {
  render(){
    const { image, title, onPress } = this.props

    return (
      <View style={styles.card}>
        <Image source={image}/>
        <Text style={styles.text}>{title}</Text>
        <Button onPress={onPress} >Remove</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: 5,
    margin: 5,
    backgroundColor: colors.CADET_BLUE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    padding: 10,
    color: colors.WHITE
  }
})

export default Card