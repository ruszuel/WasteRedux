import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { router } from 'expo-router'

const contactUs = () => {
  return (
    <SafeAreaView className='px-5 gap-y-5' style={{paddingTop: verticalScale(20)}}>
      <View className='gap-y-7'>
        <Text className='font-psemibold' style={{fontSize: moderateScale(28)}}>Contact us</Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(16)}}>Let us know how we can help</Text>
      </View>
      <View className='gap-y-7'>
        <View>
            <TextInput className='border border-gray-400 rounded-xl font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='First name' keyboardType='default' cursorColor={'black'}/>            
        </View>
        <View>
            <TextInput className='border border-gray-400 rounded-xl font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='Last name' keyboardType='default' cursorColor={'black'}/>            
        </View>
        <View>
            <TextInput className='border border-gray-400 rounded-xl font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='Email address' keyboardType='email-address' cursorColor={'black'}/>            
        </View>
        <View className='flex-row'>
            <TextInput className='font-pregular flex-[0.1] border border-gray-400 rounded-tl-xl rounded-bl-xl' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='+63' editable={false}/>
            <TextInput className='font-pregular flex-[0.9] border border-l-0 border-gray-400 rounded-tr-xl rounded-br-xl' style={{fontSize: moderateScale(14,1), padding: moderateScale(16)}} placeholder='Phone Number' keyboardType='number-pad' cursorColor={'black'}/>
        </View>
        <View>
            <TextInput className='border border-gray-400 rounded-xl font-pregular' style={{fontSize: moderateScale(14,1), padding: moderateScale(16), height: verticalScale(150), textAlignVertical: 'top'}} placeholder='Leave us a message' keyboardType='default' cursorColor={'black'} multiline={true}/>            
        </View>
        <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(18)}} onPress={() => router.push('contactSuccess')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(16.5)}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default contactUs