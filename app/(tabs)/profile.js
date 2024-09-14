import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableHighlight, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Profile = () => {
  const [press, setPress] = useState(true);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(null);

  const picker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      setProfile(result.assets[0].uri);
    }
  }

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
        <View className='rounded-full border-[5px] border-white bg-tertiary justify-center items-center' style={{height: verticalScale(98), width: scale(110), marginTop: verticalScale(140)}}> 
          {profile ? <Image source={{uri: profile}} className='rounded-full w-full h-full' resizeMode='cover'/> : 
          <Image source={require("../../assets/images/WasteRedux_Logo_hh.png")} className='rounded-full h-full w-full' resizeMode='contain'/>}
          <Pressable className='items-center justify-center rounded-full absolute bg-white right-0 bottom-1 border-4 border-white' style={{height: verticalScale(20), width: scale(22)}} onPress={picker}>
            <Icon name='camera-line' size={20} color='#81A969'/>
          </Pressable>
        </View>
      </View>
      
      <View className='flex-[0.8] items-center px-5' style={{marginTop: verticalScale(50)}}>
        {/* Name */}
        <View className='w-full' style={{gap: 30, paddingTop: verticalScale(20)}}>
          <View className='flex-row  justify-center items-center' style={{gap: 12}}>
            <Text className='font-psemibold text-center' style={{fontSize: moderateScale(15)}}>Ethan Jay Park {' '}
              <Text><Icon name='pencil-line' color={edit ? 'transparent' : 'gray'} onPress={() => setEdit(true)}/></Text>
            </Text>
            
          </View>
          {/* Buttons */}
          <View className='flex-row w-full justify-between items-center p-[4] bg-gray-100 rounded-lg'>
            <Pressable className='w-[45%] rounded-lg p-2' style={{backgroundColor: press ? "white" : "transparent"}} onPress={() => setPress(true)}>
              <Text className='text-center font-pregular' style={{fontSize: moderateScale(12)}}>Basic Information</Text>
            </Pressable>
            <Pressable className='w-[45%] rounded-lg p-2' style={{backgroundColor: press ? "transparent" : "white"}} onPress={() => setPress(false)}>
              <Text className='text-center font-pregular' style={{fontSize: moderateScale(12)}}>Profile Settings</Text>
            </Pressable>
          </View>

          {/* Basic Info */}
          <View className='w-full' style={{display: press ? 'flex' : 'none'}}>
            <ScrollView contentContainerStyle={{rowGap: 35, paddingVertical: 7, paddingBottom: verticalScale(20)}} showsVerticalScrollIndicator={false}>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>First Name</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 rounded-lg font-pregular px-5' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8)}} editable={edit} placeholder='Ethan Jay' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>Last name</Text> 
                <TextInput keyboardType='default' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8)}} editable={edit} placeholder='Park' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10}}>
                <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>College Department</Text>
                <TextInput keyboardType='default' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8)}} editable={edit} placeholder='CICT' placeholderTextColor={'black'}/>
              </View>
              <View style={{gap: 10, marginBottom: verticalScale(10)}}> 
                <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>Email Adress</Text>
                <TextInput keyboardType='email-address' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' style={{borderColor: edit ? "#81A969" : "#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8)}} editable={edit} placeholder='ethanjay@mail.com' placeholderTextColor={'black'}/>
              </View>
              <View style={{display: edit ? "flex" : "none", marginBottom: moderateScale(20)}}>
                <TouchableHighlight underlayColor={"#81A969"} className='rounded-xl bg-primary justify-center items-center' style={{padding: moderateScale(15), marginBottom: moderateScale(120)}} onPress={() => setEdit(false)}>
                  <Text className='font-pmedium text-center text-white' style={{fontSize: moderateScale(13)}}>Save Changes</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>

          {/* Profile Settings */}
          <View className='w-full' style={{display: press ? 'none' : 'flex', rowGap: moderateScale(16)}}>
           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('VerifyPass')}>
            <View className='flex-row items-start' style={{gap: 15}}>
              <Icon name='mail-fill' size={moderateScale(20)} color='#81A969'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(13)}}>Change Email</Text>
            </View>
            <Icon name='arrow-right-s-line' size={moderateScale(20)} color='#81A969'/>
           </Pressable>

           <Pressable className='flex-row justify-between p-1' onPress={() => router.push('ChangePass')}>
            <View className='flex-row items-start' style={{gap: 15}}>
              <Icon name='lock-2-fill' size={moderateScale(20)} color='#81A969'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(13)}}>Change Password</Text>
            </View>
            <Icon name='arrow-right-s-line' size={moderateScale(20)} color='#81A969'/>
           </Pressable>

           <Pressable onPress={logOut}>
            <View className='flex-row items-start p-1' style={{gap: 15}}>
              <Icon name='logout-box-fill' size={moderateScale(20)} color='#9B3A1C'/>  
              <Text className='font-pregular' style={{fontSize: moderateScale(13)}}>Log out</Text>
            </View>
           </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile