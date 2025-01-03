import { View, Text, TextInput, TouchableOpacity, Alert, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { scale, verticalScale, moderateScale, s } from 'react-native-size-matters';
import { Formik } from 'formik';
import * as yup from 'yup'
import Icon from 'react-native-remix-icon';
import axios from 'axios';

const ForgotPass = () => {
  const [verifModal, setVerifModal] = useState(false)
  const [errorModal, setErrorModal] = useState(false)
  const [mail, setMail] = useState(false)
  const mySchema = yup.object().shape({
    email: yup.string().email('Please provide a valid email').required('Please provide your email')
  })

  return (
    <SafeAreaView className='px-5 flex-1 gap-12 bg-fourth' style={{paddingVertical: verticalScale(90)}}>
        <View className='justify-center items-center' style={{gap: 5}}>
          <Text className='font-psemibold text-secondary' style={{fontSize: moderateScale(27)}}>Forgot Password</Text>
          <Text className=' font-pregular text-gray-400 text-center' style={{fontSize: moderateScale(14), width: scale(230)}}>Enter your email below to receive a password reset link</Text>
        </View>
        <View>
          <Formik
            initialValues={{email: ''}}
            validationSchema={mySchema}
            onSubmit={ async (values, actions) => {
              try{
                const response = await axios.post('https://wasteredux-wl7q8.ondigitalocean.app/user/request/otp', {email_address: values.email})
                if(response && response.status){
                  if(response.status === 200){
                    setMail(values.email)
                    setVerifModal(true)
                  }
                  
                }
              }catch(err){
                console.log(err)
                if(err.response.status === 403) {
                  actions.setFieldError('email', "Email doesn't exist");
                }
                else if(err.response.status === 429){
                  setErrorModal(true)
                }
                else if(err.response && err.response === 500){
                  Alert.alert('Error Occured', 'Please try again.')
                }
              }
            }}
          >
          {(props) => (
            <View className='gap-y-4'>
              <View>
                <View>
                  <TextInput className='border border-gray-400 rounded-xl font-pregular' 
                  style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
                  placeholder='Email address' 
                  keyboardType='default' 
                  cursorColor={'black'}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}/>    
                </View>
                <Text className='text-red-500 mt-1 font-pregular'>{props.errors.email && props.touched.email && props.errors.email}</Text>
              </View>
              <TouchableOpacity className='bg-primary rounded-2xl' style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
                <Text className='text-center text-white font-pmedium' style={{fontSize: moderateScale(14)}}>Send Email</Text>
              </TouchableOpacity>
            </View>
          )}
          </Formik>
        </View>

        <Modal animationType='fade' visible={verifModal} transparent={true}>
            <View className='bg-black/50 flex-1 justify-center items-center'>
                <View className='bg-white w-[90%] rounded-md p-5' style={{gap: 20}}>
                    <View className='flex-row items-center' style={{gap: 20}}>
                        <View className='h-14 w-14 bg-secondary rounded-full justify-center items-center'>
                            <Icon name='mail-send-line' color='white' size={35}/>
                        </View>
                        <Text className='font-pmedium flex-1' style={{fontSize: moderateScale(13)}}>Please check your oultook for OTP code</Text>
                    </View>
                    <Pressable className='items-end' onPress={() => {setVerifModal(false); router.push(`/otpVerification?email=${encodeURIComponent(mail)}`)}}>
                        <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(12)}}>Ok</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

        <Modal animationType='fade' visible={errorModal} transparent={true}>
          <View className='bg-black/50 flex-1 justify-center items-center'>
            <View className='bg-white w-[90%] rounded-md p-5' style={{gap: 20}}>
              <View className='flex-row items-center' style={{gap: 20}}>
                <View className='h-14 w-14 bg-red-700 rounded-full justify-center items-center'>
                  <Icon name='close-line' color='white' size={35}/>
                </View>
                <Text className='font-pmedium text-red-700 flex-1' style={{fontSize: moderateScale(13)}}>Too many request! Please try again tomorrow.</Text>
              </View>
              <Pressable className='items-end' onPress={() => {setErrorModal(false)}}>
                <Text className='font-pmedium text-secondary' style={{fontSize: moderateScale(12)}}>Ok</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        
        <Link href={'/LogIn'} className='text-center text-primary font-pmedium' style={{fontSize: moderateScale(11.5)}}>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ForgotPass