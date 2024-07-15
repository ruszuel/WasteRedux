import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-remix-icon' 

const Dropdown = () => {
    const [expand, setExpand] = useState(false);
    const [placeholder, setPlaceholder] = useState('Choose a category');
    const labels = [{label: 'Plastic', value: 'pl'}, {label: 'Metal', value: 'mt'}, {label: 'Glass', value: 'gl'}]
  return (
    <View className='justify-center items-center w-full gap-2 relative'>
        <TouchableOpacity className='flex-row justify-between items-center w-full h-14 p-3 px-2 bg-white rounded-md' onPress={() => setExpand(expand ? false : true)}>
            <Text className='font-pmedium text-lg text-secondary'>{placeholder}</Text>
            <Icon name={expand ? 'arrow-drop-up-fill' : 'arrow-drop-down-fill'} size={38} color='#81A969'/>
        </TouchableOpacity>
        <View className='bg-white w-full h-32 rounded-md p-3 absolute top-16 left-0 z-10' style={{display: expand ? 'flex' : 'none'}}>
            <FlatList
                scrollEnabled={false}
                data={labels}
                renderItem={({ item }) => (
                    <TouchableOpacity className='h-10' onPress={() => {
                        setPlaceholder(item.label); setExpand(expand ? false : true)}}>
                        <Text className='font-pmedium text-center text-lg text-gray-400'>{item.label}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    </View>
  )
}

export default Dropdown