
import React from 'react'
import { Stack } from 'expo-router'

const StepsLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='Recycle'/>
        <Stack.Screen name='NonRecycle'/>
        <Stack.Screen name='NonRecognizable'/>
        <Stack.Screen name='recyclePlastic'/>
        <Stack.Screen name='recycleGlass' />
        <Stack.Screen name='nonRecycleGlass' />
    </Stack>
  )
}

export default StepsLayout