import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const VerifyPass = () => {
  const [visible, setVisible] = useState(false)
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Verify your Password</Text>
            <Text className=' font-pregular text-base text-gray-400 text-center'>Re-enter your password to continue</Text>
        </View>
        
        <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
            <TextInput className='text-xl flex-1' placeholder='Password' keyboardType='default' cursorColor={'black'} secureTextEntry={visible ? false : true}/>    
            <Icon name={visible ? 'eye-fill' : 'eye-off-fill'} size={24} color='gray' onPress={() => setVisible(visible ? false : true)}/>
        </View>
        
        <TouchableOpacity className='p-6 bg-primary rounded-2xl' onPress={() => router.push('ChangeEmail')}>
            <Text className='text-center text-white font-pmedium text-lg'>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default VerifyPass