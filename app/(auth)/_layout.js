import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='LogIn'/>
      <Stack.Screen name='SignUp'/>
      <Stack.Screen name='SetPass'/>
      <Stack.Screen name='SuccessSignUp'/>
      <Stack.Screen name='ForgotPass'/>
      <Stack.Screen name='otpVerification'/>
      <Stack.Screen name='ResetPass'/>
      <Stack.Screen name='SuccessReset'/>
      <Stack.Screen name='SuccessEmail'/>
      <Stack.Screen name='ChangePass'/>
      <Stack.Screen name='VerifyPass'/>
      <Stack.Screen name='ChangeEmail'/>  
      <Stack.Screen name='SuccessRegister'/>
      <Stack.Screen name='resetSuccess'/>
    </Stack>
  )
}

export default AuthLayout