import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import SettingsButton from '@/components/SettingsButton';
import { router } from 'expo-router';

const mainSetting = ({props}) => {
  return (
    <SafeAreaView className='flex-1 gap-y-10' style={{paddingTop: verticalScale(20)}}>
      <View className='flex-row items-center px-5'>
        <Icon name='arrow-left-s-line' color='black' size={32} onPress={() => router.back()}/>
        <Text className='font-psemibold text-center flex-[0.9]' style={{fontSize: moderateScale(28)}}>Settings</Text>
      </View>

      <View>
        <SettingsButton name='User Guide and Tutorial' push='Onboard'/>
        <SettingsButton name='About this app' push='aboutUs'/>
        <SettingsButton name='Legal & Policies' push='legalPolicies'/>
      </View>

      <View>
        <SettingsButton name='Contact us' push='contactUs'/>
      </View>
    </SafeAreaView>
  )
}

export default mainSetting