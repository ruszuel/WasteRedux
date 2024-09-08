import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-remix-icon';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import TermsContent from '@/components/TermsContent';
import CustomText from './CustomText';
import CustomParagraph from './CustomParagraph';

const termsCondition = () => {
  return (
    <SafeAreaView className='px-5' style={{paddingTop: verticalScale(20)}}>
      <View className='bg-white'> 

        <View className='border-b-[1px] border-gray-400 flex-row items-center py-3'>
          <Icon name='arrow-left-s-line' color='black' size={28} className='mr-3'/>
          <Text className='font-psemibold text-primary' style={{fontSize: moderateScale(16)}}>Terms and Condition</Text>
        </View>

        <View className='py-5 h-screen px-3'>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* pinasok ko sa view para madali style-an */}
            <View className='mb-5'>
              <View className='gap-y-7 mb-3'>
                <Text className='font-pregular' style={{fontSize: moderateScale(15)}}>Terms and Condition</Text>
                <Text className='font-pregular' style={{fontSize: moderateScale(15)}}>Last updated: April 22, 2024</Text>
                <Text className='font-pregular' style={{fontSize: moderateScale(15)}}>Please read these terms and conditions carefully before using our service</Text>
                <Text className='font-pbold' style={{fontSize: moderateScale(20)}}>Interpretation and Definitions</Text>
              </View>
              <View>
                <TermsContent head={'Interpretation'} content={'The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.'}/>
                <CustomText bold={'Application'} light={'means the software program provided by the Company downloaded by You on any electronic device, named WasteRedux.'}/>
                <CustomText bold={'Application Store'} light={'means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.'}/> 
                <CustomText bold={'Affiliate'} light={"means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election"}/>
                <CustomText bold={'Country'} light={'refers to: Philippines'}/>
                <Text className='font-pregular text-justify' style={{fontSize: moderateScale(15)}}>Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to WasteRedux.</Text>
                <CustomText bold={'Device'} light={'Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.'}/>
                <CustomText bold='Service' light='refers to the Application'/>
                <CustomText bold='Terms and Condition' light='(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.'/>
                <CustomText bold='Third-party Social Media Service' light='means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.'/>
                <CustomText bold='You' light='means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.'/>
              </View>
              <View className='mb-5'>
                <View>
                  <Text className='font-pbold' style={{fontSize: moderateScale(20)}}>Acknowledgement</Text>
                  <CustomParagraph text='These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.'/>
                  <CustomParagraph text='Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.'/>
                  <CustomParagraph text='By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.'/>
                  <CustomParagraph text='You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.'/>
                  <CustomParagraph text='Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.'/>
                </View>
              </View>
              
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default termsCondition