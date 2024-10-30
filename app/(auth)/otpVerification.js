import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Link, router, useLocalSearchParams } from 'expo-router'
import axios from 'axios';
import Constant from 'expo-constants'

const otpVerification = () => {
  // const [count, setCount] = useState(1);
  const { email } = useLocalSearchParams()
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([])
  const apiURl = Constant.expoConfig.extra.apiUrl
  const apiVercel = Constant.expoConfig.extra.apiUrlVercel

  const handleVerify = async () => {
    const otpValue = otp.join('')
    console.log('OTP Value:', otpValue)

    const data = {
      email_address: email,
      otp: otpValue
    }

    try{
      const response = await axios.post('https://waste-redux-server-side.vercel.app/user/request/verify_otp', data)
      if(response && response.status){
        if(response.status === 200){
          router.push(`/ResetPass?email=${encodeURIComponent(email)}`)
        }
      }
    }catch(err){
      console.log(err)
      if(err.response && err.response.status){
        if(err.response.status === 500){
          Alert.alert('Error', 'Invalid OTP code')
        } 
      }
    }
  }

  const resend = async () => {
    try{
      const response = await axios.post('https://waste-redux-server-side.vercel.app/user/request/otp', {email_address: email})
      if(response && response.status){
        if(response.status === 200){
          setOtp(['','','',''])
          Alert.alert('Success!', 'Please check your email for OTP code')
        }
      }
    }catch(err){
      console.log(err)
      if(err.response.status === 429){
        Alert.alert('Error', 'Too many request. Please try again after 4hrs.')
      }else if(err.response && err.response === 500){
        Alert.alert('Error Occured', 'Please try again.')
      }
    }
  }

  const InputField = ({index}) => {
    return(
      <TextInput className='border border-gray-400 rounded-xl text-center' 
      ref={(ref) => inputRefs.current[index] = ref}   
      style={{fontSize: moderateScale(13.5), padding: moderateScale(14), width: scale(50), height: verticalScale(46)}} 
      keyboardType='number-pad' 
      maxLength={1} 
      caretHidden
      value={otp[index]}
      onChangeText={(value) => {
        const newOTP = [...otp]
        newOTP[index] = value
        setOtp(newOTP)
      }}
      onKeyPress={({ nativeEvent }) => {
        if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
          const newOtp = [...otp]
          newOtp[index - 1] = ''
          setOtp(newOtp)
          setTimeout(() => {
            inputRefs.current[index - 1].focus();
          }, 100);
        }
      }}
      />
    );
  }

  return (
    <SafeAreaView className='py-32 px-5 flex-1 gap-12 bg-fourth items-center'>
        <View className='justify-center items-center' style={{gap: 15}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Verify your Email</Text>
            <Text className='font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14), width: scale(200)}}>We've sent a verification code on your email address</Text>
        </View>
        <View className='flex-row justify-center items-center' style={{gap: 20}}>
          {[0, 1, 2, 3].map((index) => (
            <InputField key={index} index={index} />
          ))}
        </View>
        <TouchableOpacity className='bg-primary rounded-2xl w-[75%]' style={{padding: moderateScale(15)}} onPress={() => handleVerify()}>
            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Verify</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => resend()} style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: moderateScale(11.5)}} className='font-pregular'>
            Didn't receive a code? <Text style={{ color: 'blue' }}>Resend</Text>
          </Text>
        </TouchableOpacity>
        
    </SafeAreaView>
  )
}

export default otpVerification