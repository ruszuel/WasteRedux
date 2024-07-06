import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <View>
        <Text>WasteRedux</Text>
        {/* settings icon */}
      </View>

      <View>
        <>
        {/* cloud icon */}
        <Text>Did you know?</Text>
        </>

        <Text> The Philippines ranks as the world third largest dumpers of plastics into the ocean</Text>
      </View>
      {/* Articles */}
      <View>
        <View>
          <Text>Articles</Text>
          <Link href='#'>See all</Link>
        </View>
        <View>
          {/* articles in flat list API will be used in this section */}
        </View>
      </View>
      {/* Recent Scan */}
      <View>
        <>
          <Text> Recent Scan</Text>
          <Link href='#'>See all</Link>
        </>
        <>
            {/*History of user getting into database*/}
        </>
      </View>
    </SafeAreaView>
  )
}

export default Home