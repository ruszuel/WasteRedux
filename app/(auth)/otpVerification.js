import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const otpVerification = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth items-center'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Verify your Email</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>We've sent a verification code on your email address</Text>
        </View>
        <View className='flex-row justify-center items-center' style={{gap: 20}}>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad'/>   
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad'/>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad'/>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad'/> 
        </View>
        <TouchableOpacity className='p-6 bg-primary rounded-2xl w-[70%]'>
            <Text className='text-center text-white font-pmedium text-lg'>Verify</Text>
        </TouchableOpacity>
        <Link href={'/LogIn'} className='text-center font-pmedium text-md'>Didn't receive a code? <Text className='text-blue-400'>Resend</Text></Link>
        
    </SafeAreaView>
  )
}

export default otpVerification