import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableHighlight, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Profile = () => {
  const [press, setPress] = useState(true);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(false);

  function logOut(){
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: 'Cancel', style: 'cancel'
      },
      {
        text: 'Log Out', onPress: () => router.push("LogIn")
      }
    ])
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* Profile picture */}
      <View className='bg-primary items-center justify-center' style={{height: verticalScale(130)}}>
        <View className='rounded-full border-[5px] border-white bg-tertiary justify-center items-center' style={{height: verticalScale(100), width: scale(110), padding: moderateScale(8), marginTop: verticalScale(120)}}> 
          <Image source={require("../../assets/images/WasteRedux_Logo_hh.png")} className='h-full w-full' resizeMode='contain'/>
          <View className='items-center justify-center rounded-full absolute bg-white right-0 bottom-1 border-4 border-white' style={{height: verticalScale(22), width: scale(24)}}>
            <Icon name='camera-line' size={24} color='#81A969'/>
          </View>
        </View>
      </View>
      
      <View className='flex-[0.8] items-center px-5' style={{marginTop: verticalScale(40)}}>
        {/* Name */}
        <View className='w-full' style={{gap: 40, paddingTop: verticalScale(20)}}>
          <View className='flex-row  justify-center items-center' style={{gap: 12}}>
            <Text className='font-psemibold text-center' style={{fontSize: moderateScale(20)}}>Ethan Jay Park</Text>
            <Icon name='pencil-line' color={edit ? 'transparent' : 'gray'} onPress={() => setEdit(true)}/>
          </View>
          {/* Buttons */}
          <View className='flex-row w-full justify-between items-center p-[5] bg-gray-100 rounded-lg'>
            <Pressable className='w-[45%] rounded-lg p-3' style={{backgroundColor: press ? "white" : "transparent"}} onPress={() => setPress(true)}>
              <Text className='text-center font-pregular' style={{fontSize: moderateScale(15)}}>Basic Information</Text>
            </Pressable>
            <Pressable className='w-[45%] rounded-lg p-3' style={{backgroundColor: press ? "transparent" : "white"}} onPress={() => setPress(false)}>
              <Text className='text-center font-pregular' style={{fontSize: moderateScale(15)}}>Profile Settings</Text>
            </Pressable>
          </View>

          {/* Basic Info */}
          <View className='w-full' style={{display: press ? 'flex' : 'none'}}>
            <ScrollView contentContainerStyle={{rowGap: 40, paddingVertical: 20}} showsVerticalScrollIndicator={false}>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(15)}}>First Name</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 rounded-lg font-pregular' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(15), padding: moderateScale(11)}} editable={edit} placeholder='Ethan Jay' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(15)}}>Last name</Text> 
                <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(15), padding: moderateScale(11)}} editable={edit} placeholder='Park' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(15)}}>College Department</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(15), padding: moderateScale(11)}} editable={edit} placeholder='CICT' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}> 
                <Text className='font-pmedium' style={{fontSize: moderateScale(15)}}>Email Adress</Text>
                <TextInput keyboardType='email-address' className='border-2 border-gray-400 p-3 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(15), padding: moderateScale(11)}} editable={edit} placeholder='ethanjay@mail.com' placeholderTextColor={'black'}/>
              </View>
              <View style={{display: edit ? "flex" : "none", marginBottom: moderateScale(52)}}>
                <TouchableHighlight underlayColor={"#81A969"} className='rounded-xl h-16 bg-primary justify-center items-center mb-32' onPress={() => setEdit(false)}>
                  <Text className='font-pmedium text-center text-white' style={{fontSize: moderateScale(15)}}>Save Changes</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>

          {/* Profile Settings */}
          <View className='w-full' style={{display: press ? 'none' : 'flex', rowGap: 22}}>
           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('VerifyPass')}>
            <View className='flex-row items-center' style={{gap: 15}}>
              <Icon name='mail-fill' size={moderateScale(24)} color='#81A969'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(17)}}>Change Email</Text>
            </View>
            <Icon name='arrow-right-s-line' size={moderateScale(24)} color='#81A969'/>
           </Pressable>

           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('ChangePass')}>
            <View className='flex-row items-center' style={{gap: 15}}>
              <Icon name='lock-2-fill' size={moderateScale(24)} color='#81A969'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(17)}}>Change Password</Text>
            </View>
            <Icon name='arrow-right-s-line' size={moderateScale(24)} color='#81A969'/>
           </Pressable>

           <Pressable onPress={logOut}>
            <View className='flex-row items-center p-1' style={{gap: 15}}>
              <Icon name='logout-box-fill' size={moderateScale(24)} color='#9B3A1C'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(17)}}>Log out</Text>
            </View>
           </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile