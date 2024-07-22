import { View, Text, Button, Pressable, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Icon from 'react-native-remix-icon';

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
      <View className='justify-center items-center flex-1'>
        <Button onPress={requestPermission} title='grant permission'/>
      </View>
    )
  }
  return (
    <View className='flex-1'>
      <StatusBar hidden={true}/>
      <CameraView className='flex-1' facing={type} ref={cameraRef} flash='auto'>
      <Pressable className='justify-end flex-1 mb-5 px-5'>
        <Icon name='repeat-2-line' size={28} color='white' onPress={() => setType((prev) => prev === 'back' ? 'front' : 'back')}/>
      </Pressable>
      </CameraView>
    </View>
  )
}

export default Scan