import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableHighlight} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';

const Profile = () => {
  const [press, setPress] = useState(true);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* Profile picture */}
      <View className='flex-[0.2] bg-primary items-center'>
        <View className='h-40 w-40 rounded-full border-[5px] border-white bg-gray-400 p-2 fixed mt-28 mb-5 justify-center items-center'> 
          <Image source={require("../../assets/images/react-logo.png")} className='h-40 w-40' resizeMode='contain'/>
          <View className='items-center justify-center h-8 w-8 rounded-full absolute bg-white right-0 bottom-1 border-4 border-white'>
            <Icon name='camera-line' size={24} color='#81A969'/>
          </View>
        </View>
      </View>
      
      <View className='flex-[0.8] items-center px-5 mt-16'>
        {/* Name */}
        <View className='w-full py-9' style={{gap: 40}}>
          <View className='flex-row  justify-center items-center' style={{gap: 12}}>
            <Text className='font-psemibold text-2xl text-center'>Ethan Jay Park</Text>
            <Icon name='pencil-line' color={edit ? 'transparent' : 'gray'} onPress={() => setEdit(true)}/>
          </View>
          {/* Buttons */}
          <View className='flex-row w-full justify-between items-center p-[5] bg-gray-100 rounded-lg'>
            <Pressable className='w-[45%] rounded-lg p-3' style={{backgroundColor: press ? "white" : "transparent"}} onPress={() => setPress(true)}>
              <Text className='text-center text-lg font-pregular'>Basic Information</Text>
            </Pressable>
            <Pressable className='w-[45%] rounded-lg p-3' style={{backgroundColor: press ? "transparent" : "white"}} onPress={() => setPress(false)}>
              <Text className='text-center text-lg font-pregular'>Profile Settings</Text>
            </Pressable>
          </View>

          {/* Basic Info */}
          <View className='w-full' style={{display: press ? 'flex' : 'none'}}>
            <ScrollView contentContainerStyle={{rowGap: 40, paddingVertical: 20}} showsVerticalScrollIndicator={false}>
              <View style={{gap: 10}}>
                <Text className='font-pmedium text-lg'>First Name</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af"}} editable={edit} placeholder='Ethan Jay' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium text-lg'>Last name</Text> 
                <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af"}} editable={edit} placeholder='Park' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium text-lg'>College Department</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af"}} editable={edit} placeholder='CICT' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}> 
                <Text className='font-pmedium text-lg'>Email Adress</Text>
                <TextInput keyboardType='email-address' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af"}} editable={edit} placeholder='ethanjay@mail.com' placeholderTextColor={'black'}/>
              </View>
              <View className='mb-52' style={{display: edit ? "flex" : "none"}}>
                <TouchableHighlight underlayColor={"#81A969"} className='rounded-xl h-16 bg-primary justify-center items-center mb-32' onPress={() => setEdit(false)}>
                  <Text className='font-pmedium text-xl text-center text-white'>Save Changes</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>

          {/* Profile Settings */}
          <View className='w-full' style={{display: press ? 'none' : 'flex', rowGap: 22}}>
           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('VerifyPass')}>
            <View className='flex-row items-center' style={{gap: 15}}>
              <Icon name='mail-fill' size={28} color='#81A969'/>  
              <Text className='font-pregular text-xl'>Change Email</Text>
            </View>
            <Icon name='arrow-right-s-line' size={28} color='#81A969'/>
           </Pressable>

           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('ChangePass')}>
            <View className='flex-row items-center' style={{gap: 15}}>
              <Icon name='lock-2-fill' size={28} color='#81A969'/>  
              <Text className='font-pregular text-xl'>Change Password</Text>
            </View>
            <Icon name='arrow-right-s-line' size={28} color='#81A969'/>
           </Pressable>

           <Pressable>
            <View className='flex-row items-center p-1' style={{gap: 15}}>
              <Icon name='logout-box-fill' size={28} color='#9B3A1C'/>  
              <Text className='font-pregular text-xl'>Log out</Text>
            </View>
           </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile