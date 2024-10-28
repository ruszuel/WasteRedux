import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-remix-icon'
import { router, useLocalSearchParams} from 'expo-router'
import { Formik } from 'formik';
import * as yup from'yup'
import axios from 'axios'
import Constant from 'expo-constants'

const SetPass = () => {
  const apiURl = Constant.expoConfig.extra.apiUrl
  const apiVercel = Constant.expoConfig.extra.apiUrlVercel
  const [showPassword, setShowPassword] = useState(false);
  const {fname, lname, email, college} = useLocalSearchParams()
  const [confPass, setConfPass] = useState(false);
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }; 
  const {height, width} = Dimensions.get('window');

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
  const passSchema = yup.object().shape({
    password: yup.string().min(6).matches(passwordRules, 'Password must have 1 Uppercase 1 digit').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password doesn\'t match').required('Password is required')
  })

  return (
    <SafeAreaView className="px-5 flex-1 justify-center" style={{paddingVertical: width * 0.16}}>
      <View className='flex gap-2 justify-center' style={{paddingVertical: moderateScale(10)}}>
        {/* header */}
        <Text className="text-secondary text-center font-psemibold" style={{fontSize: moderateScale(27)}}>
          Set up a password
        </Text>
        <Text className="text-center self-center font-pregular text-gray-400" style={{fontSize: moderateScale(14), width: scale(230)}}>
          Create a password with at least 6 letters or numbers
        </Text>
      </View>

      <View>
        <Formik
          initialValues={{password: '', confirmPassword: ''}}
          validationSchema={passSchema}
          onSubmit={(values, actions) => {
            const saveData = async () => {
              try{
                const data = {
                  first_name: fname,
                  last_name: lname,
                  email_address: email,
                  college_department: college,
                  user_password: values.confirmPassword
                }

                const mail = {
                  email_address: email
                }

                const res = await axios.post(`${apiVercel}/user/create`, data)
                const response = await axios.post(`${apiVercel}/user/verify`, mail)
                console.log(res.data)
                console.log(response.data)
                router.push('/SuccessSignUp')
              }catch(err){
                console.log(err)
              }
            }

            saveData()
          }}
        >
        
        {(props) => (
          <View>
            <View className="gap-7" style={{paddingVertical: moderateScale(38)}}>
                {/* pass */}
                <View>
                  <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
                    <TextInput className="flex-1 font-pregular" 
                      style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}}
                      placeholder='Password' 
                      keyboardType='default' 
                      secureTextEntry={!showPassword}
                      onChangeText={props.handleChange('password')}
                      onBlur={props.handleBlur('password')}
                      value={props.values.password}
                    /> 
                    <Icon
                      name={showPassword ? 'eye-fill' : 'eye-off-fill'}
                      size={moderateScale(18)}
                      color={'#aaa'}
                      style={{paddingHorizontal: moderateScale(25)}}
                      onPress={toggleShowPassword}
                    />   
                  </View> 
                  <Text className='text-red-500 mt-1'>{props.errors.password && props.touched.password && props.errors.password}</Text>
                </View>
                {/* confpass */}
                <View>
                  <View className="flex-row items-center justify-center rounded-xl border-2 border-gray-400">
                    <TextInput className="flex-1 font-pregular" 
                      style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}}
                      placeholder='Confirm Password' 
                      keyboardType='default' 
                      secureTextEntry={confPass ? false : true}
                      onChangeText={props.handleChange('confirmPassword')}
                      onBlur={props.handleBlur('confirmPassword')}
                      value={props.values.confirmPassword}
                    /> 
                    <Icon
                      name={confPass ? 'eye-fill' : 'eye-off-fill'}
                      size={moderateScale(18)}
                      color={'#aaa'}
                      style={{paddingHorizontal:moderateScale(25)}}
                      onPress={() => setConfPass(confPass ? false : true)}
                    />   
                  </View>
                  <Text className='text-red-500 mt-1'>{props.errors.confirmPassword && props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
                  <Text className="text-center font-pregular text-white" style={{fontSize: moderateScale(14)}}>Sign up</Text>
                </TouchableOpacity>
              </View>
          </View>
        )}
        </Formik>
      </View>

      <View className="items-center justify-center" style={{marginTop: moderateScale(60)}}>
        <Text className='font-pregular' style={{fontSize: moderateScale(12)}}>By continuing, you agree with Waste Redux'</Text>
        <Text className="text-primary font-medium font-pregular" style={{fontSize: moderateScale(12)}}>Terms of Service 
        <Text className="text-black font-normal font-pregular"> and </Text> 
        Privacy Policy</Text>
      </View>
    </SafeAreaView>
  )
}

export default SetPass