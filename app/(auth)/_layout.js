import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='LogIn'/>
      <Stack.Screen name='SignUp'/>
      <Stack.Screen name='SetPass'/>
      <Stack.Screen name='SuccessSignUp'/>
    </Stack>
  )
}

export default AuthLayout