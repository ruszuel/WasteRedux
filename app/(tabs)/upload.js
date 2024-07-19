import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import Dropdown from '@/components/Dropdown';
import { router } from 'expo-router';

const Upload = () => {
  return (
    <SafeAreaView className=' bg-fourth flex-1 pt-10 px-5' style={{gap: 40}}>
      <View>
        <Text className='font-batangas text-secondary text-5xl'>Register <Text className='text-primary'>Waste</Text></Text>
      </View>
      <View>
        <Text className='font-pregular text-lg'>Provide details about the waste item to help improve the app's database</Text>
      </View>
      <Text className='font-pbold text-3xl text-secondary'>Solid Waste Composition</Text>
      <Dropdown />
      <Text className='font-pbold text-3xl text-secondary'>Upload Image</Text>
      <View className='h-52 border-2 border-dashed border-gray-400 justify-center items-center' style={{gap: 15, }}>
        <Icon name='upload-2-fill' size={38} color='gray'/>
        <Text className='text-gray-400 font-pregular text-base'>Click to upload an image</Text>
      </View>
      <View className='flex-1 flex-row justify-between'>
        <TouchableOpacity className='h-14 flex-[0.45] border border-gray-300 bg-white justify-center items-center rounded-xl'>
          <Text className='font-psemibold text-lg'>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity className='h-14 flex-[0.45] bg-primary justify-center items-center rounded-xl' onPress={() => router.push('SuccessRegister')}>
          <Text className='font-psemibold text-lg text-white'>Register</Text>
        </TouchableOpacity>
      </View>
    
      
      
      
    </SafeAreaView>
  )
}

export default Upload