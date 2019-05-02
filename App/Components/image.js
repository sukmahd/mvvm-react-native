import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'

class ImageComponent extends Component {
  render(){
    const { style, source } = this.props
    
    return this.props.source ? (      
      <Image style={styles.image} source={source} />
    ) : null
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    margin: 5
  },
})

export default ImageComponent