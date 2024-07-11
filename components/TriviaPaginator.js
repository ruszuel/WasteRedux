import { View, Text } from 'react-native'
import React from 'react'

const TriviaPaginator = ({ datas }) => {
  return (
    <View className='flex-row'>
      {datas.map((i) => {
        return <View className='h-3 w-3 rounded-full bg-secondary ml-2' key={i.toString()}/>
      })}
    </View>
  )
}

export default TriviaPaginator