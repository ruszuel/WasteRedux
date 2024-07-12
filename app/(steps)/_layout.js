import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StepsLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='Recycle'/>
    </Stack>
  )
}

export default StepsLayout