import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'

const TriviaItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex-1 justify-center items-center gap-2'>
      <Text className='font-plight text-base text-white text-center' style={{width}}>{item.trivia}</Text>
    </View>
    
  )
}

export default TriviaItem