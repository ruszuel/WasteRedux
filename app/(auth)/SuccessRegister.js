import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SuccessRegister = () => {
  return (
    <SafeAreaView className="px-20 flex-1 justify-center gap-10">
        <View className='items-center'>
            {/* Inmage here */}
            <Icon name='shield-check-fill' size={moderateScale(140)} color='#81A969'/>
        </View>
        <View className="gap-y-7">
            <Text className=" text-primary text-center font-medium font-pbold" style={{fontSize: moderateScale(30), lineHeight: 51}}>Success!</Text>
            <Text className="font-pregular text-center" style={{fontSize: moderateScale(14)}}>You have successfully registered a solid waste material</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary rounded-xl" style={{padding: moderateScale(15)}} onPress={() => router.replace('home')}>
                <Text className="font-pmedium text-center text-white" style={{fontSize: moderateScale(14)}}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessRegister