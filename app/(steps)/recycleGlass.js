import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const recycleGlass = () => {
  return (
    <SafeAreaView className='flex-1 mt-20 px-5' style={{gap: 50}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className='flex-row items-center gap-2'>
          <Icon name='check-line' size={32} color='#81A969'/>
          <Text className='text-primary font-psemibold text-lg'>The waste material is recyclable!</Text>
        </View>

        <View className='gap-y-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}> How to recycleGlass </Text>
          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>1</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Empty the glass container </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>2</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Rinse the glass item to remove residue. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>3</Text>
              </View>
              <Text className='font-pregular w-96' style={{fontSize: moderateScale(14)}}> Detach plastic or metal lids, as these are recycled separately. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>4</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Sort by color if required </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>5</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Consider repurposing glass items for gardening, food storage, or decoration. </Text>
          </View>
        </View>

        <View className='gap-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>Did you know</Text>
          <Text className='font-pregular text-justify' style={{fontSize: moderateScale(14)}}>Most glass types can be endlessly recycled without losing quality, but certain varieties should be kept out of the recycling bin.</Text>
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

export default recycleGlass