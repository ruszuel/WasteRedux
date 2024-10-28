import { View, Text, TouchableOpacity, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon'
import Dropdown from '@/components/Dropdown';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';
import Constant from 'expo-constants'

const Upload = () => {
  const apiURl = Constant.expoConfig.extra.apiUrl
  const apiVercel = Constant.expoConfig.extra.apiUrlVercel
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null);

  const picker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      const uri = result.assets[0].uri;
      const fileExtension = uri.split('.').pop();
      const mimeType = `image/${fileExtension}`;

      const compressed = await manipulateAsync(
        uri,
        [{resize: {width: 800}}],
        { compress: 0.5, format: SaveFormat.JPEG }
       )

      setImage({
        uri: compressed.uri,
        type: mimeType,
        name: `image.${fileExtension}`
      });
    }
  }

  const uploadImage = async () => {
    const formData = new FormData()
    if(image && category){
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.name
      })
      formData.append('category', category)

      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true
      };

      try{
        const response = await axios.post(`${apiVercel}/user/register_waste`, formData, config)
        if(response && response.status){
          if(response.status === 204){
            Alert.alert('Error', 'Please upload an image')
          }else if(response.status === 200){
            router.push('SuccessRegister')
          }
        }
      }catch(err){
        console.log(err)
        if(err.response && err.response.status === 403){
          Alert.alert('Forbidden', 'You are temporarily ban for registering waste.')
        }
      }
    }else{
      Alert.alert('Error', 'Please upload an image and choose a category')
    }
  }

  return (
    <SafeAreaView className=' bg-fourth flex-1 px-5' style={{gap: 40, paddingTop: moderateScale(40)}}>
      <View>
        <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(34)}}>Register <Text className='text-primary'>Waste</Text></Text>
      </View>
      <View>
        <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>Provide details about the waste item to help improve the app's database</Text>
      </View>
      <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(22)}}>Solid Waste Composition</Text>
      <Dropdown onSelect={(value) => setCategory(value)}/>
      <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(22)}}>Upload Image</Text>

      <Pressable className='justify-center items-center' style={{gap: 15, borderColor: '#9ca3af', borderStyle: 'dashed', borderWidth: image ? 0 : 2, borderRadius: 15, height: verticalScale(150)}} onPress={picker}>
        {image ? <Image source={{uri: image.uri}} className='w-full h-full rounded-2xl'/> : 
        <View className='justify-center items-center gap-y-3'>
          <Icon name='upload-2-fill' size={moderateScale(30)} color='gray'/>
          <Text className='text-gray-400 font-pregular' style={{fontSize: moderateScale(12)}}>Click to upload an image</Text>
        </View>
        }
      </Pressable>

      <View className='flex-1 flex-row justify-between'>
        <TouchableOpacity className='flex-[0.45] border border-gray-300 bg-white justify-center items-center rounded-xl' style={{height: verticalScale(40)}} onPress={() => setImage(null)}>
          <Text className='font-pmedium' style={{fontSize: moderateScale(14)}}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity className='flex-[0.45] bg-primary justify-center items-center rounded-xl' style={{height: verticalScale(40)}} onPress={() => uploadImage()}>
          <Text className='font-pmedium text-white' style={{fontSize: moderateScale(14)}}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Upload