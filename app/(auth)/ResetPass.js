import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import Icon from 'react-native-remix-icon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const ResetPass = () => {
    const [newP, setNewP] = useState(false);
    const [confirm, setConfirm] = useState(false);
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Reset Password</Text>
            <Text className='font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14), width: scale(230)}}>Create a password with at least 6 letters or numbers</Text>
        </View>
        <View style={{gap: 30}}>
            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                <TextInput className='font-pregular flex-1' style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} placeholder='New Password' keyboardType='default' cursorColor={'black'} secureTextEntry={newP ? false : true}/>    
                <Icon name={newP ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setNewP(newP ? false : true)}/>
            </View>

            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                <TextInput className='font-pregular flex-1' style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} placeholder='Confirm Password' keyboardType='default' cursorColor={'black'} secureTextEntry={confirm ? false : true}/>    
                <Icon name={confirm ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setConfirm(confirm ? false : true)}/>
            </View>
        </View>
        <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(15)}} onPress={()=> router.push('SuccessReset')}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Reset Password</Text>
        </TouchableOpacity>
        <Link href={'/LogIn'} className='text-center text-primary font-pmedium' style={{fontSize: moderateScale(11.5)}}>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ResetPass