import { View, Text, SafeAreaView, Image, FlatList, useWindowDimensions, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import TriviaList from '@/components/TriviaList';
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import articleList from '../(articles)/articleList';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const Home = () => {
  const {width} = useWindowDimensions();
  const [userData, setUserData] = useState([])

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
        <View className='flex-[0.7] w-full h-full' >
          <Image source={item.image} className='h-full w-full justify-center items-center rounded-t-2xl'  resizeMode='cover'/>
        </View>
        <View className='flex-[0.5] px-5 border border-gray-500 rounded-b-2xl border-t-0 border-b gap-y-2 bg-fourth'>
          <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(15), width: moderateScale(230)}}>{item.title}</Text>
          <Text className='font-pregular text-gray-500' style={{fontSize: moderateScale(12)}}>{item.description}</Text>
        </View>
      </Pressable>
    )
  }

  const Item = ({items}) => {
    return (
      <View className='flex-row justify-between items-center'>
        {userData && (
          <>
          <View className='mb-5 flex-row flex-1 gap-x-3'>
            <View className='bg-white rounded-xl justify-center items-center' style={{width: scale(35), height: verticalScale(33)}}>
              <Icon name={items.waste_type === 'Disposable' ? 'close-fill' : 'check-line'} size={moderateScale(26)} color={ items.waste_type === 'Disposable' ? 'red' : '#81A969'}/>
            </View>
            <View>
              <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(12)}}>{items.waste_type}</Text>
              <Text className='text-secondary font-pregular' style={{fontSize: moderateScale(14)}}>{items.category}</Text>
            </View>
          </View>
          <View>
            <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(12)}}>{items.scan_date}</Text>
          </View>
          </>
          
        )}
      </View>
    )
  }

  const getData = async () => {
    console.log('retrieving');
    try {
      const result = await axios.get('https://seal-app-uuotj.ondigitalocean.app/user/home')
      if(result && result.data){
        setUserData(result.data)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <SafeAreaProvider className='px-5' style={{paddingTop: moderateScale(40)}}> 
    <StatusBar hidden={true} translucent={true} /> 
      <View className=' flex-row justify-between items-center'>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(34)}}>Waste<Text className='font-batangas text-primary'>Redux</Text></Text>
        {/* settings icon */}
        <Icon name='settings-4-line' color='gray' size={moderateScale(26)} onPress={() => router.push('mainSetting')}/>
      </View>

      <LinearGradient colors={['#41644A', '#81A969']} className='rounded-2xl items-center' style={{height: verticalScale(150), marginTop: moderateScale(26)}}>
        <View className='rounded-2xl items-center' >
          <View className='flex-[0.3] flex-row gap-x-5 items-center justify-center' style={{ paddingTop: moderateScale(20)}}>
            <Image source={require("../../assets/images/cloud.png")} style={{height: verticalScale(40), width: scale(40)}}/>
            <Text className='text-white font-psemibold' style={{fontSize: moderateScale(22)}}>Did you know?</Text>
          </View>
          <View className='flex-[0.6]'>
            <TriviaList />
          </View>
        </View>
      </LinearGradient>
      
      {/* Articles */}
      <View style={{marginTop: moderateScale(26)}}>
        <View className='flex-row justify-between'>
          <Text className='font-pextrabold text-secondary' style={{fontSize: moderateScale(22)}}>Articles</Text>
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
      <View style={{marginTop: moderateScale(26)}} className='flex-1'>
        <View className='flex-row justify-between items-center'>
          <Text className='font-pextrabold text-secondary' style={{fontSize: moderateScale(22)}}> Recent Scan</Text>
          <Link href='/(tabs)/history' className='font-pregular' style={{fontSize: moderateScale(14)}}>See all</Link>
        </View>
        {/* <View className='flex-1 mt-6' style={{gap: 10}}> */}
            <FlatList
              data={userData}
              renderItem={({item}) => <Item items={item}/>}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              className='flex-1 mt-6'
            />
        {/* </View> */}
      </View>
    </SafeAreaProvider>
  )
}

export default Home