import { View, Text, Button, Pressable, StatusBar, Alert, Linking } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import * as Location from 'expo-location'

const Scan = () => {
  const [type, setType] = useState('back');
  const cameraRef = useRef(null);
  let [formattedAddress, setFormattedAddress] = useState()
  let [location, setLocation] = useState(null)
  const [cameraPermission, requestCameraPermission] = useCameraPermissions();
  const [locationPermission, requestLocationPermission] = Location.useForegroundPermissions();
  const locationSubscription = useRef(null);
  const [isTracking, setIsTracking] = useState(false);

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

      locationSubscription.current = await Location.watchPositionAsync({accuracy: Location.Accuracy.Highest,
        timeInterval: 10000, distanceInterval: 20
      }, async (newLocation) => {
        const geocodedlo = await Location.reverseGeocodeAsync({latitude: newLocation.coords.latitude, longitude: newLocation.coords.longitude})
        if(geocodedlo){
          const add = `${geocodedlo[0].streetNumber} ${geocodedlo[0].street}, ${geocodedlo[0].district}, ${geocodedlo[0].city}, ${geocodedlo[0].subregion}`
          setFormattedAddress(add)
          Alert.alert("Address", add)
        }
        console.log(formattedAddress)
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
          <Pressable className='bg-white rounded-full flex-1' onPress={() => handleCameraPress()}>
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