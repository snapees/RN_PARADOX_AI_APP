import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#93c5fd" />
      <SafeAreaView className="flex-1 flex justify-around bg-blue-300">
        <View className="space-y-2">
          <Text
            style={{fontSize: wp(8)}}
            className="text-center text-4xl font-bold text-blue-950">
            PARADOX
          </Text>
          <Text
            style={{fontSize: wp(4)}}
            className="text-center tracking-wider text-blue-950 font-semibold">
            Future is here, Powered by AI
          </Text>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/ai_paradox.png')}
            style={{width: wp(75), height: wp(75)}}
          />
        </View>
        {/* <Text>Welcome</Text> */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="bg-blue-700 mx-10 p-5 rounded-full">
          <Text
            style={{fontSize: wp(6)}}
            className="text-center font-bold text-white text-2xl">
            Let's Chat
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}
