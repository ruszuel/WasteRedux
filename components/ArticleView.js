import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ArticleView = (props) => {
  return (
    <View className='gap-y-5 mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(26)}}>{props.title}</Text>
        <Text className='text-justify font-pregular' style={{fontSize: moderateScale(16)}}>{props.description}</Text>
  </View>
  )
}

export default ArticleView