import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import Icon from 'react-native-remix-icon';
import SettingsButton from '@/components/SettingsButton';
import { router } from 'expo-router';

const legalPolicies = () => {
  return (
    <SafeAreaView  className='flex-1 gap-y-10' style={{paddingTop: verticalScale(20)}}>
      <View className='flex-row items-center px-5'>
        <Icon name='arrow-left-s-line' color='black' size={moderateScale(24)} onPress={() => router.back()}/>
        <Text className='font-psemibold text-center flex-[0.9]' style={{fontSize: moderateScale(22)}}>Legal & Policies</Text>
      </View>

      <View>
        <SettingsButton name='Terms and Condition' push='termsCondition'/>
        <SettingsButton name='Privacy Policy' push='privacyPolicy'/>
        <SettingsButton name='App Policy and Regulation' push=''/>
      </View>
    </SafeAreaView>
  )
}

export default legalPolicies