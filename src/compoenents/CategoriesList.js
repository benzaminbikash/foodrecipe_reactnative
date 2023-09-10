import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import Categories from '../data/Categories'

const CategoriesList = () => {
  const [selected, setSelected] = useState(1)
  return (
    <View style={styles.categories}>
      <Text style={styles.catetitle}>Categories</Text>
      <View style={{ marginTop: 5 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Categories.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelected(index + 1)}
                key={item.id}
                style={[
                  styles.categorieslist,
                  {
                    backgroundColor: selected === index + 1 ? 'red' : 'white'
                  }
                ]}
              >
                <Text
                  style={{
                    color: selected === index + 1 ? 'white' : 'black',
                    fontWeight: 'bold',
                    fontSize: 15
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
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
  }
})
