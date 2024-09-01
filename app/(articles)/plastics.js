import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import ArticleView from '@/components/ArticleView'

const plastics = () => {
  return (
    <SafeAreaView className='flex-1 px-5 gap-y-3' style={{paddingTop: verticalScale(20)}}>
      <View className='mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(26)}}>Plastics - Resin Codes</Text>
      </View>
      <ScrollView bounces={false} >
        <View className='mb-5'>
          <Image source={require ('../../assets/images/articles/plastic-resin-codes.png')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <ArticleView title='What is a resin code?' description='Resin codes originated from the Society of the Plastics Industry back in 1988. However, 
          they were only administered in 2008 through the ASTM International Resin Identification Coding System (RIC).
          From this, resin codes have been placed on almost every piece of plastic which will continue for the foreseeable future.'
        />
        <ArticleView title= 'what is the purpose?' description='The plastic resin code, also known as the Resin Identification Code, indicates the type of plastic resin used in a product, such as a bottle or container.
          It typically ranges from 1 to 7 and is displayed at the center of arrows on the product label.'
        />
        <ArticleView title='What do they mean?' description='Codes 1 and 2 can usually be recycled. 
          However, resin code 3 is not typically collected from households and is in decline. 
          With the introduction of the plastic bag tax, resin code 4 now means that plastic bags can be given back to supermarkets for reuse.
          Finally, resin code 5 and 6 are usually now recycled whereas resin 7 is usually not.' 
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default plastics