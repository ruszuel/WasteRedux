import { View, Text, TouchableOpacity, Image, useWindowDimensions, Dimensions, PixelRatio, ImageBackground, ActivityIndicator, Alert, Modal, Pressable } from 'react-native'
import { router, useRouter } from 'expo-router'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';

const index = () => {
  const { height, width } = useWindowDimensions();
  const [loading, setLoading] = useState(true)
  const [blockedModal, setBlockedModal] = useState(false)
  const [warnedModal, setWarnedModal] = useState(false)

  const checkSession = useCallback(async () => {
    try {
      const isValidId = await AsyncStorage.getItem('auto_log_id')
      if (isValidId) {
        const response = await axios.post('https://wasteredux-wl7q8.ondigitalocean.app/user/auto_login', { auto_id: isValidId })
        if (response && response.status) {
          if (response.status === 200) {
            router.replace('home')
            setLoading(false)
          }
          if (response.status === 201) {
            setLoading(false)
            console.log("session expired")
          }
        }
      }
    } catch (error) {
      if (error && error.response.status === 423) {
        setBlockedModal(true)
      }
      if (error && error.response.status === 403) {
        console.log("session expired")
        setWarnedModal(true)
      }
      if (error && error.response.status === 500) {
        Alert.alert('Error occured', 'Please try again.')
        setLoading(false)
      }
    } finally {
      setLoading(false)
    }

  }, [])

  const sessionDestroy = async () => {
    try {
      const response = await axios.get('https://wasteredux-wl7q8.ondigitalocean.app/user/logout')
      if (response && response.status) {
        if (response.status === 200) {
        }
      }
    } catch (err) {
      console.log(err)
      if (err.response && err.response === 500) {
        Alert.alert('Error Occured', 'Please try again.')
      }
    }
  }

  useEffect(() => {
    checkSession();
  });

  if (loading) {
    return (
      <View className='absolute top-0 left-0 right-0 bottom-0 justify-center items-center'>
        <ActivityIndicator size="large" color="#81A969" />
      </View>
    )
  }

  return (
    <View className="gap-8 flex-1">
      <Modal animationType='fade' visible={blockedModal} transparent={true} onRequestClose={() => setBlockedModal(false)}>
        <View className='bg-black/50 flex-1 justify-center items-center'>
          <View className='bg-white w-[90%] rounded-md p-5 h-fit' style={{ gap: 20 }}>
            <View className='flex-row items-center flex-wrap' style={{ gap: 20 }}>
              <View className='gap-4'>
                <Text className='font-psemibold text-red-700' style={{ fontSize: moderateScale(15) }}>Account blocked!</Text>
                <Text className='font-pmedium text-red-700' style={{ fontSize: moderateScale(13) }}>Your account has been blocked due to uploading inappropriate images.</Text>
              </View>
            </View>
            <Pressable className='items-end' onPress={() => { setBlockedModal(false); sessionDestroy() }}>
              <Text className='font-pmedium text-secondary' style={{ fontSize: moderateScale(12) }}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal animationType='fade' visible={warnedModal} transparent={true} onRequestClose={() => setWarnedModal(false)}>
        <View className='bg-black/50 flex-1 justify-center items-center'>
          <View className='bg-white w-[90%] rounded-md p-5' style={{ gap: 20 }}>
            <View className='flex-row items-center' style={{ gap: 20 }}>
              <View className='gap-3'>
                <Text className='font-psemibold text-red-700' style={{ fontSize: moderateScale(15) }}>Notice</Text>
                <Text className='font-pmedium text-red-700' style={{ fontSize: moderateScale(13) }}>You have violated one of our policies. Repeated violations may result in your account being blocked.</Text>
              </View>

            </View>
            <Pressable className='items-end' onPress={() => { setWarnedModal(false); router.replace('home') }}>
              <Text className='font-pmedium text-secondary' style={{ fontSize: moderateScale(12) }}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Top Image */}
      <View className="flex-[0.9] items-center justify-end bg-tertiary">
        <Image
          source={require('../assets/images/starting image.png')}
          style={{ width: scale(450), height: verticalScale(340), marginBottom: moderateScale(-40) }}
          // className='bg-fuchsia-200'
          resizeMode='contain'
        />
      </View>
      {/* Application Tagline */}
      <View style={{ paddingHorizontal: moderateScale(14) }}>
        <Text className="font-batangas text-secondary" style={{ fontSize: moderateScale(37) }}>Dispose and Recycle</Text>
        <Text className="font-batangas text-secondary" style={{ fontSize: moderateScale(37) }}>Responsibly with</Text>
        <Text>
          <Text className="font-batangas text-secondary" style={{ fontSize: moderateScale(37) }}>Waste</Text>
          <Text className="font-batangas text-primary" style={{ fontSize: moderateScale(37) }}>Redux</Text>
        </Text>
      </View>
      {/* Applicaiton purpose */}
      <View className="px-4" style={{ marginTop: moderateScale(90) }}>
        <Text className="font-pregular text-xl" style={{ fontSize: moderateScale(14) }}>Learn how to recycle effectively through smart scanning</Text>
      </View>
      {/* Application Buttons */}
      <View className="px-4 flex-row justify-between" style={{ marginTop: moderateScale(96) }}>
        <TouchableOpacity className="items-center justify-center bg-primary rounded-2xl" style={{ width: width * 0.45, height: height * 0.07 }} onPress={() => router.replace('LogIn')}>
          <Text className="text-white font-pregular text-center" style={{ fontSize: moderateScale(15) }}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" border-primary border rounded-2xl items-center justify-center" style={{ width: width * 0.45, height: height * 0.07 }} onPress={() => router.push("SignUp")}>
          <Text className="text-primary font-pregular text-center" style={{ fontSize: moderateScale(15) }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index