import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const SuccessSignUp = () => {
  return (
    <SafeAreaView className="px-14 flex-1 justify-center gap-10">
        <View className='items-center'>
            {/* Image here */}
            <Icon
                name='shield-check-fill'
                color={'#81A969'}
                size={moderateScale(140)}
            />
        </View>
        <View className="gap-y-7">
            <Text className=" text-primary text-5xl text-center font-pbold" style={{fontSize: moderateScale(30), lineHeight: 51}}>You're all set!</Text>
            <Text className="text-center font-pregular" style={{fontSize: moderateScale(14)}}>Your account has been successfully created!</Text>
        </View>
        <View className="mt-16">
            <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(15)}} onPress={() => router.replace('LogIn')}>
                <Text className="text-center font-pregular text-white" style={{fontSize: moderateScale(14)}}>Go to Login</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default SuccessSignUp