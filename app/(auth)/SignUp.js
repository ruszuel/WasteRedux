import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { router } from 'expo-router'

const SignUp = () => {
  const nav = useNavigation()
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <SafeAreaView className="py-20 px-5 sm:py-30 h-screen flex justify-center">
      <View className='py-5 flex gap-2'>
        {/* header */}
        <Text className="text-4xl text-secondary text-center font-medium font-psemibold">
          Create an Account
        </Text>
        <Text className="text-lg text-center text-gray-400">
          Enter your personal details
        </Text>
      </View>
      <View className="gap-5 py-10"> 
        {/* Inputs */}
        <View className="">
          <TextInput className="text-xl p-5 rounded-2xl border-2 border-gray-400" placeholder='First Name' keyboardType='default'/>    
        </View>
        <View className="">
          <TextInput className="text-xl p-5 rounded-2xl border-2 border-gray-400" placeholder='Last Name' keyboardType='default' /> 
        </View>
        <View className="">
          <TextInput className="text-xl p-5 rounded-2xl border-2 border-gray-400" placeholder='Email Address' keyboardType='default' /> 
        </View>
      </View>
      <View>
        {/* Buttons */}
        <TouchableOpacity className="bg-primary p-5 rounded-xl">
          <Text className="text-center text-xl text-white" onPress={() => router.push('SetPass')}>Next</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-2 items-center justify-center mt-16">
        <Text className="text-[16px]">Already have an account?</Text>
        <Text className="text-[16px] text-primary font-medium" onPress={() => router.push('LogIn')}>Log in</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp