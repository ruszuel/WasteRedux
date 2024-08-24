import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router'

const SignUp = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView className="flex-1 px-5  justify-center" style={{paddingVertical: moderateScale(80)}}>
      <View className='flex gap-2' style={{paddingVertical: moderateScale(20)}}>
        {/* header */}
        <Text className="text-secondary text-center font-medium font-psemibold" style={{fontSize: moderateScale(32)}}>
          Create an Account
        </Text>
        <Text className="text-lg text-center font-pregular text-gray-400" style={{fontSize: moderateScale(16)}}>
          Enter your personal details
        </Text>
      </View>
      <View className="gap-5" style={{paddingVertical: moderateScale(38)}}> 
        {/* Inputs */}
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='First Name' keyboardType='default'/>    
        </View>
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{padding: width * 0.041, fontSize: width * 0.04}} placeholder='Last Name' keyboardType='default' /> 
        </View>
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{padding: width * 0.041, fontSize: width * 0.04}} placeholder='Email Address' keyboardType='default' /> 
        </View>
      </View>
      <View>
        {/* Buttons */}
        <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: width * 0.045}}>
          <Text className="text-center font-pregular text-white" style={{fontSize: width * 0.04}} onPress={() => router.push('SetPass')}>Next</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-2 items-center justify-center mt-16">
        <Text style={{fontSize: moderateScale(14)}}>Already have an account?</Text>
        <Text className="text-primary font-medium" style={{fontSize: moderateScale(14)}} onPress={() => router.push('LogIn')}>Log in</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp