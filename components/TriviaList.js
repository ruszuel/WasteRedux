import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Trivia from './Trivia'
import TriviaItem from './TriviaItem'
import TriviaPaginator from './TriviaPaginator'
import Animated, {useSharedValue, useAnimatedScrollHandler, useAnimatedRef,useAnimatedStyle, interpolate, Extrapolation} from 'react-native-reanimated';

const TriviaList = () => {
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  })
  return (
    <View>
      <Animated.FlatList data={Trivia} 
      onScroll={onScroll}
      renderItem={({item, index}) => <TriviaItem item={item} index={index}/>} 
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled = {true}
      bounces={false}
      keyExtractor={item => item.id}/>

      <TriviaPaginator datas={ Trivia }  x={x}/>    
    </View>
  )
}

export default TriviaList