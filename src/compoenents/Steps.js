import { View, Text } from 'react-native'
import React from 'react'

const Steps = ({ data }) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', fontWeight: 'bold' }}>
        Steps:
      </Text>
      {data.map((item, index) => {
        return (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 7 }}>
            <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
              {index + 1}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '400', color: 'black' }}>
              {item}
            </Text>
          </View>
        )
      })}
    </View>
  )
}

export default Steps
