import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Formik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';

const ForgotPass = () => {

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
                const response = await axios.post('https://seal-app-uuotj.ondigitalocean.app/user/request/otp', {email_address: values.email})
                if(response && response.status){
                  if(response.status === 200){
                    router.push(`/otpVerification?email=${encodeURIComponent(values.email)}`)
                  }
                  
                }
              }catch(err){
                console.log(err)
                if(err.response.status === 403) {
                  actions.setFieldError('email', "Email doesn't exist");
                }
                else if(err.response.status === 429){
                  Alert.alert('Error', 'Too many request. Please try again after 4hrs.')
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
       
        
        <Link href={'/LogIn'} className='text-center text-primary font-pmedium' style={{fontSize: moderateScale(11.5)}}>Back to Login</Link>
    </SafeAreaView>
  )
}

export default ForgotPass