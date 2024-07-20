import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'

const NonRecycle = () => {
  return (
    <SafeAreaView className='px-5 py-5 flex-1'>
        <View className='flex-row justify-end mb-4'>
            <Icon name='close-line' size={24} color='black'/>
        </View>
        <View style={{gap: 40}}>
            <View className='flex-row items-center gap-4'>
                <Icon name='close-circle-fill' size={28} color='#9B3A1C'/>
                <Text className='font-psemibold text-lg text-[#9B3A1C] w-80'>Oops! The waste material cannot be recycled easily!</Text>
            </View>
            <View style={{gap:40}}>
                <Text className='text-secondary font-pbold text-3xl'>Here's why</Text>
                <Text className='text-xl font-pregular text-justify leading-9'>Plastic resin code #6 denotes polystyrene, 
                    a type of plastic that is is often not recycled 
                    due to challenges in sorting it from other plastics 
                    and its tendency to break into small beads, causing 
                    issues with sorting machines and potential breakdowns.</Text>
            </View>
            <View style={{gap: 40}}>
                <Text className='text-secondary font-pbold text-3xl'>What to do</Text>
                <View style={{gap: 30}}>
                    <View className='flex-row gap-5'>
                        <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                            <Text className='text-2xl font-pbold text-primary'>1</Text>
                        </View>
                        <Text className='text-xl font-pregular w-96 leading-8'>Try and avoid buying food and drink which comes in polystyrene.</Text>
                    </View>

                    <View className='flex-row gap-5 items-center'>
                        <View className='h-11 w-11 bg-white rounded-full justify-center items-center'>
                            <Text className='text-2xl font-pbold text-primary'>2</Text>
                        </View>
                        <Text className='text-lg font-pregular w-96'>Throw the containers in your trash bin</Text>
                    </View>
                </View>
            </View>
        </View>
        <View className='flex-1 justify-end'>  
            <TouchableOpacity className='bg-primary h-20 rounded-xl justify-center items-center mb-8'>
                <Text className='text-white font-psemibold text-2xl'>Scan again</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default NonRecycle