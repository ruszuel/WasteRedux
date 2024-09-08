import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const TermsContent = ({head, content}) => {
  return (
    <View className='gap-y-5 mb-5'>
      <Text className='font-psemibold' style={{fontSize: moderateScale(16)}}>{head}</Text>
      <Text className='font-pregular text-justify' style={{fontSize: moderateScale(15)}}>{content}</Text>
    </View>
  )
}

export default TermsContent