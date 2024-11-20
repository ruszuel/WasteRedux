import { View, Text, Button, Pressable, StatusBar, Alert, Linking } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import * as Location from 'expo-location'
import axios from 'axios';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { useFocusEffect } from '@react-navigation/native';
import { Modal } from 'react-native';

const Scan = () => {
  const [type, setType] = useState('back');
  const [light, setLight] = useState(false)
  const cameraRef = useRef(null);
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const [loc, setLoc] = useState()
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();
  const locationSubscription = useRef(null);
  const [isTracking, setIsTracking] = useState(false);
  const [isModelOpen, setIsModalOpen] = useState(false)
  const [predictedClass, setPredictedClass] = useState('')
  const [wasteType, setWasteType] = useState('')
  const [errorModal, setErrorModal] = useState(false)

  function isPointInPolygon(point, polygon) {
    const [x, y] = point;
    let isInside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const [xi, yi] = polygon[i];
        const [xj, yj] = polygon[j];

        const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) isInside = !isInside;
    }
    return isInside;
  }


  const openSettingsAlert = () => {
    Alert.alert(
      'Permissions Required',
      'To use the scanner, WasteRedux needs camera and location access. Please enable these permissions in Settings.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Settings', onPress: () => Linking.openSettings() }
      ]
    );
  };

  const requestPermissions = async () => {
    try {
      if (!cameraPermission?.granted && cameraPermission?.canAskAgain) {
        const cameraStatus = await requestCameraPermission();
        if (!cameraStatus.granted) {
          if (!cameraStatus.canAskAgain) {
            openSettingsAlert();
            return;
          }
        }
      }

      if (!locationPermission?.granted && locationPermission?.canAskAgain) {
        const locationStatus = await requestLocationPermission();
        if (!locationStatus.granted) {
          if (!locationStatus.canAskAgain) {
            openSettingsAlert();
            return;
          }
        }
      }

    } catch (error) {
      Alert.alert(
        'Permission Required',
        `${error.message}. Please grant the required permissions to use this feature.`,
        [{ text: 'OK' }]
      );
    }
  };

  const startLocationTracking = useCallback(async () => {
    console.log('Tracking')
    try{
      setIsTracking(true)

      await stopLocationTracking();

      const polygon = [
        [14.859796811404639, 120.81436436348872],  // Gate 4
        [14.858098713344246, 120.81590931588866],  // Gate 3
        [14.856539076923555, 120.81336566043512],  // End of Pimentel
        [14.857244248016649, 120.81223645044504],  // Gate 1
        [14.857767939763484, 120.81207551790634],  // COL of Industrial
      ];

      locationSubscription.current = await Location.watchPositionAsync({accuracy: Location.Accuracy.Highest,
        timeInterval: 60000, distanceInterval: 20
      }, async (newLocation) => {
        const { latitude, longitude } = newLocation.coords;
        const isInsideArea = isPointInPolygon([latitude, longitude], polygon);
        setLat(latitude)
        setLong(longitude)
        if (isInsideArea) {
          setLoc('Bulacan State University')
        } else {
          setLoc('Outside BSU')
        }
        // Alert.alert('Location', `lat: ${newLocation.coords.latitude} \n long: ${newLocation.coords.longitude}`)
        // const geocodedlo = await Location.reverseGeocodeAsync({latitude: newLocation.coords.latitude, longitude: newLocation.coords.longitude})
      })
      
    }catch(error){
      setIsTracking(false);
      // Alert.alert(
      //   'Location Error',
      //   'Unable to track location. Please check your settings.'
      // );
    }
  })

  const stopLocationTracking = async () => {
    if (locationSubscription.current) {
      await locationSubscription.current.remove();
      locationSubscription.current = null;
    }
    setIsTracking(false);
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     startLocationTracking();
  //   }, [locationPermission])
  // );

  useEffect(() => {
    startLocationTracking();
    return () => {
      stopLocationTracking();
      console.log('Untracking')
    };
  }, []);

  const handleCameraPress = async () => {
    try {
      if (!isTracking) {
        await startLocationTracking();
      } else {
        await stopLocationTracking();
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to handle location tracking');
    }
  };

  const handlePermissionRequest = () => {
    if (
      (cameraPermission && !cameraPermission.granted && !cameraPermission.canAskAgain) ||
      (locationPermission && !locationPermission.granted && !locationPermission.canAskAgain)
    ) {
      openSettingsAlert();
    } else {
      requestPermissions();
    }
  };

  const takePicture = async () => {
    if (cameraRef) {
      handleCameraPress()
      try{
        if(loc){
          const photo = await cameraRef.current.takePictureAsync();
      
          const formData = new FormData()
          formData.append('image', {
            uri: photo.uri,
            type: 'image/jpeg',
            name: 'waste.jpeg'
          })
          formData.append('lat', lat)
          formData.append('long',long)
          formData.append('loc',loc)

          const config = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data',
            },
            withCredentials: true
          };

          const res = await axios.post('https://seal-app-uuotj.ondigitalocean.app/user/predict', formData, config)
          setPredictedClass(res.data.prediction)
          setIsModalOpen(true)
          setWasteType(res.data.type)
        }
        else{
          setErrorModal(true)
          // Alert.alert('Error Occured', 'Please scan again')
        }
        
      }catch(err){
        console.log(err)
        // Alert.alert('Error Occured', 'Please scan again')
        setErrorModal(true)
      }
      
    }
  };

  if(!cameraPermission || !locationPermission){
    return <View/>
  }

  if (!cameraPermission.granted || !locationPermission.granted ) {
    return (
      <View className="flex-1 justify-center items-center bg-black p-4 space-y-6">
        <View className="items-center space-y-4">
          <Icon name="camera-fill" size={28} color="white" />
          <Text className="text-white font-pmedium text-center" style={{ fontSize: moderateScale(14) }}>
            WasteRedux needs access to your camera and location to function properly.
          </Text>
        </View>

        <Pressable
          className="bg-blue-600 px-6 py-3 rounded-md"
          onPress={() => handlePermissionRequest()}
        >
          <Text className="text-white font-pmedium" style={{ fontSize: moderateScale(14) }}>
            {(cameraPermission?.canAskAgain || locationPermission?.canAskAgain)
              ? 'Grant Permissions'
              : 'Open Settings'}
          </Text>
        </Pressable>
      </View>
    );
  }

  const classificationRes = () => {
    if(wasteType === 'Disposable'){
      switch (predictedClass) {
        case 'Plastic':
          router.push('/(steps)/NonRecycle')
        break;

        case 'Glass':
          router.push('/(steps)/nonRecycleGlass')
        break;

        case 'Metal':
          router.push('/(steps)/nonRecycleMetal')
        break;
      }
    }else if(wasteType === 'Recyclable'){
      switch (predictedClass) {
        case 'Plastic':
          router.push('/(steps)/recyclePlastic')
        break;

        case 'Glass':
          router.push('/(steps)/recycleGlass')
        break;

        case 'Metal':
          router.push('/(steps)/recycleMetal')
        break;
      }
    }
  }

  return (
    <View className='flex-1'>
      <Modal animationType='fade' visible={isModelOpen} transparent={true}>
        <View className='bg-black/50 flex-1 justify-center items-center'>
          <View className='bg-white w-[90%] rounded-md p-5' style={{gap: 20}}>
            <View className='flex-row items-center' style={{gap: 20}}>
              <View className='h-12 w-12 bg-primary rounded-full justify-center items-center'>
                <Icon name='qr-scan-2-line' color='white' size={32}/>
              </View>
              <Text className='font-pmedium' style={{fontSize: moderateScale(15)}}>The scanned item is <Text className='text-primary font-psemibold'>{predictedClass}</Text></Text>
            </View>
            <Pressable className='items-end' onPress={() => {setIsModalOpen(false); classificationRes()}}>
              <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(12)}}>Proceed</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal animationType='fade' visible={errorModal} transparent={true}>
        <View className='bg-black/50 flex-1 justify-center items-center'>
          <View className='bg-white w-[90%] rounded-md p-5' style={{gap: 20}}>
            <View className='flex-row items-center' style={{gap: 20}}>
              <View className='h-14 w-14 bg-red-700 rounded-full justify-center items-center'>
                <Icon name='close-line' color='white' size={35}/>
              </View>
              <Text className='font-pmedium text-red-700 flex-1' style={{fontSize: moderateScale(13)}}>Oops! We couldn't process your scan. Please try again.</Text>
            </View>
            <Pressable className='items-end' onPress={() => {setErrorModal(false)}}>
              <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(12)}}>Scan again</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <CameraView className='flex-1 justify-center items-center' facing={type} enableTorch={light} ref={cameraRef} style={{gap:80, paddingBottom: moderateScale(40)}}>
      <View className='w-full flex-[0.9] items-center justify-center'>
          <View className='w-[90%] h-[80%] items-center'>
            <View style={{position: 'absolute', width: 30, height: 30, borderColor: 'white', borderWidth: 4, borderRadius: 5}} className='top-0 left-0 border-r-0 border-b-0'/>
            <View style={{position: 'absolute', width: 30, height: 30, borderColor: 'white', borderWidth: 4, borderRadius: 5}} className='top-0 right-0 border-l-0 border-b-0' />
            <View style={{position: 'absolute', width: 30, height: 30, borderColor: 'white', borderWidth: 4, borderRadius: 5}} className='bottom-0 left-0 border-r-0 border-t-0' />
            <View style={{position: 'absolute', width: 30, height: 30, borderColor: 'white', borderWidth: 4, borderRadius: 5}} className='bottom-0 right-0 border-l-0 border-t-0' />
          </View>  
        </View>
        <View className='flex-[0.1] w-full justify-center items-end flex-row' style={{gap:90}}>
          <Pressable className='rounded-full justify-center' style={{height: verticalScale(45), width: scale(50)}}>
            <Pressable className='bg-white rounded-full flex-1 justify-center items-center' onPress={() => setLight((prev) => prev ? false : true)}>
              <Icon name='flashlight-line' size={28} color='black'/>
            </Pressable>
          </Pressable>
          <View className='rounded-full border-white border-2 justify-center p-1' style={{height: verticalScale(55), width: scale(60)}}>
            <Pressable className='bg-white rounded-full flex-1' onPress={() => takePicture()}></Pressable>
          </View>
          <View className='rounded-full justify-center' style={{height: verticalScale(45), width: scale(50)}}>
            <Pressable className='bg-white rounded-full flex-1 justify-center items-center' onPress={() => setType((prev) => prev === 'back' ? 'front' : 'back')}>
              <Icon name='repeat-2-line' size={28} color='black'/>
            </Pressable>
          </View>
        </View>
      </CameraView>
    </View>
  )
}

export default Scan