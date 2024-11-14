import { View, Text, TouchableOpacity, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-remix-icon' 
import { moderateScale, verticalScale } from 'react-native-size-matters';

const CollegesDropdown = ({onSelect}) => {
    const [expand, setExpand] = useState(false);
    const [placeholder, setPlaceholder] = useState('College Department');
    const labels = [
        {label: 'CICT', value: 'CICT'}, 
        {label: 'CSSP', value: 'CSSP'}, 
        {label: 'CON', value: 'CON'}, 
        {label: 'CIT', value: 'CIT'}, 
        {label: 'CAFA', value: 'CAFA'},
        {label: 'COE', value: 'COE'},
        {label: 'COED', value: 'COED'},
        {label: 'CAL', value: 'CAL'},
        {label: 'CBEA', value: 'CBEA'},
        {label: 'CCJE', value: 'CCJE'},
        {label: 'CHTM', value: 'CHTM'},
        {label: 'CLAW', value: 'CLAW'},
        {label: 'CS', value: 'CS'},
        {label: 'CSER', value: 'CSER'},
        {label: 'NSTP', value: 'NSTP'},
        {label: 'GS', value: 'GS'},
    ]
  return ( 
    <View className='justify-center items-center w-full gap-y-2 relative'>
        <Pressable className='flex-row justify-between items-center w-full px-3 border border-gray-400 rounded-xl' style={{height: verticalScale(43)}} onPress={() => setExpand(expand ? false : true)}>
            <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(14)}}>{placeholder}</Text>
            <Icon name={expand ? 'arrow-drop-up-fill' : 'arrow-drop-down-fill'} size={moderateScale(30)} color='#81A969'/>
        </Pressable>
        <View className='bg-white w-full rounded-md p-3 absolute top-[75] left-0 z-10' style={{display: expand ? 'flex' : 'none', height: verticalScale(130)}}>
            <FlatList
                scrollEnabled={true}
                data={labels}
                renderItem={({ item }) => (
                    <TouchableOpacity className='h-10' onPress={() => {
                        setPlaceholder(item.label); setExpand(expand ? false : true); onSelect(item.value)}}>
                        <Text className='font-pmedium text-center text-gray-400' style={{fontSize: moderateScale(14)}}>{item.label}</Text>
                    </TouchableOpacity>
                )} />
        </View>
    </View>
  )
}

export default CollegesDropdown