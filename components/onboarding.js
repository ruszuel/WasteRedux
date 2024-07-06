import { View, Text, FlatList } from 'react-native'
import React from 'react'
import slides from '@/components/slides'
import Items from '@/components/items'

const Onboarding = () => {
  return (
    <View>
     <FlatList 
     data={slides} 
     renderItem={({item}) => <Items item={item}/>} 
     horizontal
     pagingEnabled
     showsHorizontalScrollIndicator
     bounces={false}
     keyExtractor={(item) => item.id}/>
    </View>
  )
}

export default Onboarding