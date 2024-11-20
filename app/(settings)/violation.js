import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import TermsContent from '@/components/TermsContent';
import CustomText from './CustomText';
import CustomParagraph from './CustomParagraph';
import { router } from 'expo-router';

const violation = () => {
  return (
    <SafeAreaView className='px-5' style={{paddingTop: verticalScale(20)}}>
      <View className='bg-white'> 

        <View className='border-b-[1px] border-gray-400 flex-row items-center py-3'>
          <Icon name='arrow-left-s-line' color='black' size={28} className='mr-3' onPress={() => router.back()}/>
          <Text className='font-psemibold text-primary' style={{fontSize: moderateScale(16)}}>App Policy and Regulation</Text>
        </View>

        <View className='py-5 h-screen px-3'>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* pinasok ko sa view para madali style-an */}
            <View className='mb-5'>
              <View className='gap-y-7 mb-3'>
                <Text className='font-plight' style={{fontSize: moderateScale(14.5)}}>App Policy and Regulation</Text>
                <Text className='font-plight' style={{fontSize: moderateScale(14.5)}}>Last updated: April 22, 2024</Text>
                <CustomText bold={'Purpose:'} light={'The purpose of this policy is to establish guidelines and regulations for the use of the Solid Waste Classification App WasteRedux. The App is designed to assist users in classifying recyclable materials, specifically focusing on plastic, metal, and glass items.'}/>
                <CustomText bold={'Scope:'} light={'This policy applies to all users of the WasteRedux App, including but not limited to individuals, organizations, and entities accessing the platform.'}/>
                
              </View>
              <View className='mb-3'>
                <Text className='font-pbold' style={{fontSize: moderateScale(16)}}>Guidelines:</Text>
                <CustomText bold={'1. Appropriate Use:'} light={'The WasteRedux App is intended solely for the classification of plastic, metal, and glass items. Users are prohibited from uploading images that do not fall within these categories.'}/>
                <CustomText bold={'2. Accuracy:'} light={'Users are responsible for ensuring the accuracy of the classification of solid waste items uploaded to the App. Misleading or inaccurate classifications may result in disciplinary action.'}/> 
                <CustomText bold={'3. Compliance:'} light={"Users must comply with all applicable laws, regulations, and guidelines governing the classification and disposal of solid waste materials."}/>
                <CustomText bold={'4. Respectful Behavior:'} light={'Users are expected to engage with the App in a respectful and courteous manner. Any form of abusive, offensive, or inappropriate behavior will not be tolerated.'}/>
                <CustomText bold={'5. Intellectual Property:'} light={'Users must respect the intellectual property rights of others when uploading images to the App. Unauthorized use of copyrighted material is strictly prohibited.'}/>
              </View>
              <View className='mb-7'>
                <View className='mb-5'>
                    <Text className='font-pbold' style={{fontSize: moderateScale(16)}}>Regulations:</Text>
                    <CustomText bold={'1. Image Classification:'} light={"Uploaded images will be classified by the Administrators of the app. Images that do not match the categories of plastic, metal, or glass will be flagged for manual review."}/>
                    <CustomText bold={'2. Manual Review:'} light={"Flagged images will be reviewed by administrators to determine their compliance with the App's guidelines. Users found to have uploaded unrelated or inappropriate images may face disciplinary action."}/>
                    <CustomText bold={'3. Violation Rules:'} />
                    <CustomText bold={'First Violation:'} light={"Users will receive a warning for their first violation of the App's guidelines. The warning will include details of the violation and a reminder of the App's policies."}/>
                    <CustomText bold={'Second Violation:'} light={"Users who commit a second violation of the guidelines will receive a second warning, along with a reminder of the consequences of repeated infractions and the suspension with 1 day for uploading images on the app."}/>
                    <CustomText bold={'Third Violation:'} light={"Users who continue to violate the App's guidelines after being reinstated from suspension may have longer suspension duration of uploading images."}/>
                    <CustomText bold={'Appeal Process:'} light={"Users have the right to appeal disciplinary actions taken against them. Appeals will be reviewed by the App's administrators, and decisions will be communicated to the user in a timely manner."}/>
                </View>
                <View className='gap-y-4'>
                    <CustomText bold={'Policy Enforcement:'} light={"The enforcement of this policy is the responsibility of the App's administrators. All users are expected to comply with the guidelines and regulations outlined in this policy. Failure to adhere to these rules may result in disciplinary action."}/>   
                    <CustomText bold={'Policy Review:'} light={"This policy will be periodically reviewed and updated as necessary to ensure its effectiveness and relevance."}/>  
                </View>
                
                <View className='mb-12'>  
                  <Text className='font-pbold' style={{fontSize: moderateScale(17)}}>Contact Us</Text>
                  <CustomParagraph text='If you have any question about these Terms and Conditions, You can contact us: '/>
                  <Text className='font-pregular' style={{fontSize: moderateScale(15)}}>By email: <Text className='text-primary font-pbold'> wastereduxoffice@gmail.com</Text></Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default violation