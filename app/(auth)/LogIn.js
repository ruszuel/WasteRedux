import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions, PixelRatio, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'expo-checkbox'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import Icon from 'react-native-remix-icon';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false); 
    const {height, width} = Dimensions.get('window');
    const loginSchema = yup.object().shape({
        email: yup.string().email("Enter a valid email").required("Email is required"),
        password: yup.string().required("Password is required"),
        rememberme: yup.boolean()
    })
  return (
    <SafeAreaView className="flex-1 px-5 justify-center" style={{paddingVertical: width * 0.16}}>
        <View className='flex gap-2' style={{paddingTop: height * 0.07}}>
            {/* header */}
            <Text className='font-psemibold text-secondary text-center' style={{fontSize: moderateScale(27), lineHeight: 45 }}>
               Welcome Back
            </Text>
            <Text className="font-pregular text-center text-gray-400" style={{fontSize: moderateScale(14)}}>
                Log in to continue
            </Text>
        </View>

        <View>
            <Formik 
                initialValues={{email: '', password: '', rememberme: false}}
                validationSchema={loginSchema}
                onSubmit={(val) => {
                    const passData = async () => {
                        try {
                            const data = {
                                email_address: val.email,
                                user_password: val.password,
                                rememberme: val.rememberme
                            }
                            const res = await axios.post('http://192.168.100.117:3000/user/login', data)
                            if(res && res.status){
                                if(res.status === 200){
                                    if(val.rememberme){
                                        await AsyncStorage.setItem('auto_log_id', res.data.sessionId)
                                    }
                                    router.push('home')
                                }else if(res.status === 201){
                                    router.push('Onboard')
                                }
                            }
                        }catch(err){
                            console.log(err)
                            if(err.response){
                                if (err.response.status === 403)
                                    Alert.alert("Error", "Email not yet verified")
                                else if(err.response.status === 401)
                                    Alert.alert("Error", "Unauthorized: Invalid credentials");
                            } 
                            
                        }
                    }
                    passData()
                }}
            >
            {(props) => (
                <View>
                    <View className="py-10" style={{gap: 20}}>
                        {/* inputs */}
                        <View style={{gap: 25}}>
                            <View>
                                <View className="justify-center">
                                    <TextInput className="rounded-xl border border-gray-400 font-pregular" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                                    placeholder='Email address' 
                                    keyboardType='default'
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                    />    
                                </View>
                                <Text className='text-red-500 mt-1'>{props.errors.email && props.touched.email && props.errors.email}</Text>
                            </View>

                            <View>
                                <View className="flex-row items-center justify-center rounded-xl border border-gray-400">
                                    <TextInput className="flex-1" 
                                        style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}}
                                        placeholder='Password' 
                                        keyboardType='default' 
                                        secureTextEntry={showPassword ? false : true}
                                        onChangeText={props.handleChange('password')}
                                        onBlur={props.handleBlur('password')}
                                    /> 
                                    <Icon
                                        name={showPassword ? 'eye-fill' : 'eye-off-fill'}
                                        size={moderateScale(18)}
                                        color={'gray'}
                                        style={{paddingHorizontal: 25}}
                                        onPress={() => setShowPassword(showPassword ? false : true)}
                                    />   
                                </View>
                                <Text className='text-red-500 mt-1'>{props.errors.password && props.touched.password && props.errors.password}</Text>
                            </View>
                        </View>
                        
                        <View className="flex-row justify-between items-end" style={{paddingTop: width * 0.04}}>
                            <Pressable className="flex-row items-start gap-2">
                            <Checkbox value={props.values.rememberme}  onValueChange={() => props.setFieldValue('rememberme', !props.values.rememberme)} color={'#81A969'} style={{width: scale(12), height: verticalScale(11)}}/>
                            <Text className='font-pregular' style={{fontSize: moderateScale(12)}}>Remember me</Text>
                            </Pressable>
                            <View>
                                <Text className="text-primary font-psemibold text-base" style={{fontSize: moderateScale(12)}} onPress={() => router.push('ForgotPass')}>Forgot Password</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        {/* Buttons */}
                        <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
                            <Text className="text-center text-white font-pregular" style={{fontSize: moderateScale(14)}}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            )}
            </Formik>
        </View>
        
        <View className="flex-row items-center gap-6" style={{padding: width * 0.035}}>
            {/* or seperator */}
            <View className="flex-1 h-[1px] bg-slate-400 border-solid"></View>
            <View>
                <Text className="text-center text-slate-400" style={{fontSize: width * 0.035}}>or</Text>
            </View>
            <View className="flex-1 h-[1px] bg-slate-400 border-solid"></View>
        </View>
        <View className='ml-3'>
            {/* Google API */}
            <TouchableOpacity className="p-4 bg-white rounded-full flex-row items-center justify-center gap-x-4">
                <MaterialCommunityIcons
                name='google'
                color={'#81A969'}
                size={24}/>
                <Text className="text-center self-center text-primary font-psemibold" style={{fontSize: moderateScale(14)}}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 items-center justify-center mt-16" style={{marginTop: height * 0.09}}>
            <Text style={{fontSize: moderateScale(12)}}>Don't have an account?</Text>
            <Text className="text-primary font-medium" style={{fontSize: moderateScale(12)}} onPress={() => router.push("SignUp")}>Register</Text>
        </View>
    </SafeAreaView>
  )
}

export default LogIn