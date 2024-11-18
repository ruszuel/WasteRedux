import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const recyclePlastic = () => {
  return (
    <SafeAreaView className='flex-1 mt-20 px-5' style={{gap: 50}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 20, gap: 30}} showsVerticalScrollIndicator={false}>
        <View className='flex-row items-center gap-2 mb-4'>
          <Icon name='check-line' size={32} color='#81A969'/>
          <Text className='text-primary font-psemibold text-lg'>The waste material is recyclable!</Text>
        </View>

        <View className='gap-y-4'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}> How to Recycle </Text>
          <View className='flex-row items-center gap-2'>
              <View className='h-9 w-9 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>1</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Ensure that the item is clean and free of food. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>2</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Remove sticky labels when possible. </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>3</Text>
              </View>
              <Text className='font-pregular w-96' style={{fontSize: moderateScale(14)}}> Check for recycling symbols and numbers </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>4</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Avoid Recycling in Curbside Bins </Text>
          </View>

          <View className='flex-row items-center gap-2'>
              <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                  <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>5</Text>
              </View>
              <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Consider reusing the bags for shopping or storage. </Text>
          </View>
        </View>

        <View className='gap-4 mt-5'>
          <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>What Not to Place in a Store Recycling Bin</Text>
          <View className='flex-row items-center gap-2'>
            <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>1</Text>
            </View>
            <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Prewashed salad mix bags. </Text>
            </View>

            <View className='flex-row items-center gap-2'>
                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>2</Text>
                </View>
                <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Biodegradable bags. </Text>
            </View>

            <View className='flex-row items-center gap-2'>
                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>3</Text>
                </View>
                <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Cling wrap. </Text>
            </View>

            <View className='flex-row items-center gap-2'>
                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>4</Text>
                </View>
                <Text className='font-pregular' style={{fontSize: moderateScale(14)}}> Candy and snack packaging </Text>
            </View>
        </View>

        <View className='justify-end flex-1 mb-2 mt-5'>
          <TouchableOpacity className='bg-primary rounded-2xl items-center' style={{padding: moderateScale(15)}} onPress={() => router.replace('/scan')}>
            <Text className='text-white font-psemibold flex-1' style={{fontSize: moderateScale(14)}}>Scan again</Text>
          </TouchableOpacity>
        </View>
      
      </ScrollView>
     </SafeAreaView>
  )
}

export default recyclePlastic