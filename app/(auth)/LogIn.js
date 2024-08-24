import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert, Dimensions, PixelRatio } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Checkbox } from 'expo-checkbox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Icon from 'react-native-remix-icon';


const LogIn = () => {
    const [isChecked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const {height, width} = Dimensions.get('window');
    const fontScales = PixelRatio.getFontScale();
    const getFontSize = size => size / fontScales;
    
  return (
    <SafeAreaView className="flex-1 px-5 justify-center" style={{paddingVertical: width * 0.16}}>
        <View className='flex gap-2' style={{paddingTop: height * 0.07}}>
            {/* header */}
            <Text className='font-psemibold text-secondary text-center' style={{fontSize: width * 0.08, lineHeight: 45 }}>
               Welcome Back
            </Text>
            <Text className="font-pregular text-center text-gray-400" style={{fontSize: width * 0.04}}>
                Log in to continue
            </Text>
        </View>
        <View className="py-10" style={{gap: 20}}>
            {/* inputs */}
            <View style={{gap: 35}}>
                <View className="justify-center">
                    <TextInput className="rounded-xl border-2 border-gray-400 font-pregular" style={{padding: width * 0.04, fontSize: width * 0.04}} placeholder='Email address' keyboardType='default'/>    
                </View>
                <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
                    <TextInput className="flex-1" 
                        style={{padding: width * 0.04, fontSize: width * 0.04}}
                        placeholder='Password' 
                        keyboardType='default' 
                        secureTextEntry={showPassword ? false : true}
                    /> 
                    <Icon
                        name={showPassword ? 'eye-fill' : 'eye-off-fill'}
                        size={width * 0.05}
                        color={'gray'}
                        style={{paddingHorizontal: 24}}
                        onPress={() => setShowPassword(showPassword ? false : true)}
                    />   
                </View>
            </View>
            
            <View className="flex-row justify-between" style={{paddingTop: width * 0.04}}>
                <View className="flex-row items-center gap-2">
                 <Checkbox value={isChecked} onValueChange={setChecked} color={'#81A969'} style={{width: width * 0.035, height: height * 0.018}}/>
                 <Text className='font-pregular' style={{fontSize: width * 0.035}}>Remember me</Text>
                </View>
                <View>
                    <Text className="text-primary font-psemibold text-base" style={{fontSize: width * 0.035}} onPress={() => router.push('ForgotPass')}>Forgot Password</Text>
                </View>
            </View>
        </View>
        <View>
            {/* Buttons */}
            <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: width * 0.04}} onPress={() => router.push("home")}>
                <Text className="text-center text-white font-pregular" style={{fontSize: width * 0.045}}>Log in</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-6" style={{padding: width * 0.035}}>
            {/* or seperator */}
            <View className="flex-1 h-[1px] bg-slate-400 border-solid"></View>
            <View>
                <Text className="text-center text-slate-400" style={{fontSize: width * 0.035}}>or</Text>
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
                <Text className="text-center self-center text-primary font-psemibold" style={{fontSize: width * 0.045}}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 items-center justify-center mt-16" style={{marginTop: height * 0.09}}>
            <Text style={{fontSize: width * 0.035}}>Don't have an account?</Text>
            <Text className="text-primary font-medium" style={{fontSize: width * 0.035}} onPress={() => router.push("SignUp")}>Register</Text>
        </View>
    </SafeAreaView>
  )
}

export default LogIn