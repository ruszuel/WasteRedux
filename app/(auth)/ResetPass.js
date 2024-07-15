import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import Icon from 'react-native-remix-icon';

const ResetPass = () => {
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Reset Password</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>Create a password with at least 6 letters or numbers</Text>
        </View>
        <View style={{gap: 30}}>
            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
                <TextInput className='text-xl' placeholder='New Password' keyboardType='default' cursorColor={'black'}/>    
                <Icon name='eye-fill' size={24} color='gray'/>
            </View>

            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
                <TextInput className='text-xl' placeholder='Confirm Password' keyboardType='default' cursorColor={'black'}/>    
                <Icon name='eye-fill' size={24} color='gray'/>
            </View>
        </View>
        <TouchableOpacity className='p-6 bg-primary rounded-2xl'>
            <Text className='text-center text-white font-pmedium text-lg'>Reset Password</Text>
        </TouchableOpacity>
        <Link href={'/LogIn'} className='text-center text-primary font-medium text-md'>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ResetPass