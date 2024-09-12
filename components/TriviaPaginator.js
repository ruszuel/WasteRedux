import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Animated, {useAnimatedStyle, interpolate, Extrapolation, interpolateColor} from 'react-native-reanimated';
import { scale, verticalScale } from 'react-native-size-matters';


const TriviaPaginator = ({ data, x }) => {
  const {width} = useWindowDimensions();
  const PaginationComp = ({i}) => {
    const AnimatedDotStyle = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value, 
        [
          (i - 1) * width, i * width - 1, (i + 1) * width
        ],
        [15, 30, 15],
        Extrapolation.CLAMP
      )
      const colorAnimation = interpolateColor(
        x.value, 
        [
          (i - 1) * width, i * width, (i + 1) * width
        ],
        ['white', '#41644A', 'white']
      )
      const opacityAnimation = interpolate(
        x.value, 
        [
          (i - 1) * width, i * width, (i + 1) * width
        ],
        [0.5, 1, 0.5],
        Extrapolation.CLAMP
      )
      return{
        width: widthAnimation,
        backgroundColor: colorAnimation,
        opacity: opacityAnimation
      };
    });
    return <Animated.View style={[{width: scale(12), height: verticalScale(8), backgroundColor: "white", marginHorizontal: scale(3), borderRadius: 10}, AnimatedDotStyle]}/>
  }
  return (
    <View className='flex-row items-center justify-center'>
      {data.map((_, i) => {
        return <PaginationComp i={i} key={i}/>
      })}
    </View>
  )
}

export default TriviaPaginator