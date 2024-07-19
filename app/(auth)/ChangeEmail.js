import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const ChangeEmail = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Change Email</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>Enter your new email address</Text>
        </View>
        
        <View className='border border-gray-400 rounded-xl p-5'>
            <TextInput className='text-xl font-pregular' placeholder='Email Address' keyboardType='email-address' cursorColor={'black'}/>    
        </View>
        
        <TouchableOpacity className='p-6 bg-primary rounded-2xl' onPress={() => router.push('EmailVerif')}>
            <Text className='text-center text-white font-pmedium text-lg'>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChangeEmail