import { router, SplashScreen, Stack, useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
import Constant from 'expo-constants'

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const apiURl = Constant.expoConfig.extra.apiUrl
  const apiVercel = Constant.expoConfig.extra.apiUrlVercel
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
    "Batangas" : require("../assets/fonts/Batangas Bold 700.ttf"),
  });

  const persistLog = async () => {
    try {
      const id = await AsyncStorage.getItem('auto_log_id')
      const data = {
        auto_id: id
      }
      const res = await axios.post('https://waste-redux-server-side.vercel.app/user/auto_login', data)
      if(res.status && res){
        if(res.status === 200){
          router.push('home')
          SplashScreen.hideAsync();
        }
        SplashScreen.hideAsync();
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (fontsLoaded) {
      persistLog()
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown: false,}}/>
      <Stack.Screen name="(auth)" options={{headerShown: false,}}/>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
      <Stack.Screen name="Onboard" options={{headerShown: false}}/>
      <Stack.Screen name="(steps)" options={{headerShown: false}}/>
      <Stack.Screen name="(articles)" options={{headerShown: false}}/>
      <Stack.Screen name="(settings)" options={{headerShown: false}}/>
    </Stack>
  );
}

