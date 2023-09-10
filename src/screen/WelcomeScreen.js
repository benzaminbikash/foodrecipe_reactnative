import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
const { width, height } = Dimensions.get('window')
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require('../images/main.png')} style={styles.image} />
      <Text style={styles.title}>40K+ Premium Recipes</Text>
      <Text style={styles.chef}>Cook Like A Chef</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.button}
        onPress={() => navigation.navigate('home')}
      >
        <Text style={styles.buttontext}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  image: {
    width: width,
    height: 500,
    objectFit: 'contain',
    marginTop: 10
  },
  title: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold'
  },
  chef: {
    fontSize: 40,
    paddingVertical: 25,
    fontWeight: '900'
  },
  button: {
    backgroundColor: '#e94f4f',
    width: '80%',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttontext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})
