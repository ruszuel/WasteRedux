import { View, Text, TouchableOpacity, Image, useWindowDimensions, Dimensions, PixelRatio, ImageBackground } from 'react-native'
import { router } from 'expo-router'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const index = () => {
  const {height, width} = useWindowDimensions();

  return (
    <View className="gap-8 flex-1"> 
      {/* Top Image */}
      <View className="flex-[0.9] items-center justify-end bg-tertiary">
        <Image 
          source={require('../assets/images/starting image.png')} 
          style={{width: scale(450), height: verticalScale(340), marginBottom: moderateScale(-40)}}
          // className='bg-fuchsia-200'
          resizeMode='contain'
        />
      </View>
      {/* Application Tagline */}
      <View style={{paddingHorizontal: moderateScale(14)}}>
        <Text className="font-batangas text-secondary" style={{fontSize: moderateScale(37)}}>Dispose and Recycle</Text>
        <Text className="font-batangas text-secondary" style={{fontSize: moderateScale(37)}}>Responsibly with</Text>
        <Text>
          <Text className="font-batangas text-secondary" style={{fontSize: moderateScale(37)}}>Waste</Text>
          <Text className="font-batangas text-primary" style={{fontSize: moderateScale(37)}}>Redux</Text> 
        </Text>
      </View>
      {/* Applicaiton purpose */}
      <View className="px-4" style={{marginTop: moderateScale(90)}}>
        <Text className="font-pregular text-xl" style={{fontSize: moderateScale(14)}}>Learn how to recycle effectively through smart scanning</Text>
      </View>
      {/* Application Buttons */}
      <View className="px-4 flex-row justify-between" style={{marginTop: moderateScale(96)}}>
        <TouchableOpacity className="items-center justify-center bg-primary rounded-2xl" style={{width: width * 0.45, height: height * 0.07}} onPress={() => router.push("LogIn")}>
          <Text className="text-white font-pregular text-center" style={{fontSize: moderateScale(15)}}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity className=" border-primary border rounded-2xl items-center justify-center" style={{width: width * 0.45, height: height * 0.07}} onPress={() => router.push("SignUp")}>
          <Text className="text-primary font-pregular text-center" style={{fontSize: moderateScale(15)}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index