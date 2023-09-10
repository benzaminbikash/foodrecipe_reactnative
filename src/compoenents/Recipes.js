import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native'
import React from 'react'
import { recipeList } from '../data/Recies'
const { width, height } = Dimensions.get('window')
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const Recipes = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.recipe}>
      <Text style={styles.recipetitle}>Recipes</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
        data={recipeList}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.main}
              activeOpacity={1}
              onPress={() => navigation.navigate('detail', { data: item })}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.handleInfo}>
                <Text style={styles.time}>{item.time}</Text>
                <Text>|</Text>
                <View style={styles.rating}>
                  <Text> {item.rating}</Text>
                  <Entypo name='star' size={17} color='red' />
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default Recipes
const styles = StyleSheet.create({
  recipe: {
    marginTop: 20,
    marginBottom: 210
  },
  recipetitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
  main: {
    width: width / 2 - 30,
    backgroundColor: 'white',
    elevation: 8,
    height: 240,
    marginTop: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    objectFit: 'contain'
  },
  handleInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    gap: 5
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2
  },
  name: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: 'bold'
  }
})
