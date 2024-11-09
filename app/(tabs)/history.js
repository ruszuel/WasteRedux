import { View, Text, useWindowDimensions, FlatList, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native'


const History = () => {
  const [data, setData] = useState([])
  const retrieve = async () => {
    console.log('retrieving')
    try {
      const res = await axios.get('https://seal-app-uuotj.ondigitalocean.app/user/history')
      setData(res.data)
    } catch (error) {
      console.log(error.data)
    }
  }

  useFocusEffect(
    useCallback(() => {
      retrieve();
    }, [])
  );

  const Items = ({item}) => {
    return(
      <View className='flex-row justify-between items-center'>
        {data && (
          <>
          <View className='mb-5 flex-row flex-1 gap-x-3'>
            <View className='bg-white rounded-xl justify-center items-center' style={{width: scale(35), height: verticalScale(33)}}>
              <Icon name={item.waste_type === 'Non-recyclable' ? 'close-fill' : 'check-line'} size={moderateScale(26)} color={ item.waste_type === 'Non-recyclable' ? 'red' : '#81A969'}/>
            </View>
            <View>
              <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(12)}}>{item.waste_type}</Text>
              <Text className='text-secondary font-pregular' style={{fontSize: moderateScale(14)}}>{item.category}</Text>
            </View>
          </View>
          <View>
            <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(12)}}>{item.scan_date}</Text>
          </View>
          </>
          
        )}
      </View>
    )
  }

  return (
    <SafeAreaView className='flex-1 px-5 gap-y-16' style={{paddingTop: moderateScale(40)}}>
      <View className='flex-row justify-between items-center'>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(34)}}>Scan <Text className='text-primary'>History</Text></Text>
        <Icon name='equalizer-line' size={moderateScale(24)} color='gray'/>
      </View>
      <FlatList 
        data={data}
        renderItem={({item, index}) => <Items item={item} index={index}/>} 
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        className='flex-1'
      />
      
    </SafeAreaView>
  )
}

export default History