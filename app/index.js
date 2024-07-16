import { View, Text, TouchableOpacity, Image } from 'react-native'
import { router } from 'expo-router'

const index = () => {
  return (
    <View className="gap-8"> 
      {/* Top Image */}
      <View className="justify-end items-center h-[700] bg-tertiary">
        <Image 
          source={require('../assets/images/starting image.png')}
          className="h-[500] w-[800] -mb-9"
          resizeMode='contain'
        />
      </View>
      {/* Application Tagline */}
      <View className="px-4">
        <Text className="font-batangas text-6xl text-secondary">Dispose and Recycle</Text>
        <Text className="font-batangas text-6xl text-secondary">Responsibly with</Text>
        <Text>
          <Text className="font-batangas text-6xl text-secondary">Waste</Text>
          <Text className="font-batangas text-6xl text-primary">Redux</Text> 
        </Text>
      </View>
      {/* Applicaiton purpose */}
      <View className="px-4 mt-24 ">
        <Text className="font-pregular text-xl">Learn how to recycle effectively through smart scanning</Text>
      </View>
      {/* Application Buttons */}
      <View className="px-4 flex-row justify-between mt-11">
        <TouchableOpacity className="p-5 bg-primary w-48 rounded-2xl" onPress={() => router.push("LogIn")}>
          <Text className="text-white text-xl text-center">Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity className="p-5 border-primary border w-48 rounded-2xl" onPress={() => router.push("Recycle")}>
          <Text className="text-primary text-xl text-center">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default index