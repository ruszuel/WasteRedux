import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const CustomText = ({bold, light}) => {
  return (
    <View className='justify-center'>
    <Text className='text-justify'>
        <Text className='font-pbold' style={{fontSize: moderateScale(15)}}>{bold} </Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(15)}}> {light}</Text>
      </Text>
      
    </View>
  )
}

export default CustomText