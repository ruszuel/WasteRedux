import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import TriviaList from '@/components/TriviaList';

const Home = () => {
  return (
    <SafeAreaProvider className='pt-20 px-5'> 
      <View className=' flex-row justify-between'>
        <Text className='font-batangas text-secondary text-5xl'>Waste<Text className='font-batangas text-primary'>Redux</Text></Text>
        {/* settings icon */}
        <Icon name='settings-4-line' color='gray' size={28}/>
      </View>

      <View className='h-52 bg-primary rounded-2xl p-3 items-center mt-6'>
        <View className='flex-[0.3] flex-row gap-2 items-center justify-center'>
          <Image source={require("../../assets/images/cloud.png")} className='h-[60] w-[60]'/>
          <Text className='text-white font-psemibold text-2xl mt-4'>Did you know?</Text>
        </View>
        <View className='flex-[0.7]'>
          <TriviaList />
        </View>
        
      </View>
      {/* Articles */}
      <View className='mt-6'>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-secondary text-3xl'>Articles</Text>
          <Link href='#' className='font-pregular text-base'>See all</Link>
        </View>
        <View className='mt-6 rounded-2xl h-48 w-80'>
          {/* articles in flat list API will be used in this section */}
          <View className='flex-[0.6] bg-secondary w-full rounded-t-2xl items-center justify-center'>
            <Text className='text-white'>Image here</Text>
          </View>
          <View className='flex-[0.5] justify-center px-5 border-gray-400 border border-t-0 rounded-b-2xl' style={{gap: 5}}>
            <Text className='font-pmedium text-2xl text-secondary'>Reycling Contamination</Text>
            <Text className='font-pregular text-base text-gray-400'>How to reduce it?</Text>
          </View>
        </View>
      </View>
      {/* Recent Scan */}
      <View className='mt-6'>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-3xl text-secondary'> Recent Scan</Text>
          <Link href='#' className='font-pregular text-base'>See all</Link>
        </View>
        <View className='mt-6 flex-row' style={{gap: 10}}>
            {/*History of user getting into database*/}
            <View className='w-12 h-12 bg-white rounded-md justify-center items-center'>
              <Icon name='check-line' size={32} color='#81A969'/>
            </View>
            <View>
              <Text className='text-gray-400 font-pregular text-lg'>Recyclable</Text>
              <Text className='text-secondary font-pregular text-xl'>Plastic Bottle</Text>
            </View>
        </View>
      </View>
    </SafeAreaProvider>
  )
}

export default Home