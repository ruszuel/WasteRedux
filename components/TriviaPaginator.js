import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'


const TriviaPaginator = ({ datas }) => {
  const {width} = useWindowDimensions();
  return (
    <View className='flex-row bg-black items-center justify-center'>
      {datas.map((_, i) => {
        const range = [(i - 1) * width, i * width, (i + 1) * width]

        return <View className='h-3 w-3 rounded-full bg-white ml-2' key={i.toString()}/>
      })}
    </View>
  )
}

export default TriviaPaginator