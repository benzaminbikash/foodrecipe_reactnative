import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ScrollData = ({ color, img, info }) => {
  return (
    <View style={[styles.main, { backgroundColor: color }]}>
      <Image source={img} style={styles.image} />
      <Text style={styles.info}>{info}</Text>
    </View>
  )
}

export default ScrollData

const styles = StyleSheet.create({
  main: {
    width: 90,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 2
  },
  info: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black'
  }
})
