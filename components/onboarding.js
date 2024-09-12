import { View, Text, FlatList, useWindowDimensions, ImageBackground } from 'react-native'
import React, { useRef, useState } from 'react'
import slides from '@/components/slides'
import Paginator from './Paginator'
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedRef,useAnimatedStyle, interpolate, Extrapolation} from 'react-native-reanimated';
import CustomButton from './CustomButton';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

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

      return{
        opacity: opacityAnimation,
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

      return{
        opacity: opacityAnimation,
      }
    });

    return (
      <View className='flex-1 justify-center items-center py-7'>
        <Animated.Image source={item.image} style={[{flex: 0.7, justifyContent: 'center', resizeMode: 'contain', width}, imageAnimation]}/>
        <Animated.View className='flex-[0.11] gap-y-5 items-center' style={textAnimation}> 
          <Text className='text-center font-pbold text-secondary' style={{fontSize: moderateScale(26), width: scale(300)}}>{item.title}</Text>
          <Text className='text-center font-pregular' style={{fontSize: moderateScale(17), width: scale(250)}}>{item.description}</Text>
        </Animated.View>
      </View>
    )
  }

  return (
    <View className='flex-1 justify-center items-center'> 
      <View className='flex-1 justify-center items-center'>
        <ImageBackground source={require("../assets/images/onboardBG.png")} resizeMode='contain'>
          <Animated.FlatList 
          ref={flatlistRef}
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
        </ImageBackground>     
      </View>
      <View className='flex-[0.1]'><CustomButton flatlistRef={flatlistRef} flatlistIndex={flatlistIndex} dataLength={slides.length}/></View>
      <View className='flex-[0.1] items-center justify-center'><Paginator data={slides} x={x}/></View>
      
    </View>
  )
}

export default Onboarding