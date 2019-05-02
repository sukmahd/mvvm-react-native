import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

import colors from '../Configs/colors'

class Input extends Component {
  render(){
    const { placeholder, value, onChange } = this.props

    return (
      <TextInput onChangeText={onChange} style={styles.textInput} placeholder={placeholder} value={value}/>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    borderRadius:5,
    paddingHorizontal: 20,
    backgroundColor: colors.WHITE
  }
})

export default Input 