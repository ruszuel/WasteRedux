import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const TriviaItem = ({item, index}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-plight text-white text-center' style={{width: scale(320), fontSize: moderateScale(13), paddingHorizontal: moderateScale(20)}}>{item.trivia}</Text>
    </View>
    
  )
}

export default TriviaItem