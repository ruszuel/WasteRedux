import { View, Text, TouchableOpacity, Image, useWindowDimensions, Dimensions, PixelRatio } from 'react-native'
import { router } from 'expo-router'

const index = () => {
  const {height, width} = Dimensions.get('window');
  const fontScales = PixelRatio.getFontScale();
  const getFontSize = size => size / fontScales;

  return (
    <View className="gap-8 flex-1"> 
      {/* Top Image */}
      <View className="justify-items-end items-center bg-tertiary" style={{height: height * 0.65}}>
        <Image 
          source={require('../assets/images/starting image.png')} 
          style={{width: width * 1.25, height: height * 0.9}}
          resizeMode='contain'
        />
      </View>
      {/* Application Tagline */}
      <View className="px-4">
        <Text className="font-batangas text-secondary" style={{fontSize: width * 0.115}}>Dispose and Recycle</Text>
        <Text className="font-batangas text-secondary" style={{fontSize: width * 0.115}}>Responsibly with</Text>
        <Text>
          <Text className="font-batangas text-secondary" style={{fontSize: width * 0.115}}>Waste</Text>
          <Text className="font-batangas text-primary" style={{fontSize: width * 0.115}}>Redux</Text> 
        </Text>
      </View>
      {/* Applicaiton purpose */}
      <View className="px-4 mt-24 ">
        <Text className="font-pregular text-xl" style={{fontSize: width * 0.038}}>Learn how to recycle effectively through smart scanning</Text>
      </View>
      {/* Application Buttons */}
      <View className="px-4 flex-row justify-between mt-11">
        <TouchableOpacity className="items-center justify-center bg-primary rounded-2xl" style={{width: width * 0.45, height: height * 0.07}} onPress={() => router.push("Onboard")}>
          <Text className="text-white font-pregular text-center" style={{fontSize: width * 0.04}}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" border-primary border rounded-2xl items-center justify-center" style={{width: width * 0.45, height: height * 0.07}} onPress={() => router.push("otpVerification")}>
          <Text className="text-primary font-pregular text-center" style={{fontSize: width * 0.04}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index