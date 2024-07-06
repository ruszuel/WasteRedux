import { View, Text, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const Items = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex-1 justify-center items-center'>
      <Image source={item.image} 
        style={{flex: 0.7, justifyContent: 'center', width, resizeMode: 'contain'}}/>

      <View className='flex-[0.3] gap-5'> 
        <Text className='text-center text-3xl font-pbold text-secondary w-96'>{item.title}</Text>
        <Text className='text-center font-pregular text-lg w-96' >{item.description}</Text>
      </View>

      <TouchableOpacity>
        <Text>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Items