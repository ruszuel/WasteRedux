import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SuccessReset = () => {
  return (
    <SafeAreaView className="px-20 flex-1 justify-center gap-10">
        <View className='items-center'>
            {/* Inmage here */}
            <Icon name='shield-check-fill' size={200} color='#81A969'/>
        </View>
        <View className='gap-7'>
            <Text className=" text-primary text-center font-medium font-pbold" style={{fontSize: moderateScale(40), lineHeight: 51}}>Success!</Text>
            <Text className="font-pregular text-center" style={{fontSize: moderateScale(16)}}>Your password has been changed successfully!</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary rounded-xl" style={{padding: moderateScale(18)}} onPress={() => router.replace('LogIn')}>
                <Text className=" font-pmedium text-center text-white" style={{fontSize: moderateScale(16.5)}}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessReset