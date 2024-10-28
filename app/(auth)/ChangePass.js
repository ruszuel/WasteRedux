import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { router } from 'expo-router';
import axios from 'axios'
import { Formik } from 'formik';
import * as yup from 'yup'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Constant from 'expo-constants'

const SetUpPass = () => {
    const [visible, setVisible] = useState(false);
    const [newP, setNewP] = useState(false);
    const [confirm, setConfirm] = useState(false);

    const apiURl = Constant.expoConfig.extra.apiUrl
    const apiVercel = Constant.expoConfig.extra.apiUrlVercel

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    const changePassSchema = yup.object().shape({
        oldPass: yup.string().min(6, 'Password must be 6 characters long').required('Enter your old password'),
        newPass: yup.string().min(6, 'Password must be 6 characters long').matches(passwordRules, 'Password must have 1 Uppercase and 1 digit').required('Password is required'),
        confirmPass: yup.string().oneOf([yup.ref('newPass'), null], "Password doesn't match").required('Password is required')
    })
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Change Password</Text>
            <Text className='font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14), width: scale(230)}}>Create a password with at least 6 letters or numbers</Text>
        </View>
        <View>
            <Formik
                initialValues={{oldPass: '', newPass: '', confirmPass: ''}}
                validationSchema={changePassSchema}
                onSubmit={ async (values, actions) => {
                    const data = {
                        old_password: values.oldPass,
                        new_password: values.confirmPass
                    };

                    try{
                        const res = await axios.patch(`${apiVercel}/user/login/profile/change_password`, data)
                        if(res.status === 200){
                            router.push('SuccessReset')
                        }
                    }catch(err){
                        console.log(err)
                        if(err.response.status === 403) {
                            actions.setFieldError('oldPass', 'Incorrect password. Please try again.');
                        }
                    }
                
                }}
            >
            {(props) => (
                <View>
                    <View style={{gap: 30}}>
                        <View>
                            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                                <TextInput className='flex-1 font-pregular' 
                                style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                placeholder='Old Password' 
                                cursorColor={'black'} 
                                onChangeText={props.handleChange('oldPass')}
                                onBlur={props.handleBlur('oldPass')}
                                value={props.values.oldPass}
                                secureTextEntry={visible ? false : true}/>    
                                <Icon name={visible ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setVisible(visible ? false : true)}/>
                            </View>
                            <Text className='text-red-500 mt-1'>{props.errors.oldPass && props.touched.oldPass && props.errors.oldPass}</Text>
                        </View>
                        <View>
                            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                                <TextInput className='font-pregular flex-1' 
                                style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                placeholder='New Password' 
                                keyboardType='default' 
                                cursorColor={'black'} 
                                onChangeText={props.handleChange('newPass')}
                                onBlur={props.handleBlur('newPass')}
                                value={props.values.newPass}
                                secureTextEntry={newP ? false : true}/>    
                                <Icon name={newP ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setNewP(newP ? false : true)}/>
                            </View>
                            <Text className='text-red-500 mt-1'>{props.errors.newPass && props.touched.newPass && props.errors.newPass}</Text>
                        </View>
                        <View>
                            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                                <TextInput className='font-pregular flex-1' 
                                style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                placeholder='Confirm Password' 
                                keyboardType='default' 
                                cursorColor={'black'} 
                                onChangeText={props.handleChange('confirmPass')}
                                onBlur={props.handleBlur('confirmPass')}
                                value={props.values.confirmPass}
                                secureTextEntry={confirm ? false : true}/>    
                                <Icon name={confirm ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setConfirm(confirm ? false : true)}/>
                            </View>
                            <Text className='text-red-500 mt-1'>{props.errors.confirmPass && props.touched.confirmPass && props.errors.confirmPass}</Text>
                        </View>

                        <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
                            <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Update Password</Text>
                        </TouchableOpacity>
                    </View> 
                   
                </View>
            )}

            </Formik>
        </View>
    </SafeAreaView>
  )
}

export default SetUpPass