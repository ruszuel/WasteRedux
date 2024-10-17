import { router, SplashScreen, Stack, useNavigation } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

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

  useEffect(() => {
    const checkSession = async () => {
      const isValidId = await AsyncStorage.getItem('auto_log_id')
      if(isValidId){
        const response = await axios.post('http://192.168.100.117:3000/user/auto_login', {auto_id: isValidId})
        if(response && response.status){
          if(response.status === 200){
            router.replace('/(tabs)/home')
          }
        }
      }
      SplashScreen.hideAsync();
    }

    if (error) throw error;

    if (fontsLoaded) {
      checkSession()
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

