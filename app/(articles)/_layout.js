import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ArticleLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name='plastics' />
    </Stack>
  )
}

export default ArticleLayout