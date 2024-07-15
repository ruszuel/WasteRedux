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
    </Stack>
  )
}

export default AuthLayout