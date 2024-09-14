import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ChangeEmail = () => {
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Change Email</Text>
            <Text className='font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14)}}>Enter your new email address</Text>
        </View>
        
        <View className='border border-gray-400 rounded-xl'>
          <TextInput className='font-pregular' style={{fontSize: moderateScale(13.5), padding: moderateScale(13.5)}} placeholder='Email Address' keyboardType='email-address' cursorColor={'black'}/>    
        </View>
        
        <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(15)}} onPress={() => router.push('EmailVerif')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChangeEmail