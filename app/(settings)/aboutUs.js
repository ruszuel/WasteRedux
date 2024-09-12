import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'

const aboutUs = () => {
  return (
    <SafeAreaView className='px-5' style={{paddingTop: moderateScale(20)}}>
        <View className='mb-7'>
            <Text className='font-batangas text-secondary' style={{fontSize: moderateScale(40)}}>About  
                <Text className='text-primary'> us</Text>
            </Text>
        </View>
        <ScrollView>
            <View className='mb-7'>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>
                    WasteRedux is an innovative mobile application developed to raise environmental awareness and promote sustainable practices, 
                    particularly at Bulacan State University. Our major goal is to educate people about effective solid waste management practices.
                </Text>
            </View>

            <View className='mb-7'>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>
                    Moreover, WasteRedux provides step-by-step procedures for recycling waste materials and guidelines on proper waste disposal. 
                    Even in challenging conditions such as crumpled or dirty waste, our application remains reliable in detecting and offering 
                    appropriate recommendations for waste management methods.
                </Text>
            </View>

            <View className='mb-7'>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>
                    Our commitment to user convenience is reflected in the image insertion capability, allowing users to effortlessly upload images 
                    from their device's gallery. Furthermore, users can actively contribute to our dataset by registering unrecognized solid waste 
                    materials, ensuring continuous improvement and relevance.
                </Text>
            </View>

            <View>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>
                    WasteRedux is specifically designed for use in the Philippines, with a dataset that includes images of Philippine 
                    solid waste materials. As such, it is designed to recognize and handle the country's particular waste management concerns.
                </Text>
            </View>

            <View>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(16)}}>
                    Join us in our mission to transform waste management practices and build a greener, more sustainable future with WasteRedux. 
                    Let us work together to make a meaningful change in our environment, one scan at a time.
                </Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default aboutUs