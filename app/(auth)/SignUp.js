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
        <Text className="text-secondary text-center font-medium font-psemibold" style={{fontSize: moderateScale(27)}}>
          Create an Account
        </Text>
        <Text className="text-lg text-center font-pregular text-gray-400" style={{fontSize: moderateScale(14)}}>
          Enter your personal details
        </Text>
      </View>
      <View className="gap-5" style={{paddingVertical: moderateScale(38)}}> 
        {/* Inputs */}
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} placeholder='First Name' keyboardType='default'/>    
        </View>
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} placeholder='Last Name' keyboardType='default' /> 
        </View>
        <View className="">
          <TextInput className="rounded-xl border-2 font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} placeholder='Email Address' keyboardType='default' /> 
        </View>
      </View>
      <View>
        {/* Buttons */}
        <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(15)}}>
          <Text className="text-center font-pregular text-white" style={{fontSize: moderateScale(14)}} onPress={() => router.push('SetPass')}>Next</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row gap-2 items-center justify-center mt-16">
        <Text className='font-pregular' style={{fontSize: moderateScale(12)}}>Already have an account?</Text>
        <Text className="text-primary font-pmedium" style={{fontSize: moderateScale(12)}} onPress={() => router.push('LogIn')}>Log in</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp