import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'

const EmailVerif = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth items-center'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Verify your Email</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>We've sent a verification code on your email address</Text>
        </View>
        <View className='flex-row justify-center items-center' style={{gap: 20}}>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad' maxLength={1} caretHidden/>   
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad' maxLength={1} caretHidden/>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad' maxLength={1} caretHidden/>
            <TextInput className='border border-gray-400 rounded-xl p-5 text-2xl text-center w-[16%]' keyboardType='number-pad' maxLength={1} caretHidden/> 
        </View>
        <TouchableOpacity className='p-6 bg-primary rounded-2xl w-[70%]' onPress={() => router.push('SuccessEmail')}>
            <Text className='text-center text-white font-pmedium text-lg'>Verify</Text>
        </TouchableOpacity>
        <Text className='text-center font-pmedium text-md'>Didn't receive a code? <Link href={'/LogIn'} className='text-center font-pmedium text-md text-[#4787E7]'>Resend</Link> </Text>
       
        
    </SafeAreaView>
  )
}

export default EmailVerif