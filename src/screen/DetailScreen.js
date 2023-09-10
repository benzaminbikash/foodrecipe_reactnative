import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import ScrollData from '../compoenents/ScrollData'
import { blow, fire, watch } from '../images/Images'
import Integrent from '../compoenents/Integrent'
import Steps from '../compoenents/Steps'

const DetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const {
    image,
    name,
    description,
    time,
    difficulty,
    calories,
    ingredients,
    steps
  } = route.params.data
  return (
    <View style={styles.main}>
      <View style={styles.topArrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24} color='white' />
        </TouchableOpacity>
        <AntDesign name='hearto' size={24} color='white' />
      </View>
      {/* image of recide */}
      <View style={styles.secondmain}>
        <View style={styles.bakgroundImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        {/* details */}
        <Text style={styles.name}>{name}</Text>
        <ScrollView style={styles.detail} showsVerticalScrollIndicator={false}>
          <Text style={styles.description}>{description}</Text>
          {/* horizontal detail */}
          <ScrollView horizontal>
            <ScrollData color='#ce8e99' img={watch} info={time} />
            <ScrollData color='#55aeee' img={blow} info={difficulty} />
            <ScrollData color='#d3b636' img={fire} info={calories} />
          </ScrollView>
          <Integrent data={ingredients} />
          <Steps data={steps} />
        </ScrollView>
      </View>
    </View>
  )
}

export default DetailScreen
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'green'
  },
  secondmain: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 200,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center'
  },
  topArrow: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
    alignItems: 'center'
  },
  bakgroundImage: {
    width: 200,
    height: 200,
    marginTop: -100,
    backgroundColor: 'white',
    elevation: 50,
    shadowColor: 'black',
    borderRadius: 140
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    objectFit: 'contain'
  },
  name: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10
  },
  detail: {
    marginTop: 10,
    paddingHorizontal: 10
  },
  description: {
    fontSize: 16,
    color: 'black'
  }
})
