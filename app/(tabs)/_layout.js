import Icon from 'react-native-remix-icon';
import React from 'react'
import { Tabs } from 'expo-router'
import { View } from 'react-native';



const TabsLayout = () => {

  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: '#41644A', tabBarShowLabel: false, tabBarStyle: {height: 60}}}>
      <Tabs.Screen 
      name='home'
      options={{
        tabBarIcon: ({ color }) => <Icon name='home-6-line' size={24} color={color}/>
      }}
      />
      <Tabs.Screen name='history' options={{tabBarIcon: ({ color }) => <Icon name='history-line' size={24} color={color}/>,}}/>
      <Tabs.Screen name='scan' options={{tabBarIcon: ({ color }) => (
        <View className='justify-center items-center rounded-full bg-primary w-20 h-20 -mt-14'>
          <Icon name='qr-scan-2-line' size={24} color='white'/>
        </View>
      ), unmountOnBlur:true, tabBarStyle: {display: 'none'}}}/>
      <Tabs.Screen name='upload' options={{tabBarIcon: ({ color }) => <Icon name='file-add-line' size={24} color={color}/>}}/>
      <Tabs.Screen name='profile' options={{tabBarIcon: ({ color }) => <Icon name='user-line' size={24} color={color}/>, tabBarStyle: {display: 'none'}}}/>
    </Tabs>
  )
}

export default TabsLayout