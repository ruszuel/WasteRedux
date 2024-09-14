import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const NumberedContent = (props) => {
  return (
    <View className='flex-row gap-x-3 mb-5'>
      <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>{props.num}</Text>
      <Text className='font-pregular text-justify flex-[1]' style={{fontSize: moderateScale(14), width: '100%'}}>{props.content}</Text>
    </View>
  )
}

export default NumberedContent