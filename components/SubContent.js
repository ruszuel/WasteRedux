import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const SubContent = (props) => {
  return (
    <View className='mb-5'>
      <Text className='font-pbold text-secondary text-justify' style={{fontSize: moderateScale(16)}}>{props.title} 
        <Text className='font-pregular text-justify text-black' style={{fontSize: moderateScale(16)}}> {props.desc}</Text>
        </Text>
      
    </View>
  )
}

export default SubContent