import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const nonRecycleMetal = () => {
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
                        <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>Here's why</Text>
                        <Text className='font-pregular text-justify leading-9' style={{fontSize: moderateScale(15)}}>Crushed metal cans are harder to recycle due to contamination risks, sorting challenges, and difficulties in handling. 
                            Specialized processing is required, making uncrushed cans easier to manage at recycling facilities.
                        </Text>
                    </View>
                    <View style={{gap: 40}}>
                        <Text className='text-secondary font-pbold' style={{fontSize: moderateScale(22)}}>What to do</Text>
                        <View style={{gap: 30}}>
                            <View className='flex-row gap-5'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>1</Text>
                                </View>
                                <Text className='font-pregular w-96 leading-8' style={{fontSize: moderateScale(15)}}>Ensure the can is empty.</Text>
                            </View>

                            <View className='flex-row gap-5 items-center'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>2</Text>
                                </View>
                                <Text className='font-pregular w-96' style={{fontSize: moderateScale(15)}}>Rinse the can to remove any sticky residue and prevent contamination</Text>
                            </View>

                            <View className='flex-row gap-5 items-center'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>3</Text>
                                </View>
                                <Text className='font-pregular w-96' style={{fontSize: moderateScale(15)}}>Put the crushed can in the appropriate recycling bin.</Text>
                            </View>

                            <View className='flex-row gap-5 items-center'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{fontSize: moderateScale(16)}}>4</Text>
                                </View>
                                <Text className='font-pregular w-96' style={{fontSize: moderateScale(15)}}>Drop off at the recycling center (if needed).</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View className='flex-1 justify-end mt-5'>  
                    <TouchableOpacity className='bg-primary rounded-xl justify-center items-center mb-8' style={{padding: moderateScale(15)}} onPress={() => router.replace('/scan')}>
                        <Text className='text-white font-psemibold ' style={{fontSize: moderateScale(14)}}>Scan again</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default nonRecycleMetal