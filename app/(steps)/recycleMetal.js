import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const recycleMetal = () => {
  return (
    <SafeAreaView className='flex-1 mt-20 px-5' style={{gap: 50}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className='flex-row items-center gap-2'>
          <Icon name='check-line' size={32} color='#81A969'/>
          <Text className='text-primary font-psemibold text-lg'>The waste material is recyclable!</Text>
        </View>

        <View className='gap-y-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}> How to Recycle </Text>
          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>1</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Empty the can. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>2</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Rinse the can properly to remove any residue. If rusty, scrub it off with a wire brush or sandpaper. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>3</Text>
              </View>
              <Text className='font-pregular w-96' style={{fontSize: moderateScale(14)}}> Remove plastic or metal caps and dispose of them separately.</Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>4</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Consider reusing the item for garden use or DIY tools or storage containers. </Text>
          </View>
        </View>

        <View className='gap-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>What Metals Can Be Recycled?</Text>
          <Text className='font-pregular text-justify' style={{fontSize: moderateScale(14)}}>In short, all metals are recyclable. Metals like copper, steel, iron, aluminum, stainless steel, brass, lead, and bronze can be recycled.</Text>
        </View>
        
        <View className='gap-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>Did you know?</Text>
          <Text className='font-pregular text-justify' style={{fontSize: moderateScale(14)}}>The number on the bottom of a plastic bottle indicates its resin type, determining its recyclability. Resin numbers range from 1 to 7, with 1 and 2 being the most recyclable, while 7 is the least recyclable.</Text>
        </View>

        <View className='justify-end flex-[0.8]'>
          <TouchableOpacity className='bg-primary rounded-2xl items-center' style={{padding: moderateScale(15)}} onPress={() => router.replace('/scan')}>
            <Text className='text-white font-psemibold' style={{fontSize: moderateScale(14)}}>Scan again</Text>
          </TouchableOpacity>
        </View>
      
      </ScrollView>
     </SafeAreaView>
  )
}

export default recycleMetal