import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'

const NonRecognizable = () => {
  return (
    <SafeAreaView className='px-5 py-5 flex-1'>
    <View className='flex-row justify-end mb-4'>
        <Icon name='close-line' size={24} color='black'/>
    </View>
    <View style={{gap: 40}}>
        <View className='flex-row items-center gap-4'>
            <Icon name='close-circle-fill' size={28} color='#9B3A1C'/>
            <Text className='font-psemibold text-lg text-[#9B3A1C] w-80'>Oh no! The waste you are trying to scan is not recognizable!</Text>
        </View>
        <View style={{gap: 40}}>
            <Text className='text-secondary font-pbold text-3xl'>Possible Reasons</Text>
            <View style={{gap: 30}}>
                <View className='flex-row gap-5 items-center'>
                    <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                        <Text className='text-2xl font-pbold text-primary'>1</Text>
                    </View>
                    <Text className='text-xl font-pregular w-96'>The image quality may be unclear</Text>
                </View>

                <View className='flex-row gap-5 items-center'>
                    <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                        <Text className='text-2xl font-pbold text-primary'>2</Text>
                    </View>
                    <Text className='text-lg font-pregular w-96 leading-8'>The item may not match any known solid waste materials in our database</Text>
                </View>

                <View className='flex-row gap-5 items-center'>
                    <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                        <Text className='text-2xl font-pbold text-primary'>3</Text>
                    </View>
                    <Text className='text-lg font-pregular w-96 leading-8'>The image may contain multiple objects, making it difficult to identify</Text>
                </View>
            </View>
        </View>
        <View style={{gap:40}}>
            <Text className='text-secondary font-pbold text-3xl'>What to do</Text>
            <Text className='text-xl font-pregular text-justify leading-9'>Please make sure that the image you took or uploaded is well-lit, 
                properly positioned, and visible within the frame. If the issue persists, consider manually registering the item or contact 
                support for assistance.</Text>
        </View>
    </View>
    <View className='flex-1 justify-end'>  
        <View className='flex-row justify-between'>
            <TouchableOpacity className='border border-primary h-20 rounded-xl justify-center items-center mb-8 w-[48%]'>
                <Text className='text-primary font-pmedium text-2xl'>Scan Again</Text>
            </TouchableOpacity>

            <TouchableOpacity className='bg-primary h-20 rounded-xl justify-center items-center mb-8 w-[48%]'>
                <Text className='text-white font-pmedium text-2xl'>Register Waste</Text>
            </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
  )
}

export default NonRecognizable