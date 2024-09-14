import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { moderateScale } from 'react-native-size-matters'

const History = () => {
  return (
    <SafeAreaView className='px-5' style={{paddingTop: moderateScale(40)}}>
      <View className='flex-row justify-between items-center'>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(34)}}>Scan <Text className='text-primary'>History</Text></Text>
        <Icon name='equalizer-line' size={moderateScale(24)} color='gray'/>
      </View>
    </SafeAreaView>
  )
}

export default History