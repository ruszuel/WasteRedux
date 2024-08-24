import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const VerifyPass = () => {
  const [visible, setVisible] = useState(false)
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(32)}}>Verify your Password</Text>
            <Text className=' font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(16)}}>Re-enter your password to continue</Text>
        </View>
        
        <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
            <TextInput className='text-xl flex-1 font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='Password' keyboardType='default' cursorColor={'black'} secureTextEntry={visible ? false : true}/>    
            <Icon name={visible ? 'eye-fill' : 'eye-off-fill'}  style={{paddingHorizontal: moderateScale(25)}} size={24} color='gray' onPress={() => setVisible(visible ? false : true)}/>
        </View>
        
        <TouchableOpacity className=' bg-primary rounded-2xl' style={{padding: moderateScale(18)}} onPress={() => router.push('ChangeEmail')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(16.5)}}>Next</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default VerifyPass