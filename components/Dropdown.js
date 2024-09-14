import { View, Text, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-remix-icon' 
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Dropdown = () => {
    const [expand, setExpand] = useState(false);
    const [placeholder, setPlaceholder] = useState('Choose a category');
    const labels = [{label: 'Plastic', value: 'pl'}, {label: 'Metal', value: 'mt'}, {label: 'Glass', value: 'gl'}]
  return (
    <View className='justify-center items-center w-full gap-2 relative'>
        <Pressable className='flex-row justify-between items-center w-full p-3 px-2 bg-white rounded-md' style={{height: verticalScale(40)}} onPress={() => setExpand(expand ? false : true)}>
            <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(14)}}>{placeholder}</Text>
            <Icon name={expand ? 'arrow-drop-up-fill' : 'arrow-drop-down-fill'} size={moderateScale(30)} color='#81A969'/>
        </Pressable>
        <View className='bg-white w-full h-32 rounded-md p-3 absolute top-16 left-0 z-10' style={{display: expand ? 'flex' : 'none'}}>
            <FlatList
                scrollEnabled={false}
                data={labels}
                renderItem={({ item }) => (
                    <TouchableOpacity className='h-10' onPress={() => {
                        setPlaceholder(item.label); setExpand(expand ? false : true)}}>
                        <Text className='font-pmedium text-center text-gray-400' style={{fontSize: moderateScale(14)}}>{item.label}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    </View>
  )
}

export default Dropdown