import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const CustomText = ({bold, light}) => {
  return (
    <View className='justify-center'>
    <Text className='text-justify'>
        <Text className='font-psemibold' style={{fontSize: moderateScale(14.5)}}>{bold} </Text>
        <Text className='font-plight' style={{fontSize: moderateScale(14.5)}}> {light}</Text>
      </Text>
      
    </View>
  )
}

export default CustomText