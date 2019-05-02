import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import colors from '../Configs/colors'

class Button extends Component {
  render(){
    const { onPress, disabled, style } = this.props
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.NEW_YORK_PINK,
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    color: colors.WHITE,
  }
})

export default Button