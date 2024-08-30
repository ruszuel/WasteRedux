import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { moderateScale } from 'react-native-size-matters';

const mainSetting = () => {
  return (
    <SafeAreaView>
      <View className='flex-row justify-start items-center'>
        <Icon name='arrow-left-s-line' color='black' size={32}/>
        <Text className='font-psemibold flex-1' style={{fontSize: moderateScale(28)}}>Settings</Text>
      </View>
    </SafeAreaView>
  )
}

export default mainSetting