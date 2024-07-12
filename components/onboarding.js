import { View, Text, FlatList, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '@/components/slides'
import Items from '@/components/items'
import Paginator from './Paginator'

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewItemsChanged = useRef(({viewableItems}) =>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

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
        onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollX}}}], 
          {
            useNativeDriver: false,
          }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewItemsChanged}
        viewabilityConfig={viewConfig}
        ref={ slidesRef }
      />
      </View>
      <Paginator data={ slides }/>
    </View>
  )
}

export default Onboarding