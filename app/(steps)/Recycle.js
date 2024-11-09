import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'

const Recycle = () => {
  return (
    <SafeAreaView className='flex-1 mt-10 px-5' style={{gap: 50}}>
      <View className='justify-end  flex-row'>
        <Icon name='close-line' size={24} color='black'/>
      </View>
      <View className='flex-row items-center gap-2'>
        <Icon name='check-line' size={32} color='#81A969'/>
        <Text className='text-primary font-psemibold text-lg'>The waste material is recyclable!</Text>
      </View>
      {/* should be in array for clean and efficient execution of code */}
      <View className='gap-y-4'>
        <Text className='text-secondary font-pbold text-3xl'> How to Recycle </Text>
        <View className='flex-row items-center gap-2'>
            <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                <Text className='text-2xl font-pbold text-primary'>1</Text>
            </View>
            <Text className='text-xl font-pregular'> Make sure the bottle is empty. </Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                <Text className='text-2xl font-pbold text-primary'>2</Text>
            </View>
            <Text className='text-xl font-pregular'> Rinse the bottle and remove the cap and label. </Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                <Text className='text-2xl font-pbold text-primary'>3</Text>
            </View>
            <Text className='text-xl font-pregular w-96'> Recycle plastic bottle with the numbers 1 or 2 on the bottom. </Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                <Text className='text-2xl font-pbold text-primary'>4</Text>
            </View>
            <Text className='text-xl font-pregular'> Squash to save space and throw it in the rubbish. </Text>
        </View>

        <View className='flex-row items-center gap-2'>
            <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                <Text className='text-2xl font-pbold text-primary'>5</Text>
            </View>
            <Text className='text-xl font-pregular'> You can also drop your plastic bottles off at a recycling center as an alternative. </Text>
        </View>
      </View>

      <View className='gap-4'>
        <Text className='text-secondary font-pbold text-3xl'>Did you know</Text>
        <Text className='text-xl font-pregular text-justify'>The number on the bottom of a plastic bottle indicates its resin type, determining its recyclability. Resin numbers range from 1 to 7, with 1 and 2 being the most recyclable, while 7 is the least recyclable.</Text>
      </View>
    
      <TouchableOpacity className='bg-primary h-20 rounded-2xl justify-center items-center' onPress={() => router.replace('/scan')}>
        <Text className='text-white font-psemibold text-xl'>Scan again</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Recycle