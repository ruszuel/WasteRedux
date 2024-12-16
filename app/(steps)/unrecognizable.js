import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { router } from 'expo-router'
import { moderateScale } from 'react-native-size-matters'

const unrecognizable = () => {
    return (
        <SafeAreaView className='px-5 mt-20 flex-1'>
            <View className='flex-1'>
                <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 30 }}>
                    <View style={{ gap: 40 }} className='pb-4'>
                        <View className='flex-row items-center gap-4'>
                            <Icon name='close-circle-fill' size={28} color='#9B3A1C' />
                            <Text className='font-psemibold text-lg text-[#9B3A1C] w-80'>Oops! The waste you are trying to scan is not recognizable!</Text>
                        </View>

                        <View className='gap-y-4'>
                            <Text className='text-secondary font-pbold' style={{ fontSize: moderateScale(22) }}> Possible Reasons </Text>
                            <View className='flex-row items-center gap-2'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{ fontSize: moderateScale(16) }}>1</Text>
                                </View>
                                <Text className='font-pregular' style={{ fontSize: moderateScale(14) }}> The image quality may be unclear. </Text>
                            </View>

                            <View className='flex-row items-center gap-2'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{ fontSize: moderateScale(16) }}>2</Text>
                                </View>
                                <Text className='font-pregular' style={{ fontSize: moderateScale(14) }}> The item may not match any known solid waste materials in our dataset. </Text>
                            </View>

                            <View className='flex-row items-center gap-2'>
                                <View className='h-10 w-10 bg-white rounded-full justify-center items-center'>
                                    <Text className='font-pbold text-primary' style={{ fontSize: moderateScale(16) }}>3</Text>
                                </View>
                                <Text className='font-pregular w-96' style={{ fontSize: moderateScale(14) }}> The image may contain multiple objects, making it difficult to identify. </Text>
                            </View>
                        </View>
                    </View>
                    <View className='gap-4'>
                        <Text className='text-secondary font-pbold' style={{ fontSize: moderateScale(22) }}>Did you know</Text>
                        <Text className='font-pregular text-justify' style={{ fontSize: moderateScale(14) }}>Please make sure that the image you took or uploaded is well-lit, properly positioned, and visible within the frame. If the issue persists, consider manually registering the item or contact support for assistance.</Text>
                    </View>
                    <View className='flex-1 justify-end mt-5'>
                        <TouchableOpacity className='bg-primary rounded-xl justify-center items-center mb-8' style={{ padding: moderateScale(15) }} onPress={() => router.replace('/scan')}>
                            <Text className='text-white font-psemibold ' style={{ fontSize: moderateScale(14) }}>Scan again</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default unrecognizable