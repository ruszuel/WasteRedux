import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const nonRecycleGlass = () => {
  return (
    <SafeAreaView className='px-5 mt-20 flex-1'>
        <View className='flex-1'> 
            <ScrollView contentContainerStyle={{flexGrow: 1, gap: 30}}>
                <View style={{gap: 40}} className='pb-4'>
                    <View className='flex-row items-center gap-4'>
                        <Icon name='close-circle-fill' size={28} color='#9B3A1C'/>
                        <Text className='font-psemibold text-lg text-[#9B3A1C] w-80'>Oops! The waste material cannot be recycled easily!</Text>
                    </View>
                    <View style={{gap:40}}>
                        <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>Did you know?</Text>
                        <Text className='font-pregular text-justify leading-9' style={{fontSize: moderateScale(15)}}>Glass recycling is energy-efficient but requires sorting by color to remove contaminants. 
                            Different glass types and colors have varying melting points, so not all glass items can be processed through standard curbside recycling.
                        </Text>
                        <Text className='font-pregular text-justify leading-9' style={{fontSize: moderateScale(15)}}>Frosted glass, plate glass, Pyrex, mirrors, and ceramics are considered contaminants in glass recycling. 
                            Including these items can lead to the rejection of an entire load of recyclable glass.
                        </Text>
                    </View>
                </View>
                <View className='flex-1 justify-end mt-3'>  
                    <TouchableOpacity className='bg-primary rounded-xl justify-center items-center mb-8' style={{padding: moderateScale(15)}} onPress={() => router.replace('/scan')}>
                        <Text className='text-white font-psemibold ' style={{fontSize: moderateScale(14)}}>Scan again</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default nonRecycleGlass