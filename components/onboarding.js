import { View, Text, FlatList, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '@/components/slides'
import Paginator from './Paginator'
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedRef,useAnimatedStyle, interpolate, Extrapolation} from 'react-native-reanimated';
import CustomButton from './CustomButton';

const Onboarding = () => {
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });
  const flatlistRef = useAnimatedRef(null);
  const flatlistIndex = useSharedValue(0);
  const onViewableItemsChanged = (({viewableItems}) => {
    flatlistIndex.value = viewableItems[0].index;
  })

  const Items = ({item, index}) => {
    const {width} = useWindowDimensions();
    const imageAnimation = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );

      // const transYAnimation = interpolate(
      //   x.value,
      //   [
      //     (index - 1) * width,
      //     index * width,
      //     (index + 1) * width
      //   ],
      //   [100, 0, 100],
      //   Extrapolation.CLAMP
      // );
      return{
        opacity: opacityAnimation,
        // transform: [{translateY: transYAnimation}]
      }
    });

    const textAnimation = useAnimatedStyle(() => {
      const opacityAnimation = interpolate(
        x.value,
        [
          (index - 1) * width,
          index * width,
          (index + 1) * width
        ],
        [0, 1, 0],
        Extrapolation.CLAMP
      );

      // const transYAnimation = interpolate(
      //   x.value,
      //   [
      //     (index - 1) * width,
      //     index * width,
      //     (index + 1) * width
      //   ],
      //   [100, 0, 100],
      //   Extrapolation.CLAMP
      // );
      return{
        opacity: opacityAnimation,
        // transform: [{translateY: transYAnimation}]
      }
    });

    return (
      <View className='flex-1 justify-center items-center py-7'>
        <Animated.Image source={item.image} style={[{flex: 0.6, justifyContent: 'center', resizeMode: 'contain', width}, imageAnimation]}/>
        <Paginator data={slides} x={x}/>
        <Animated.View className='flex-[0.2] gap-y-5' style={textAnimation}> 
          <Text className='text-center text-4xl font-pbold text-secondary w-96'>{item.title}</Text>
          <Text className='text-center font-pregular text-xl w-96' >{item.description}</Text>
        </Animated.View>
        <CustomButton flatlistRef={flatlistRef} flatlistIndex={flatlistIndex} dataLength={slides.length}/>
      </View>
    )
  }

  return (
    <View className='flex-1 justify-center items-center'> 
      <View>
        <Animated.FlatList 
        data={slides} 
        renderItem={({item, index}) => <Items item={item} index={index}/>} 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        onScroll={onScroll}
        onViewableItemsChanged={onViewableItemsChanged}
        />
       
      </View>
    </View>
  )
}

export default Onboarding