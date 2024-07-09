import { View, Text, SafeAreaView } from 'react-native'
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
        <Icon name='settings-4-line' color='gray' size={24}/>
      </View>

      <View className='h-52 bg-primary rounded-2xl p-3 items-center mt-6'>
        <>
        {/* cloud icon */}
        <Text className='text-white font-psemibold text-2xl mt-4'>Did you know?</Text>
        <TriviaList />
        </>
      </View>
      {/* Articles */}
      <View className='mt-6'>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-secondary text-3xl'>Articles</Text>
          <Link href='#' className='font-pregular text-base'>See all</Link>
        </View>
        <View className='mt-4 bg-tertiary rounded-2xl h-28 p-5 items-center'>
          {/* articles in flat list API will be used in this section */}
          <Text>Empty Articles</Text>
        </View>
      </View>
      {/* Recent Scan */}
      <View className='mt-6'>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-3xl text-secondary'> Recent Scan</Text>
          <Link href='#' className='font-pregular text-base'>See all</Link>
        </View>
        <>
            {/*History of user getting into database*/}
        </>
      </View>
    </SafeAreaProvider>
  )
}

export default Home