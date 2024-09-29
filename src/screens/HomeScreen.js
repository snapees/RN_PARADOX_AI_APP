import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/Features';
import {dummyMessages} from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  // const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const clear = () => {
    setMessages([]);
  };
  const stopSpeaking = () => {
    setSpeaking(false);
  };

  return (
    <View className="flex-1 bg-blue-200">
      {/* <Text>HomeScreen</Text> */}
      <SafeAreaView style={{flex: 2 / 3}} className="flex-1 flex mx-5">
        {/* bot icon */}
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/ai_bot.png')}
            style={{height: hp(15), width: hp(15)}}
          />
        </View>

        {/* features || messages */}
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{fontSize: wp(4.5)}}
              className="font-semibold text-gray-700 ml-1">
              Assistant
            </Text>
            <View
              style={{fontSize: wp(58)}}
              className=" bg-blue-50 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      // its an ai image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View
                            style={{width: wp(70)}}
                            className="flex bg-blue-200 rounded-2xl p-2 rounded-tl-none">
                            {/* <Text>{message.content}</Text> */}
                            <Image
                              source={{uri: message.content}}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{height: wp(60), width: wp(60)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      // text response
                      return (
                        <View
                          key={index}
                          style={{width: wp(70)}}
                          className="bg-blue-200 rounded-xl p-2 rounded-tl-none">
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    // user input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          style={{width: wp(70)}}
                          className="bg-white rounded-xl p-2 rounded-tr-none">
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <View className="flex-1">
            <Features />
          </View>
        )}

        {/* recording, clear and stop buttons */}
        <View
          style={{flex: 1 / 3}}
          className="flex justify-center items-center ">
          {recording ? (
            <TouchableOpacity>
              <Image
                className="rounded-full"
                source={require('../assets/images/record.gif')}
                style={{width: hp(8), height: hp(8)}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image
                className="rounded-full -bottom-5"
                source={require('../assets/images/recordicon.png')}
                style={{width: hp(8), height: hp(8)}}
              />
            </TouchableOpacity>
          )}

          {messages.length > 0 && (
            <TouchableOpacity
              onPress={clear}
              className="bg-neutral-400 rounded-3xl p-2 absolute right-10 bottom-14">
              <Text className="text-white font-semibold">Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              onPress={stopSpeaking}
              className="bg-red-400 rounded-3xl p-2 absolute left-10 bottom-14">
              <Text className="text-white font-semibold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
