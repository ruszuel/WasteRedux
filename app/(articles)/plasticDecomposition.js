import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import SubContent from '@/components/SubContent'
import ArticleParags from '@/components/ArticleParags'

const plasticDecomposition = () => {
  return (
    <SafeAreaView className='flex-1 px-5 gap-y-3' style={{paddingTop: verticalScale(20)}}>
      <View className='mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(22)}}>Plastic Decomposition</Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(12)}}>from chariotenergy.com</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View className='mb-5'>
            <Image source={require('../../assets/images/articles/plastic-decomposition.jpg')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <Text className='font-plight text-justify mb-5' style={{fontSize: moderateScale(14)}}>
            Plastic has revolutionized our lives but poses significant problems. It persists in the environment for decades, if not centuries, 
            with every plastic item ever used still on Earth—either as it was, recycled, or broken down into microplastics. Despite its utility, 
            plastic waste is overwhelming and problematic, with estimates suggesting it can last for hundreds of years.
        </Text>
        <Text className='font-pbold text-secondary mb-5' style={{fontSize: moderateScale(20)}}>
            How Long Does Plastic Take to Decompose?
        </Text>
        <SubContent title='Plastics require between 20 and 500 years to decompose,' 
            desc='depending on their composition and structure. The rate of degradation is influenced by sunlight exposure; ultraviolet (UV) radiation causes photodegradation, 
            where UV rays break down plastic molecules. This mechanism is why some landfills use sunlight to accelerate plastic breakdown.'
        />
        <Text className='text-justify font-pregular mb-5' style={{fontSize: moderateScale(14)}}>Here are the estimated decomposition timelines for typical plastic waste items:</Text>
        <View className='mb-5'>
            <Image source={require('../../assets/images/articles/plastic-decomposition.jpg')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <Text className='font-pbold text-secondary mb-5' style={{fontSize: moderateScale(20)}}>Plastic is so difficult to degrade</Text>
        <ArticleParags parags='Why?' bold='Plastic is not a naturally occurring substance.' 
            con='While it is derived from petroleum, which originates from crude oil, plastic itself does not exist in nature. The chemical bonds in plastics differ significantly from those in organic matter, 
            such as fruit, making plastic more resistant to degradation and requiring more energy to break down. Additionally, as plastic degrades, it can release toxins into the surrounding soil, 
            creating further environmental concerns that researchers need to address.'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default plasticDecomposition