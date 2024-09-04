import { View, Text } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const ArticleParags = (props) => {
  return (
    <View style={{width: '100%'}} className='mb-5'>
      <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>{props.parags}{' '}
        <Text className='font-pbold text-secondary'>{props.bold} </Text>
        {props.con}
      </Text>
    </View>
  )
}

export default ArticleParags