import { useWindowDimensions, View } from 'react-native'
import React from 'react'
import Animated, {useAnimatedStyle, interpolate, Extrapolation, interpolateColor} from 'react-native-reanimated';

const Paginator = ({data, x}) => {
  const {width} = useWindowDimensions();
  const Pagination = ({i}) => {
    const dotAnimation = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value,
        [(i - 1) * width, i * width, (i + 1) * width],
        [15, 30, 15],
        Extrapolation.CLAMP
      );

      const colorAnimation = interpolateColor(
        x.value, 
        [
          (i - 1) * width, i * width, (i + 1) * width
        ],
        ['gray', '#41644A', 'gray']
      );

      const opacityAnimation = interpolate(
        x.value, 
        [
          (i - 1) * width, i * width, (i + 1) * width
        ],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP
      );

      return {
        width: widthAnimation,
        backgroundColor: colorAnimation,
        opacity: opacityAnimation
      }
    })

    return <Animated.View className={'h-[15] w-[15] rounded-full bg-white mx-2'} style={dotAnimation} />
  }

  return (
    <View className='flex-row justify-center flex-[0.1]'>
     {data.map((_, i) => {
        return <Pagination i={i} key={i} />     
     })}
    </View>
  )
}

export default Paginator