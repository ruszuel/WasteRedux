import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Trivia from './Trivia'
import TriviaItem from './TriviaItem'

const TriviaList = () => {
  return (
    <View>
      <FlatList data={Trivia} 
      renderItem={({item}) => <TriviaItem item={item}/>} 
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      bounces={false}/>
    </View>
  )
}

export default TriviaList