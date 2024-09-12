import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const CustomParagraph = (props) => {
  return (
    <View>
      <Text className='font-pregular text-justify mb-1' style={{fontSize: moderateScale(15)}}>{props.text}</Text>
    </View>
  )
}

export default CustomParagraph