import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const SetUpPass = () => {
    const [visible, setVisible] = useState(false);
    const [newP, setNewP] = useState(false);
    const [confirm, setConfirm] = useState(false);
  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-4xl text-secondary'>Change Password</Text>
            <Text className=' font-pregular text-base text-gray-400 w-60 text-center'>Create a password with at least 6 letters or numbers</Text>
        </View>
        <View style={{gap: 30}}>
            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
                <TextInput className='text-xl flex-1' placeholder='Old Password' cursorColor={'black'} secureTextEntry={visible ? false : true}/>    
                <Icon name={visible ? 'eye-fill' : 'eye-off-fill'} size={24} color='gray' onPress={() => setVisible(visible ? false : true)}/>
            </View>

            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
                <TextInput className='text-xl flex-1' placeholder='New Password' keyboardType='default' cursorColor={'black'} secureTextEntry={newP ? false : true}/>    
                <Icon name={newP ? 'eye-fill' : 'eye-off-fill'} size={24} color='gray' onPress={() => setNewP(newP ? false : true)}/>
            </View>

            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center p-5'>
                <TextInput className='text-xl flex-1' placeholder='Confirm Password' keyboardType='default' cursorColor={'black'} secureTextEntry={confirm ? false : true}/>    
                <Icon name={confirm ? 'eye-fill' : 'eye-off-fill'} size={24} color='gray' onPress={() => setConfirm(confirm ? false : true)}/>
            </View>
        </View> 
        <TouchableOpacity className='p-6 bg-primary rounded-2xl' onPress={() => router.push('SuccessReset')}>
            <Text className='text-center text-white font-pmedium text-lg'>Update Password</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SetUpPass