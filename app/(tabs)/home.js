import { View, Text, SafeAreaView, Image, FlatList, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import TriviaList from '@/components/TriviaList';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import articleList from '../(articles)/articleList';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  const {width} = useWindowDimensions();

  const ArticleItem = ({item}) => {

    const handlePress = () => {
      if(item.id === 1){
        router.push('recyclingContamination')
      }else if(item.id === 2){
        router.push('plastics')
      }else if(item.id === 3){
        router.push('glassOrPlastic')
      }else if(item.id === 4){
        router.push('plasticDecomposition')
      }else if(item.id === 5){
        router.push('solidWasteDisposal')
      }
    }

    return(
      <Pressable className='flex-1 justify-center' style={{paddingHorizontal: moderateScale(12)}} onPress={handlePress}>
        <View className='flex-[0.7] w-full h-full'>
          <Image source={item.image} className='h-full justify-center items-center rounded-t-2xl' style={{width: width * 0.6}} resizeMode='cover'/>
        </View>
        <View className='flex-[0.5] px-5 border border-gray-500 rounded-b-2xl border-t-0 border-b gap-y-2 bg-fourth'>
          <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(17)}}>{item.title}</Text>
          <Text className='font-pregular text-gray-500' style={{fontSize: moderateScale(13)}}>{item.description}</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <SafeAreaProvider className='px-5' style={{paddingTop: moderateScale(40)}}> 
    <StatusBar hidden={true} translucent={true} /> 
      <View className=' flex-row justify-between items-center'>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(42)}}>Waste<Text className='font-batangas text-primary'>Redux</Text></Text>
        {/* settings icon */}
        <Icon name='settings-4-line' color='gray' size={moderateScale(28)} onPress={() => router.push('mainSetting')}/>
      </View>

      <View className='bg-primary rounded-2xl items-center' style={{height: verticalScale(150), marginTop: moderateScale(26)}}>
        <View className='flex-[0.3] flex-row gap-x-5 items-center justify-center' style={{ paddingTop: moderateScale(20)}}>
          <Image source={require("../../assets/images/cloud.png")} style={{height: verticalScale(50), width: scale(50)}}/>
          <Text className='text-white font-psemibold' style={{fontSize: moderateScale(28)}}>Did you know?</Text>
        </View>
        <View className='flex-[0.6]'>
          <TriviaList />
        </View>
        
      </View>
      {/* Articles */}
      <View style={{marginTop: moderateScale(26)}}>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-secondary' style={{fontSize: moderateScale(30)}}>Articles</Text>
        </View>
        <View className='w-screen' style={{marginHorizontal: -20, height: verticalScale(130), marginTop: moderateScale(22)}}>
          {/* articles */}
          <FlatList
            data={articleList}
            renderItem={({item}) => <ArticleItem item={item}/>}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{ flex: 1}}
            bounces
          />
        </View>
      </View>
      {/* Recent Scan */}
      <View style={{marginTop: moderateScale(26)}}>
        <View className='flex-row justify-between items-center'>
          <Text className='font-pextrabold text-secondary' style={{fontSize: moderateScale(30)}}> Recent Scan</Text>
          <Link href='#' className='font-pregular' style={{fontSize: moderateScale(16)}}>See all</Link>
        </View>
        <View className='mt-6 flex-row' style={{gap: 10}}>
            {/*History of user getting into database*/}
            <View className='w-12 h-12 bg-white rounded-xl justify-center items-center'>
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