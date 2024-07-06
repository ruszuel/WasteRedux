import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Checkbox } from 'expo-checkbox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const LogIn = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
           headerShown: false,
        })
    }, []);

    const [isChecked, setChecked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 

  return (
    <SafeAreaView className="py-20 px-5 sm:py-30 h-screen flex justify-center">
        <View className='py-5 flex gap-2'>
            {/* header */}
            <Text className="text-4xl text-secondary text-center font-medium font-psemibold">
               Welcome Back
            </Text>
            <Text className="text-lg text-center text-gray-400">
                Log in to continue
            </Text>
        </View>
        <View className="gap-5 py-10">
            {/* inputs */}
            <View className="">
                <TextInput className="text-xl p-5 rounded-2xl border-2 border-gray-400" placeholder='Email address' keyboardType='default'/>    
            </View>
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
            <View className="pt-5 flex-row justify-between">
                <View className="flex-row gap-3">
                 <Checkbox value={isChecked} onValueChange={setChecked} color={'#81A969'}/>
                 <Text className="text-base">Remember me</Text>
                </View>
                <View>
                    <Text className="text-primary font-medium text-base">Forgot Password</Text>
                </View>
            </View>
        </View>
        <View>
            {/* Buttons */}
            <TouchableOpacity className="bg-primary p-5 rounded-xl">
                <Text className="text-center text-xl text-white font-pregular" onPress={() => router.push("Onboard")}>Log in</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-6 p-5">
            {/* or seperator */}
            <View className="flex-1 h-[1px] bg-slate-400 border-solid"></View>
            <View>
                <Text className="text-center text-lg text-slate-400">or</Text>
            </View>
            <View className="flex-1 h-[1px] bg-slate-400 border-solid"></View>
        </View>
        <View className='ml-3'>
            {/* Google API */}
            <TouchableOpacity className="p-4 bg-white rounded-full flex-row items-center justify-center gap-x-4">
                <MaterialCommunityIcons
                name='google'
                color={'#81A969'}
                size={24}/>
                <Text className="text-center text-2xl text-primary font-psemibold">Continue with Google</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 items-center justify-center mt-16">
            <Text className="text-[16px]">Don't have an account?</Text>
            <Text className="text-[16px] text-primary font-medium" onPress={() => router.push("SignUp")}>Register</Text>
        </View>
    </SafeAreaView>
  )
}

export default LogIn