import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import Dropdown from '@/components/Dropdown';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Upload = () => {

  const [image, setImage] = useState(null);

  const picker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      setImage(result.assets[0].uri);
    }
  }
  return (
    <SafeAreaView className=' bg-fourth flex-1 px-5' style={{gap: 40, paddingTop: moderateScale(40)}}>
      <View>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(42)}}>Register <Text className='text-primary'>Waste</Text></Text>
      </View>
      <View>
        <Text className='font-pregular' style={{fontSize: moderateScale(16)}}>Provide details about the waste item to help improve the app's database</Text>
      </View>
      <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(24)}}>Solid Waste Composition</Text>
      <Dropdown />
      <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(24)}}>Upload Image</Text>

      <Pressable className='justify-center items-center' style={{gap: 15, borderColor: '#9ca3af', borderStyle: 'dashed', borderWidth: image ? 0 : 2, borderRadius: 15, height: verticalScale(150)}} onPress={picker}>
        {image ? <Image source={{uri: image}} className='w-full h-full rounded-2xl'/> : 
        <View className='justify-center items-center'>
          <Icon name='upload-2-fill' size={38} color='gray'/>
          <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(15)}}>Click to upload an image</Text>
        </View>
        }
      </Pressable>

      <View className='flex-1 flex-row justify-between'>
        <TouchableOpacity className='flex-[0.45] border border-gray-300 bg-white justify-center items-center rounded-xl' style={{height: verticalScale(40)}} onPress={() => setImage(null)}>
          <Text className='font-psemibold' style={{fontSize: moderateScale(16)}}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-[0.45] bg-primary justify-center items-center rounded-xl' style={{height: verticalScale(40)}} onPress={() => router.push('SuccessRegister')}>
          <Text className='font-psemibold text-white' style={{fontSize: moderateScale(16)}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Upload