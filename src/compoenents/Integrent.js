import { View, Text } from 'react-native'
import React from 'react'

const Integrent = ({ data }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ingredients:</Text>
      {data.map((item, index) => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: 'red',
                borderRadius: 10
              }}
            ></View>
            <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
              {item}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default Integrent
