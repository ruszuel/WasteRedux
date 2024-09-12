import { View, Text, Pressable, useWindowDimensions } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-remix-icon';
import Animated, {useAnimatedStyle, withTiming, withSpring} from 'react-native-reanimated';
import { router } from 'expo-router';

const CustomButton = ({flatlistIndex, flatlistRef, dataLength}) => {
  const {width} = useWindowDimensions();
  const buttonAnimation = useAnimatedStyle(() => {
    return {
      width: flatlistIndex.value === dataLength - 1 ? withSpring(width - 120) : withSpring(80),
      borderRadius: flatlistIndex.value === dataLength - 1 ? 20 : 120,
      display: flatlistIndex.value === dataLength - 1 ? "flex" : "none"
    }
  })

  const textDisplayAnimation = useAnimatedStyle(() => {
    return{
      display: flatlistIndex.value === dataLength - 1 ? "flex" : "none"
    }
  })

  return (
    <Pressable onPress={() => flatlistIndex.value === dataLength - 1 ? router.push('home') : flatlistRef.current.scrollToIndex({index: flatlistIndex.value + 1})}>
      <Animated.View className='items-center justify-center bg-primary' style={[{height: verticalScale(50)}, buttonAnimation]}>
        <Animated.View style={buttonAnimation} className='items-center justify-center'>
          <Animated.Text className='font-pmedium text-white' style={[textDisplayAnimation,{fontSize: moderateScale(17)}]}>Let's Go!</Animated.Text>
        </Animated.View>
      </Animated.View>
    </Pressable>
    
  )
}

export default CustomButton