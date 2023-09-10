import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
const Search = () => {
  return (
    <View style={styles.textField}>
      <FontAwesome name='search' size={24} color='red' />
      <TextInput placeholder='enter your favorite recipe' />
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'white',
    marginTop: 15,
    flexDirection: 'row',
    gap: 10,
    shadowColor: 'black',
    elevation: 10,
    height: 50,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5
  }
})
