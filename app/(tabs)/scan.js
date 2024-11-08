import { View, Text, Button, Pressable, StatusBar, Alert, Linking } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import * as Location from 'expo-location'
import axios from 'axios';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

const Scan = () => {
  const [type, setType] = useState('back');
  const cameraRef = useRef(null);
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const [loc, setLoc] = useState()
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();
  const locationSubscription = useRef(null);
  const [isTracking, setIsTracking] = useState(false);

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
        timeInterval: 10000, distanceInterval: 20
      }, async (newLocation) => {
        const { latitude, longitude } = newLocation.coords;
        const isInsideArea = isPointInPolygon([latitude, longitude], polygon);
        setLat(latitude)
        setLong(longitude)
        if (isInsideArea) {
          Alert.alert('Location Update', 'You are inside the BSU');
          setLoc('Bulacan State University')
        } else {
          Alert.alert('Location Update', 'You are outside the BSU');
          setLoc('Outside BSU')
        }
        // Alert.alert('Location', `lat: ${newLocation.coords.latitude} \n long: ${newLocation.coords.longitude}`)
        // const geocodedlo = await Location.reverseGeocodeAsync({latitude: newLocation.coords.latitude, longitude: newLocation.coords.longitude})
      })
      
    }catch(error){
      setIsTracking(false);
      Alert.alert(
        'Location Error',
        'Unable to track location. Please check your settings.'
      );
      console.error('Location tracking error:', error);
    }
  })

  const stopLocationTracking = async () => {
    if (locationSubscription.current) {
      await locationSubscription.current.remove();
      locationSubscription.current = null;
    }
    setIsTracking(false);
  };

  useEffect(() => {
    startLocationTracking()
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
          const compressed = await manipulateAsync(
          photo.uri,
          [{resize: {width: 180, height: 180}}],
          {format: SaveFormat.JPEG})

          const formData = new FormData()
          formData.append('image', {
            uri: compressed.uri,
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
          console.log(res.data.prediction.predictedClass)
          Alert.alert('Prediction', res.data.prediction.predictedClass, [
            {
              text: 'Proceed', onPress: () => {
                res.data.type === 'Non-recyclable' ? router.push('/(steps)/NonRecycle') : router.replace('/(steps)/Recycle')
              }
            }
          ]);
        }
        
      }catch(err){
        console.log(err)
        Alert.alert('Error Occured', 'Please scan again')
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

  return (
    <View className='flex-1'>
      <CameraView className='flex-1 justify-center items-end flex-row' facing={type} ref={cameraRef} flash='auto' style={{gap:90, paddingBottom: moderateScale(40)}}>
        <Pressable className='rounded-full justify-center' style={{height: verticalScale(45), width: scale(50)}}>
          <Pressable className='bg-white rounded-full flex-1 justify-center items-center' onPress={() => router.push('upload')}>
            <Icon name='upload-fill' size={28} color='black'/>
          </Pressable>
        </Pressable>
        <View className='rounded-full border-white border-2 justify-center p-1' style={{height: verticalScale(55), width: scale(60)}}>
          <Pressable className='bg-white rounded-full flex-1' onPress={() => takePicture()}>
          </Pressable>
        </View>
        <View className='rounded-full justify-center' style={{height: verticalScale(45), width: scale(50)}}>
          <Pressable className='bg-white rounded-full flex-1 justify-center items-center' onPress={() => setType((prev) => prev === 'back' ? 'front' : 'back')}>
            <Icon name='repeat-2-line' size={28} color='black'/>
          </Pressable>
        </View>
      </CameraView>
    </View>
  )
}

export default Scan