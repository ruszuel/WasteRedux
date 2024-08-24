import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedRef,useAnimatedStyle, interpolate, Extrapolation} from 'react-native-reanimated';

const TriviaItem = ({item, index}) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='font-plight text-white text-center' style={{width: scale(320), fontSize: moderateScale(15), paddingHorizontal: moderateScale(20)}}>{item.trivia}</Text>
    </View>
    
  )
}

export default TriviaItem