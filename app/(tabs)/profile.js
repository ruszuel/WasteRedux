import { View, Text, Image, Pressable, TextInput, ScrollView, TouchableHighlight, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios'
import { Formik } from 'formik';
import * as yup from 'yup'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const Profile = () => {
  const [press, setPress] = useState(true);
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState(null);
  const [infos, setInfos] = useState([])

  const [submit, setSubmit] = useState('')

  const profileSchema = yup.object().shape({
    fname: yup.string().min(5, "First name must be 5 characters").max(20).required("First name is required"),
    lname: yup.string().min(5, "Last name must be 5 characters").max(20).required("Last name is required")
  })

  const picker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if(!result.canceled){
      const uri = result.assets[0].uri;
       const fileExtension = uri.split('.').pop();
       const mimeType = `image/${fileExtension}`;
       setProfile({
         uri: uri,
         type: mimeType,
         name: `profile.${fileExtension}`
       });
     }
  }

  const getData = async () => {
    try{
      const res = await axios.get('http://192.168.100.117:3000/user/login/profile')
      const users = res.data
      setInfos(res.data)

      if (users[0] && users[0].profile_picture) {
        setProfile({uri: users[0].profile_picture});
      } else {
        setProfile(null);
      }
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [submit])

  const sessionDestroy = async () => {
    try{
      const response = await axios.get('http://192.168.100.117:3000/user/logout')
      if(response && response.status){
        if(response.status === 200){
          router.push('LogIn')
        }
      }
    }catch(err){
      console.log(err)
      console.log(err.response)
    }
  }

  function logOut(){
    Alert.alert("Log out", "Are you sure you want to log out?", [
      {
        text: 'Cancel', style: 'cancel'
      },
      {
        text: 'Log Out', onPress: () => sessionDestroy()
      }
    ])
  }

  const getBorderColor = (field, error, touched) => {
    if (error[field] && touched[field]) {
      return 'red';
    }
    return edit ? "#81A969" : "#9ca3af";
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* Profile picture */}
      <View className='bg-primary items-center justify-center' style={{height: verticalScale(130)}}>
        <View className='rounded-full border-[5px] border-white bg-tertiary justify-center items-center' style={{height: verticalScale(98), width: scale(110), marginTop: verticalScale(140)}}> 
        <Image source={profile ? { uri: profile.uri } : require( "../../assets/images/react-logo.png")} className='rounded-full w-full h-full' resizeMode='cover'/>
          <Pressable className='items-center justify-center rounded-full absolute bg-white right-0 bottom-1 border-4 border-white' style={{height: verticalScale(20), width: scale(22), display: edit ? 'flex' : 'none'}} onPress={picker}>
            <Icon name='camera-line' size={20} color='#81A969'/>
          </Pressable>
        </View>
      </View>
      
      <View className='flex-[0.8] items-center px-5' style={{marginTop: verticalScale(50)}}>
        {/* Name */}
        <View className='w-full' style={{gap: 30, paddingTop: verticalScale(20)}}>
          <View className='flex-row justify-center items-end'>
            <Text className='font-psemibold text-center leading-5' style={{fontSize: moderateScale(15)}}>{infos.map((val) => `${val.first_name} ${val.last_name}`)}{' '}</Text>
            <Icon name='pencil-line' color={edit ? 'transparent' : 'gray'} onPress={() => setEdit(true)}/>
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
          <View>
            <Formik 
              initialValues={{fname: infos.length > 0 ? infos[0].first_name : '', lname: infos.length > 0 ? infos[0].last_name : ''}}
              validationSchema={profileSchema}
              onSubmit={(val, actions) => {
                actions.setSubmitting(true)
                setEdit(false)
                const update = async () => {
                  const formData = new FormData();
  
                  if (profile) {
                    formData.append('image', {
                      uri: profile.uri,
                      type: profile.type,
                      name: profile.name
                    });
                    formData.append('first_name', val.fname.trim());
                    formData.append('last_name', val.lname.trim());
  
                    const config = {
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'multipart/form-data',
                      },
                      withCredentials: true
                    };
  
                    try{
                      const res = await axios.patch('http://192.168.100.117:3000/user/login/update_profile', formData, config)
    
                      if(res && res.status){
                        if(res.status === 200) {
                          setSubmit(true)
                        }else {
                          console.log(err.response ? err.response.data : err.message);
                        }
                      }
                      
                    }catch(err){
                      console.log(err.response ? err.response.data : err.message);
                    }
                  }
  
                  const data ={
                    first_name: val.fname.trim(),
                    last_name: val.lname.trim()
                  }
  
                  try{
                    const res = await axios.patch('http://192.168.100.117:3000/user/login/update_profile', data)
  
                    if(res && res.status){
                      if(res.status === 200) {
                        console.log('Profile picture updated successfully');
                        setSubmit(true)
                      }else {
                        console.log(err.response ? err.response.data : err.message);
                      }
                    }
                    
                  }catch(err){
                    console.log(err.response ? err.response.data : err.message);
                  }
                }
                update()
              }}
              enableReinitialize
            >

            {(props) => (
              <View className='w-full' style={{display: press ? 'flex' : 'none'}}>
                <ScrollView contentContainerStyle={{rowGap: 35, paddingVertical: 7, paddingBottom: verticalScale(20)}} showsVerticalScrollIndicator={false}>
                  <View className='mb-10 gap-y-7'>
                    <View style={{gap: 10}}>
                      <View className='flex-row justify-between'>
                        <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>First Name</Text>
                        <Text className='text-red-500 mt-1'>{props.errors.fname && props.touched.fname && props.errors.fname}</Text>
                      </View>
                      <TextInput keyboardType='default' className='border-2 border-gray-400 rounded-lg font-pregular px-5' 
                      style={{borderColor: getBorderColor('fname', props.errors, props.touched), fontSize: moderateScale(12), padding: moderateScale(8), color: 'black'}} 
                      editable={edit} 
                      value={props.values.fname}
                      onChangeText={props.handleChange('fname')}
                      onBlur={props.handleBlur('fname')}/>
                    </View>
                    
                    <View style={{gap: 10}}>
                    <View className='flex-row justify-between'>
                        <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>Last Name</Text>
                        <Text className='text-red-500 mt-1'>{props.errors.lname && props.touched.lname && props.errors.lname}</Text>
                      </View>
                      <TextInput keyboardType='default' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' 
                      style={{borderColor: getBorderColor('lname', props.errors, props.touched), fontSize: moderateScale(12), padding: moderateScale(8), color: 'black'}} 
                      editable={edit} 
                      value={props.values.lname} 
                      onChangeText={props.handleChange('lname')}
                      onBlur={props.handleBlur('lname')}/>
                    </View>
                    <View style={{gap: 10}}>
                      <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>College Department</Text>
                      <TextInput keyboardType='default' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' style={{borderColor:"#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8), color: 'black'}} editable={false} value={infos.length && infos[0].college_department} />
                    </View>
                    <View style={{gap: 10, marginBottom: verticalScale(10)}}> 
                      <Text className='font-pmedium' style={{fontSize: moderateScale(12)}}>Email Adress</Text>
                      <TextInput keyboardType='email-address' className='border-2 border-gray-400 px-5 rounded-lg font-pregular text-xl' style={{borderColor:"#9ca3af", fontSize: moderateScale(12), padding: moderateScale(8), color: 'black'}} editable={false} value={infos.length && infos[0].email_address} />
                    </View>
                    <View style={{display: edit ? "flex" : "none", marginBottom: moderateScale(20)}}>
                      <TouchableHighlight underlayColor={"#81A969"} className='rounded-xl bg-primary justify-center items-center' style={{padding: moderateScale(15), marginBottom: moderateScale(120)}} onPress={props.handleSubmit}>
                        <Text className='font-pmedium text-center text-white' style={{fontSize: moderateScale(13)}}>Save Changes</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </ScrollView>
              </View>
            )}
            </Formik>
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