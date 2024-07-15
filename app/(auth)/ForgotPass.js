import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const ForgotPass = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Forgot Password</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>Enter your email below to receive a password reset link</Text>
        </View>
        <View >
            <TextInput className='border border-gray-400 rounded-xl p-5 text-xl' placeholder='Email address' keyboardType='default'/>    
        </View>
        <TouchableOpacity className='p-6 bg-primary rounded-2xl'>
            <Text className='text-center text-white font-pmedium text-lg'>Send Email</Text>
        </TouchableOpacity>
        <Link href={'/LogIn'} className='text-center text-primary font-pregular text-md'>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ForgotPass