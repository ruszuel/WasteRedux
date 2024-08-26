import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const CustomButton = ({flatlistIndex, flatlistRef, dataLength}) => {
  return (
    <Pressable className='items-center justify-center bg-primary w-3/4 rounded-xl' style={{height: verticalScale(50)}}>
      <Text className='font-pmedium text-white text-xl'>Let's Go!</Text>
    </Pressable>
  )
}

export default CustomButton