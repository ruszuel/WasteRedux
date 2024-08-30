import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const SettingsLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='mainSetting'/>
    </Stack>
  )
}

export default SettingsLayout