import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import Icon from 'react-native-remix-icon';
import { moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const SettingsButton = (props) => {
  return (
    <TouchableOpacity onPress={() => router.push(props.push)}>
        <View className='px-5 flex-row justify-between items-center bg-white py-3'>
            <Text className='font-pregular' style={{fontSize: moderateScale(14.5)}}>{props.name}</Text>
            <Icon name='arrow-right-s-line' color='black' size={22}/> 
        </View>
    </TouchableOpacity>
  )
}

export default SettingsButton