import { View, Text, Image, Pressable, TextInput, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';

const Profile = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-[0.2] bg-primary'>

      </View>
      
      <View className='flex-[0.8] justify-center items-center px-5'>
        <View className='h-40 w-40 rounded-full border-[5px] border-white bg-gray-400 p-2 -mt-20  mb-5 justify-center items-center'> 
          <Image source={require("../../assets/images/react-logo.png")} className='h-40 w-40' resizeMode='contain'/>
          <View className='items-center justify-center h-8 w-8 rounded-full absolute bg-white right-0 bottom-1 border-4 border-white'>
            <Icon name='camera-line' size={24} color='#81A969'/>
          </View>
        </View>
        <View className='w-full' style={{gap: 40}}>
          <View className='flex-row  justify-center items-center' style={{gap: 12}}>
            <Text className='font-psemibold text-2xl text-center'>Ethan Jay Park</Text>
            <Icon name='pencil-line' color='gray'/>
          </View>

          <View className='flex-row w-full justify-between items-center p-[5] bg-gray-100 rounded-lg'>
            <Pressable className='w-[45%] bg-white rounded-lg p-3'>
              <Text className='text-center text-lg font-pregular'>Basic Information</Text>
            </Pressable>
            <Pressable className='w-[45%] rounded-lg p-3'>
              <Text className='text-center text-lg font-pregular'>Profile Settings</Text>
            </Pressable>
          </View>
          {/* Basic Info */}
          <View className='w-full' style={{gap: 40}}>
            <View style={{gap: 10}}>
              <Text className='font-pmedium text-lg'>First Name</Text>
              <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' readOnly={true} placeholder='Ethan Jay' placeholderTextColor={'black'}/>
            </View>
            <View style={{gap: 10}}>
              <Text className='font-pmedium text-lg'>Last name</Text> 
              <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' editable={false} placeholder='Park' placeholderTextColor={'black'}/>
            </View>
            <View style={{gap: 10}}>
              <Text className='font-pmedium text-lg'>College Department</Text>
              <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' editable={false} placeholder='CICT' placeholderTextColor={'black'}/>
            </View>
            <View style={{gap: 10}}> 
              <Text className='font-pmedium text-lg'>Email Adress</Text>
              <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' editable={false} placeholder='ethanjay@mail.com' placeholderTextColor={'black'}/>
            </View>
            <View className='h-4'></View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile