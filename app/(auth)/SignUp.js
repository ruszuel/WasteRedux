import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router'
import CollegesDropdown from '@/components/CollegesDropdown';
import Dropdown from '@/components/Dropdown';
import axios from 'axios'
import * as yup from 'yup'
import {Formik} from 'formik'

const SignUp = () => {
  const [usermail, setUSerMail] = useState([])

  useEffect(() => {
    const fetchmail = async () => {
      try{
        const res = await axios.get('http://192.168.100.117:3000/user')
        const mails = res.data.map(mail => mail.email_address)
        setUSerMail(mails)
      }catch(err){
        console.log(err)
      }
    }

    fetchmail()
  }, [])

  const createSchema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required().test('is-valid-email', 'Use the university email', (val) => {return val.endsWith('@ms.bulsu.edu.ph')}).test('is-exisitng-email', 'Email already registered', (val) => {return !usermail.includes(val)}),
    college: yup.string().required('Select your college deartment')
  })


  return (
    <SafeAreaView className="flex-1 px-5  justify-center" style={{paddingVertical: moderateScale(80)}}>
      <View className='flex gap-2' style={{paddingVertical: moderateScale(20)}}>
        {/* header */}
        <Text className="text-secondary text-center font-medium font-psemibold" style={{fontSize: moderateScale(27)}}>
          Create an Account
        </Text>
        <Text className="text-lg text-center font-pregular text-gray-400" style={{fontSize: moderateScale(14)}}>
          Enter your personal details
        </Text>
      </View>

      <View>
        <Formik
          initialValues = {{fname: '', lname: '', email: '', college: ''}}
          onSubmit = {(values, actions) => {
            router.push(`/SetPass?fname=${encodeURIComponent(values.fname)}&lname=${encodeURIComponent(values.lname)}&email=${encodeURIComponent(values.email)}&college=${encodeURIComponent(values.college)}`)
            actions.resetForm()
          }}
          validationSchema={createSchema}
        >
        {(props) => (
          <View className="gap-y-5" style={{paddingVertical: moderateScale(38)}}> 
          <View>
            <View >
              <TextInput className="rounded-xl border font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
              placeholder='First Name' 
              keyboardType='default' 
              onChangeText={props.handleChange('fname')} 
              onBlur={props.handleBlur('fname')}
              value={props.values.fname}/>   
            </View>
           <Text className='text-red-500 mt-1'>{props.errors.fname && props.touched.fname && props.errors.fname}</Text>
          </View>
          <View>
            <View>
              <TextInput className="rounded-xl border font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
              placeholder='Last Name' 
              keyboardType='default' 
              onChangeText={props.handleChange('lname')} 
              onBlur={props.handleBlur('lname')}
              value={props.values.lname}/> 
            </View>
            <Text className='text-red-500 mt-1'>{props.errors.lname && props.touched.lname && props.errors.lname}</Text>
          </View>
          <View>
            <View>
              <TextInput className="rounded-xl border font-pregular border-gray-400" style={{fontSize: moderateScale(13.5), padding: moderateScale(14)}} 
              placeholder='Email Address' 
              keyboardType='default' 
              onChangeText={props.handleChange('email')} 
              onBlur={props.handleBlur('email')}
              value={props.values.email}/> 
            </View>
            <Text className='text-red-500 mt-1'>{props.errors.email && props.touched.email && props.errors.email}</Text>
          </View>
          <View>
            <View>
              <CollegesDropdown onSelect={props.handleChange('college')}/>
            </View>
            <Text className='text-red-500 mt-1'>{props.errors.college && props.touched.college && props.errors.college}</Text>
          </View>
          <View>
            <TouchableOpacity className="bg-primary rounded-2xl" style={{padding: moderateScale(15)}} onPress={props.handleSubmit}>
              <Text className="text-center font-pregular text-white" style={{fontSize: moderateScale(14)}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        )}
        </Formik>
      </View>
      
      <View className="flex-row gap-2 items-center justify-center mt-16">
        <Text className='font-pregular' style={{fontSize: moderateScale(12)}}>Already have an account?</Text>
        <Text className="text-primary font-pmedium" style={{fontSize: moderateScale(12)}} onPress={() => router.push('LogIn')}>Log in</Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp