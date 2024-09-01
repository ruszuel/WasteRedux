import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const mainSetting = () => {
  return (
    <SafeAreaView className='flex-1 px-5'>
      <View className='flex-row justify-start items-center'>
        <Icon name='arrow-left-s-line' color='black' size={32} className='flex-[0.1]'/>
        <Text className='font-psemibold text-center flex-[0.8]' style={{fontSize: moderateScale(28)}}>Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default mainSetting