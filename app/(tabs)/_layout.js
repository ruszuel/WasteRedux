import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen 
      name='home'
      options={{
        title: "Home",
      }}
      />
      <Tabs.Screen name='history'/>
      <Tabs.Screen name='scan'/>
      <Tabs.Screen name='upload'/>
      <Tabs.Screen name='profile'/>
    </Tabs>
  )
}

export default TabsLayout