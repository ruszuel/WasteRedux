import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import ArticleView from '@/components/ArticleView'
import ArticleParags from '@/components/ArticleParags'
import SubContent from '@/components/SubContent'

const glassOrPlastic = () => {
  return (
    <SafeAreaView className='flex-1 px-5 gap-y-3' style={{paddingTop: verticalScale(20)}}>
      <View className='mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(26)}}>Glass or Plastic</Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>from goingzerowaste.com</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View className='mb-5'>
            <Image source={require('../../assets/images/articles/glass.jpg')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <Text className='font-pregular text-justify mb-5' style={{fontSize: moderateScale(16)}}>Glass is endlessly recyclable without losing quality or purity. However, the recycling process isn't as straightforward as it seems.</Text>
        <View>
            <Text className='font-pbold text-secondary mb-5' style={{fontSize: moderateScale(26)}}>The Truth About Glass</Text>

            <ArticleParags parags='Glass takes an incredibly long time to break down—up to' bold='one million years or more in a landfill.' 
                con='Its long life cycle and the fact that it doesn’t leach harmful chemicals make it better to reuse and repurpose glass rather than recycle it immediately.'
            />

            <ArticleParags parags='Additionally,' bold='glass is nonporous and impermeable'
                con='so there’s no risk of unpleasant aftertastes affecting the contents. It also has a minimal rate of chemical interaction, 
                ensuring that the flavors, strength, and aroma of the contents are preserved.'
            /> 

            <ArticleParags parags='This is why many zero-waste advocates recommend saving empty jars for reuse.'
                bold='Glass is perfect for storing bulk foods, leftovers, and homemade cleaning products!'
            />
        </View>

        <View>
            <Text className='font-pbold text-secondary mb-5' style={{fontSize: moderateScale(26)}}>Problems with Glass</Text>
            <ArticleParags parags='Creating new glass requires specific sand, which is being consumed faster than it can be replenished. Unlike desert sand, only a particular type of sand is suitable, mostly harvested from riverbeds and seabeds.' 
                bold='This extraction disrupts ecosystems, harms microorganisms, and increases the risk of flooding and erosion in coastal areas.'
            />
            <ArticleParags parags='Another issue with glass is that it’s heavier and more fragile than plastic. This results in higher transportation emissions and costs because glass is more prone to breakage and requires more energy to transport.' />
            <View className='mb-5'>
                <Image source={require('../../assets/images/articles/plastic.jpg')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
            </View>
            <ArticleView title='Problems with Plastic' description='Plastic has a significant carbon footprint,  emitting C02 throghout its entire lifecycle, from production disposal.'/>
            <SubContent title='Plastic takes over 450 years to decompose in the environment and 1,000 years in a landfill.' 
                desc='While this seems shorter than glass’s million-year breakdown, plastic leaches toxic chemicals and doesn’t fully decompose. Instead, it breaks into microplastics that pollute water, soil, and air.'
            />
            <ArticleView title='Glass or Plastics?'
                description='When comparing glass and plastic, neither is perfect, but glass generally has the advantage environmentally. While both have pros and cons, reducing single-use items is crucial. Opt for glass over plastic when possible, 
                and choose products with recycled content to support recycling efforts. Reusing glass bottles and jars further minimizes waste and environmental impact.'
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default glassOrPlastic