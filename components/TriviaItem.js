import { View, Text } from 'react-native'
import React from 'react'

const TriviaItem = ({item}) => {
  return (
    <View className='justify-center items-center'>
      <Text className='font-plight text-sm text-white w-80 '>{item.trivia}</Text>
    </View>
  )
}

export default TriviaItem