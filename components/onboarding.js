import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '@/components/slides'
import Items from '@/components/items'
import Paginator from './Paginator'

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className='flex-1 justofy-center items-center'> 
      <View className='flex-3'>
        <FlatList 
        data={slides} 
        renderItem={({item}) => <Items item={item}/>} 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        scrollEventThrottle={32}
      />
    
      </View>
      <Paginator data={ slides }/>
    </View>
  )
}

export default Onboarding