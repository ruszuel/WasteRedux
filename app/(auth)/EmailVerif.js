import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Link, router } from 'expo-router'

const EmailVerif = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth items-center'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(32)}}>Verify your Email</Text>
            <Text className=' font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(17), width: scale(200)}}>We've sent a verification code on your email address</Text>
        </View>
        <View className='flex-row justify-center items-center' style={{gap: 20}}>
            <TextInput className='border border-gray-400 rounded-xl text-center' style={{fontSize: moderateScale(14,1), padding: moderateScale(16), width: scale(52), height: verticalScale(48)}} keyboardType='number-pad' maxLength={1} caretHidden/>   
            <TextInput className='border border-gray-400 rounded-xl text-center' style={{fontSize: moderateScale(14,1), padding: moderateScale(16), width: scale(52), height: verticalScale(48)}} keyboardType='number-pad' maxLength={1} caretHidden/>
            <TextInput className='border border-gray-400 rounded-xl text-center' style={{fontSize: moderateScale(14,1), padding: moderateScale(16), width: scale(52), height: verticalScale(48)}} keyboardType='number-pad' maxLength={1} caretHidden/>
            <TextInput className='border border-gray-400 rounded-xl text-center' style={{fontSize: moderateScale(14,1), padding: moderateScale(16), width: scale(52), height: verticalScale(48)}} keyboardType='number-pad' maxLength={1} caretHidden/> 
        </View>
        <TouchableOpacity className='bg-primary rounded-2xl w-[70%]' style={{padding: moderateScale(18)}} onPress={() => router.push('SuccessEmail')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(16.5)}}>Verify</Text>
        </TouchableOpacity>
        <Text className='text-center font-pmedium' style={{fontSize: moderateScale(13)}}>Didn't receive a code? <Link href={'/LogIn'} className='text-center font-pmedium text-md text-[#4787E7]'>Resend</Link> </Text>
       
        
    </SafeAreaView>
  )
}

export default EmailVerif