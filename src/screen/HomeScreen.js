import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import Search from '../compoenents/Search'
import Categories from '../data/Categories'
import CategoriesList from '../compoenents/CategoriesList'
import Recipes from '../compoenents/Recipes'
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* main Top */}
      <View style={styles.main}>
        <Text style={styles.name}>Hi, Benzamin</Text>
        <Ionicons name='notifications-outline' size={24} color='red' />
      </View>
      {/* search  */}
      <Search />
      {/* Categories */}
      <CategoriesList />
      {/* Recipes */}
      <Recipes />
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  image: {
    width: width,
    height: 500,
    objectFit: 'contain',
    marginTop: 10
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700'
  },
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
  },
  categories: {
    marginTop: 20
  },
  catetitle: {
    fontSize: 20,
    fontWeight: '700'
  },
  categorieslist: {
    width: 80,
    elevation: 11,
    shadowColor: 'black',
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 6,
    marginVertical: 3
  },
  recipe: {
    marginTop: 20
  },
  recipetitle: {
    fontSize: 18,
    fontWeight: '700'
  }
})
