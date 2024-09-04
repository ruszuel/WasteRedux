import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import SubContent from '@/components/SubContent'
import NumberedContent from '@/components/NumberedContent'

const recyclingContamination = () => {
  return (
    <SafeAreaView className='flex-1 px-5 gap-y-3' style={{paddingTop: verticalScale(20)}}>
      <View className='mb-5'>
        <Text className='font-pbold text-secondary' style={{fontSize: moderateScale(26)}}>Recycling Contamination</Text>
        <Text className='font-pregular' style={{fontSize: moderateScale(14)}}>from cleanriver.com</Text>
      </View>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <View className='mb-5'>
            <Image source={require('../../assets/images/articles/recycling-contamination.jpg')} style={{height: verticalScale(150), width: '100%'}} resizeMode='cover'/>
        </View>
        <SubContent title='Recycling contamination' desc='occurs when non-recyclable materials or waste are introduced into the recycling system. 
            For example, if a recycling bin is designated for beverage containers, any materials outside this category, such as paper, can contaminate the entire recycling stream.' 
        />
        <Text className='font-pbold text-secondary text-justify mb-5' style={{fontSize: moderateScale(16)}}>Key sources of recyling contaminaton include:</Text>
        <NumberedContent num='1.' content='Residual food waste or liquids in containers that can spill or leak onto other recyclables.'/>
        <NumberedContent num='2.' content='Disposal of hazardous or inappropriate materials, such as needles, batteries, diapers, and paint.'/>
        <NumberedContent num='3.' content='Confusing bin labeling can confuse users about proper disposal practices.'/>
        <NumberedContent num='4.' content='Inconsistent recycling standards across different cities and states, where items accepted as recyclable in one location may be deemed contaminants elsewhere.'/>
        <NumberedContent num='5.' content='Improperly disposed items, such as grocery bags, straws, and coffee lids.'/>
        <Text className='font-pbold text-secondary text-justify mb-3' style={{fontSize: moderateScale(16)}}>To help reduce recycling contamination, consider the following practices:</Text>
        <SubContent title='Proper sorting' desc='Ensure items are placed in the correct recycling stream.' />
        <SubContent title='Bin design' 
            desc='Use bins with specific openings for different materials—such as large square openings for trash, smaller circular openings for beverage containers, and thin rectangular openings for paper products. 
            This design helps prevent incorrect disposal.' 
        />
        <SubContent title='Bin Placement' desc='Position bins close to each other to prevent users from placing items in the nearest bin out of convenience.'/>
        <SubContent title='Container Cleanlinness' 
            desc='Rinse containers to remove food residues, oils, or liquids before recycling. While thorough cleaning is not necessary, a simple rinse helps reduce contamination.'
        />
        <Text className='font-pregular text-justify mb-5' style={{fontSize: moderateScale(16)}}>Implementing these strategies can enhance recycling efficiency and support effective waste management practices.</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default recyclingContamination