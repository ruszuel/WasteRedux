import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import axios from 'axios';

const SuccessReset = () => {

    const sessionDestroy = async () => {
        try{
          const response = await axios.get('http://192.168.100.117:3000/user/logout')
          if(response && response.status){
            if(response.status === 200){
              router.push('LogIn')
            }
          }
        }catch(err){
          console.log(err)
          console.log(err.response)
        }
      }

  return (
    <SafeAreaView className="px-16 flex-1 justify-center gap-10">
        <View className='items-center'>
            {/* Inmage here */}
            <Icon name='shield-check-fill' size={moderateScale(140)} color='#81A969'/>
        </View>
        <View className='gap-7'>
            <Text className=" text-primary text-center font-medium font-pbold" style={{fontSize: moderateScale(30), lineHeight: 51}}>Success!</Text>
            <Text className="font-pregular text-center" style={{fontSize: moderateScale(14)}}>Your password has been changed successfully!</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary rounded-xl" style={{padding: moderateScale(15)}} onPress={() => router.push('LogIn')}>
                <Text className=" font-pmedium text-center text-white" style={{fontSize: moderateScale(14)}}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessReset