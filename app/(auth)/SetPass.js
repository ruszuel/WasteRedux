import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

const SetPass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [confPass, setConfPass] = useState(false);
    const toggleShowPassword = () => { 
        setShowPassword(!showPassword); 
    }; 
    const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView className="px-5 flex-1 justify-center" style={{paddingVertical: width * 0.16}}>
      <View className='flex gap-2 justify-center' style={{paddingVertical: moderateScale(10)}}>
        {/* header */}
        <Text className="text-secondary text-center font-psemibold" style={{fontSize: moderateScale(32)}}>
          Set up a password
        </Text>
        <Text className="text-center self-center font-pregular text-gray-400" style={{fontSize: moderateScale(16), width: scale(230)}}>
          Create a password with at least 6 letters or numbers
        </Text>
      </View>
      <View className="gap-7" style={{paddingVertical: moderateScale(38)}}>
        <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
          <TextInput className="flex-1 font-pregular" 
            style={{fontSize: moderateScale(14,1), padding: moderateScale(17)}}
            placeholder='Password' 
            keyboardType='default' 
            secureTextEntry={!showPassword}
          /> 
          <MaterialCommunityIcons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={'#aaa'}
            style={{paddingHorizontal: moderateScale(20)}}
            onPress={toggleShowPassword}
          />   
        </View> 
        <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
          <TextInput className="flex-1 font-pregular" 
            style={{fontSize: moderateScale(14,1), padding: moderateScale(17)}}
            placeholder='Confirm Password' 
            keyboardType='default' 
            secureTextEntry={confPass ? false : true}
          /> 
          <MaterialCommunityIcons
            name={confPass ? 'eye-off' : 'eye'}
            size={24}
            color={'#aaa'}
            style={{paddingHorizontal:moderateScale(20)}}
            onPress={() => setConfPass(confPass ? false : true)}
          />   
        </View>
      </View>
      <View>
        {/* Buttons */}
        <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(18)}} onPress={() => router.push('SuccessSignUp ')}>
          <Text className="text-center font-pregular text-white" style={{fontSize: moderateScale(16.5)}}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View className="items-center justify-center" style={{marginTop: moderateScale(60)}}>
        <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>By continuing, you agree with Waste Redux'</Text>
        <Text className="text-primary font-medium font-pregular" style={{fontSize: moderateScale(14)}}>Terms of Service 
        <Text className="text-black font-normal font-pregular"> and </Text> 
        Privacy Policy</Text>
      </View>
    </SafeAreaView>
  )
}

export default SetPass