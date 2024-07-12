import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'

const History = () => {
  return (
    <SafeAreaView className='mt-10 px-5'>
      <View className='flex-row justify-between'>
        <Text className='font-batangas text-secondary text-5xl'>Scan <Text className='text-primary'>History</Text></Text>
        <Icon name='equalizer-line' size={28} color='gray'/>
      </View>
    </SafeAreaView>
  )
}

export default History