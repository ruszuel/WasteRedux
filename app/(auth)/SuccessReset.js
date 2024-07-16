import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const SuccessReset = () => {
  return (
    <SafeAreaView className="py-20 px-20 sm:py-30 h-screen flex justify-center">
        <View className='items-center p-14'>
            {/* Inmage here */}
            <Icon name='shield-check-fill' size={155} color='#81A969'/>
        </View>
        <View style={{gap:20}}>
            <Text className=" text-primary text-5xl text-center font-medium font-pbold">Success!</Text>
            <Text className="font-pregular text-center text-lg">Your password has been changed successfully!</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary p-5 rounded-xl">
                <Text className=" font-pmedium text-center text-xl text-white" onPress={() => router.replace('SuccessEmail')}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessReset