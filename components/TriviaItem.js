import { View, Text } from 'react-native'
import React from 'react'

const TriviaItem = ({item}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <View className='justify-center items-center'>
        <Text className='font-plight text-sm text-white w-full '>{item.trivia}</Text>
      </View>
    </View>
    
  )
}

export default TriviaItem