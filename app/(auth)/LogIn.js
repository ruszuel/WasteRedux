import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Checkbox } from 'expo-checkbox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Icon from 'react-native-remix-icon';
import { useCameraPermissions } from 'expo-camera'

const LogIn = () => {
    const [isChecked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    // const [permission, requestPermission] = useCameraPermissions();

    // const handlePress = async () => {
    //     const cameraPermission = await requestPerm();
    //     if(cameraPermission){
    //       router.replace('home')
    //     }else {
    //        router.replace('home')
    //     }
    //   }
    
    //   const requestPerm = async () => {
    //     const status = await requestPermission();
    //     if(!status.granted){
    //       Alert.alert("Error", "Camera permission is required to use the Scan feature")
    //       return false;
    //     }
    //     return true;
    //   }

  return (
    <SafeAreaView className="py-20 px-5 sm:py-30 h-screen flex justify-center">
        <View className='py-5 flex gap-2'>
            {/* header */}
            <Text className='font-psemibold text-4xl text-secondary text-center'>
               Welcome Back
            </Text>
            <Text className="font-pregular text-lg text-center text-gray-400">
                Log in to continue
            </Text>
        </View>
        <View className="gap-5 py-10">
            {/* inputs */}
            <View style={{gap: 38}}>
                <View className="justify-center">
                    <TextInput className="text-xl p-5 rounded-xl border-2 border-gray-400 font-pregular" placeholder='Email address' keyboardType='default'/>    
                </View>
                <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
                    <TextInput className="flex-1 text-xl p-5" 
                        placeholder='Password' 
                        keyboardType='default' 
                        secureTextEntry={showPassword ? false : true}
                    /> 
                    <Icon
                        name={showPassword ? 'eye-fill' : 'eye-off-fill'}
                        size={24}
                        color={'gray'}
                        style={{paddingHorizontal: 24}}
                        onPress={() => setShowPassword(showPassword ? false : true)}
                    />   
                </View>
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
                <Text className="text-center text-xl text-white font-pregular" onPress={() => router.push("home")}>Log in</Text>
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