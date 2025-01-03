import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router, useLocalSearchParams } from 'expo-router'
import Icon from 'react-native-remix-icon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as yup from 'yup'
import { Formik } from 'formik';
import axios from 'axios';

const ResetPass = () => {
    const [newP, setNewP] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const { email } = useLocalSearchParams()
    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    const resetSchema = yup.object().shape({
        password: yup.string().min(6, "Password must be at least 6 characters long").matches(passwordRules, "Password must include uppercase and number").required("Password is required"),
        confirmPass: yup.string().oneOf([yup.ref('password'), null], "Password doesn\t match").required("Password is required")
    })
  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
            <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Reset Password</Text>
            <Text className='font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14), width: scale(230)}}>Create a password with at least 6 letters or numbers</Text>
        </View>

        <View>
            <Formik
                initialValues={{password: '', confirmPass: ''}}
                validationSchema={resetSchema}
                onSubmit={ async (values, actions) => {
                    const data = {
                        new_pass: values.confirmPass,
                        email_address: email
                    }

                    try{    
                        const response = await axios.patch('https://wasteredux-wl7q8.ondigitalocean.app/user/reset_pass', data)
                        if(response && response.status){
                            if(response.status === 200){
                                router.push('SuccessReset')
                            }
                        }
                    }catch(err){
                        console.log(err)
                        if(err.response && err.response === 500){
                            Alert.alert('Error Occured', 'Please try again.')
                        }
                    }
                }}
            >
            {(props) => (
                <View>
                    <View style={{gap: 30, marginBottom: 15}}>
                        <View>
                            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                                <TextInput className='font-pregular flex-1' 
                                style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                placeholder='New Password' 
                                cursorColor={'black'} 
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                secureTextEntry={newP ? false : true}/>    
                                <Icon name={newP ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setNewP(newP ? false : true)}/>
                            </View>
                            <Text className='text-red-500 mt-1 font-pregular'>{props.errors.password && props.touched.password && props.errors.password}</Text>
                        </View>

                        <View>
                            <View className='border border-gray-400 rounded-xl flex-row justify-between items-center'>
                                <TextInput className='font-pregular flex-1' 
                                style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                placeholder='Confirm Password' 
                                cursorColor={'black'} 
                                onChangeText={props.handleChange('confirmPass')}
                                onBlur={props.handleBlur('confirmPass')}
                                secureTextEntry={confirm ? false : true}/>    
                                <Icon name={confirm ? 'eye-fill' : 'eye-off-fill'} style={{paddingHorizontal: moderateScale(25)}} size={moderateScale(18)} color='gray' onPress={() => setConfirm(confirm ? false : true)}/>
                            </View>
                            <Text className='text-red-500 mt-1 font-pregular'>{props.errors.confirmPass && props.touched.confirmPass && props.errors.confirmPass}</Text>
                        </View>
                    </View>
                    <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
                        <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            )}
            </Formik>
        </View>
        
        <Link href={'/LogIn'} className='text-center text-primary font-pmedium' style={{fontSize: moderateScale(11.5)}}>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ResetPass