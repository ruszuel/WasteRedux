import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ForgotPass = () => {
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(32)}}>Forgot Password</Text>
            <Text className=' font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(16), width: scale(230)}}>Enter your email below to receive a password reset link</Text>
        </View>
        <View >
            <TextInput className='border border-gray-400 rounded-xl font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='Email address' keyboardType='default' cursorColor={'black'}/>    
        </View>
        <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(18)}} onPress={() => router.push('otpVerification')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(16.5)}}>Send Email</Text>
        </TouchableOpacity>
        <Link href={'/LogIn'} className='text-center text-primary font-pmedium' style={{fontSize: moderateScale(13)}}>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ForgotPass