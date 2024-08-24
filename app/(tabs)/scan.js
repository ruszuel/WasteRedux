import { View, Text, Button, Pressable, StatusBar, Alert, Linking } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const Scan = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState('back');
  const cameraRef = useRef(null);


  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if(!permission.granted){
    return(
      <View className='justify-center items-center flex-1 bg-black p-4' style={{gap: 20}}>
        <View className='justify-center items-center' style={{gap: 20}}>
          <Icon name='camera-fill' size={28} color='white'/>
          <Text className='text-white font-pmedium text-base text-center'>Allow WasteRedux access your camera to scan photos within the app.</Text>
        </View>
        <Pressable className='bg-blue-600 p-2 rounded-md' onPress={ permission.canAskAgain ? requestPermission : blocked}>
          <Text className='text-white font-pmedium text-base'>Turn On</Text>
        </Pressable>
      </View>
    )
  }

  function blocked() {
    Alert.alert('Permission Needed', 'In order to use the waste scanner, you must give permission for WasteRedux to access the camera. You can grant this permission in the Settings app.',[
      {
        text: 'Cancel', style: 'cancel'
      },
      {
        text: 'Go to settings', onPress: () => Linking.openSettings()
      },
    ]);
  }

  return (
    <View className='flex-1'>
      <CameraView className='flex-1 justify-center items-end flex-row pb-20' facing={type} ref={cameraRef} flash='auto' style={{gap:90}}>
        <Pressable className='h-16 w-16 rounded-full justify-center'>
          <Pressable className='bg-white rounded-full flex-1 justify-center items-center'>
            <Icon name='upload-fill' size={28} color='black' onPress={() => router.push('upload')}/>
          </Pressable>
        </Pressable>
        <View className='h-20 w-20 rounded-full border-white border-2 justify-center p-1'>
          <Pressable className='bg-white rounded-full flex-1'>
          </Pressable>
        </View>
        <View className='h-16 w-16 rounded-full justify-center'>
          <Pressable className='bg-white rounded-full flex-1 justify-center items-center'>
            <Icon name='repeat-2-line' size={28} color='black' onPress={() => setType((prev) => prev === 'back' ? 'front' : 'back')}/>
          </Pressable>
        </View>
      </CameraView>
    </View>
  )
}

export default Scan