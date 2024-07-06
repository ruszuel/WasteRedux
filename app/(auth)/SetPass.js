import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const SetPass = () => {
    const nav = useNavigation()
    useLayoutEffect(() => {
        nav.setOptions({
        headerShown: false,
        })
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    
  return (
    <SafeAreaView className="py-20 px-5 sm:py-30 h-screen flex justify-center">
      <View className='py-5 flex gap-2'>
        {/* header */}
        <Text className="text-4xl text-secondary text-center font-medium font-psemibold">
          Set up a password
        </Text>
        <Text className="text-lg text-center text-gray-400">
          Create a password with at least 6 letters or numbers
        </Text>
      </View>
      <View className="gap-5 py-10">
        <View className="flex-row items-center justify-center rounded-2xl border-2 border-gray-400">
          <TextInput className="flex-1 text-xl p-5" 
            placeholder='Password' 
            keyboardType='default' 
            secureTextEntry={!showPassword}
          /> 
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={'#aaa'}
            style={{paddingHorizontal: 24}}
            onPress={toggleShowPassword}
          />   
        </View> 
        <View className="flex-row items-center justify-center rounded-2xl border-2 border-gray-400">
          <TextInput className="flex-1 text-xl p-5" 
            placeholder='Confirm Password' 
            keyboardType='default' 
            secureTextEntry={!showPassword}
          /> 
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={'#aaa'}
            style={{paddingHorizontal: 24}}
            onPress={toggleShowPassword}
          />   
        </View>
      </View>
      <View>
        {/* Buttons */}
        <TouchableOpacity className="bg-primary p-5 rounded-xl">
          <Text className="text-center text-xl text-white" onPress={() => router.push('SuccessSignUp ')}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View className="gap-1 items-center justify-center mt-10">
        <Text className="text-[16px]">By continuing, you agree with Waste Redux'</Text>
        <Text className="text-[16px] text-primary font-medium">Terms of Service 
        <Text className="text-black font-normal"> and </Text> 
        Privacy Policy</Text>
      </View>
    </SafeAreaView>
  )
}

export default SetPass