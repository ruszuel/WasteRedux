import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const SuccessSignUp = () => {
  return (
    <SafeAreaView className="py-20 px-20 sm:py-30 h-screen flex justify-center">
        <View className='items-center p-14'>
            {/* Inmage here */}
            <MaterialCommunityIcons
                name='shield-check'
                color={'#81A969'}
                size={152}
            />
        </View>
        <View className="gap-5">
            <Text className=" text-primary text-5xl text-center font-medium font-pbold">You're all set!</Text>
            <Text className="text-center text-lg">Your account has been successfully created!</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary p-5 rounded-xl">
                <Text className="text-center text-2xl text-white" onPress={() => router.replace('LogIn')}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessSignUp