import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import ArticleView from '@/components/ArticleView'
import SubContent from '@/components/SubContent'

const plastics = () => {
  return (
    <SafeAreaView className='flex-1 px-5 gap-y-3' style={{paddingTop: verticalScale(20)}}>
      <View className='mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(26)}}>Plastics - Resin Codes</Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>from fnbreport.ph</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View className='mb-5'>
          <Image source={require ('../../assets/images/articles/plastic-resin-codes.png')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <ArticleView title='What is a resin code?' description='Resin codes originated from the Society of the Plastics Industry back in 1988. However, 
          they were only administered in 2008 through the ASTM International Resin Identification Coding System (RIC).
          From this, resin codes have been placed on almost every piece of plastic which will continue for the foreseeable future.'
        />
        <ArticleView title= 'What is the purpose?' description='The plastic resin code, also known as the Resin Identification Code, indicates the type of plastic resin used in a product, such as a bottle or container.
          It typically ranges from 1 to 7 and is displayed at the center of arrows on the product label.'
        />
       <View>
        <Text className='font-pbold text-secondary mb-5' style={{fontSize: moderateScale(26)}}>What do they mean?</Text>
          <SubContent title='Recycling Code No. 1 - PETE/PET:' desc='Polyethylene Terephthalate (PETE/PET) is commonly used for beverage bottles, 
          medicine jars, and clothing fibers, and should not be reused or heated due to potential bacterial growth; 
          it is widely accepted in recycling programs if emptied and cleaned.'/>
          <SubContent title='Recycling Code No. 2 – HDPE:' desc='High-density polyethylene (HDPE) is used in milk bottles, grocery bags, and detergent containers;
           it is durable, heat-resistant, and generally accepted by recycling programs when thoroughly washed.'/>
          <SubContent title='Recycling Code No. 3 – PVC:' desc='Polyvinyl Chloride (PVC) is used in pipes and window frames but is rarely recycled due to its high toxin content; 
          it should not be used for food handling.'/>
          <SubContent title='Recycling Code No. 4 – LDPE:' desc='Low-density polyethylene (LDPE), found in condiment bottles and grocery bags, 
          is flexible and durable but seldom accepted by recycling programs; reuse is encouraged before disposal.'/>
          <SubContent title='Recycling Code No. 5 – PP:' desc='Polypropylene (PP) is used in microwave-safe containers and kitchenware; 
          it is heat-resistant and increasingly accepted for recycling, though heating food in glass or ceramics is recommended.'/>
          <SubContent title='Recycling Code No. 6 – PS:' desc='Polystyrene (PS), or Styrofoam, is found in disposable plates and packing foams; 
          it is difficult to recycle, potentially harmful, and often breaks into smaller pieces, complicating disposal.'/>
          <SubContent title='Recycling Code No. 7 – Miscellaneous Plastics:' desc='This category includes various plastics not covered by the first six codes; 
          they are often difficult to recycle and may contain harmful substances like bisphenol-A, found in items such as CDs, baby bottles, 
          medical storage containers, eyeglasses, and electronics.'/>
       </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default plastics