import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6)}} className="font-semibold text-blue-700">
        Features
      </Text>
      <View className="bg-blue-300 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/chatgpticon.png')}
            style={{height: hp(5), width: hp(5)}}
          />
          <Text
            style={{fontSize: wp(5)}}
            className="font-semibold text-blue-700">
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-900">
          ChatGPT is used for natural language tasks like content creation,
          chatbot development, translation, and more, depending on the user's
          needs.
          {/* ChatGPT is primarily used for natural language understanding and
          generation, making it valuable for tasks like content creation,
          chatbot development, language translation, and more. It can be used
          for a variety of tasks, and largely depends on how each user chooses
          to use it. */}
        </Text>
      </View>

      <View className="bg-emerald-300 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/dalle.png')}
            style={{height: hp(5), width: hp(5)}}
          />
          <Text
            style={{fontSize: wp(5)}}
            className="font-semibold text-blue-700">
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-900">
          DALL-E is an AI model that generates images from text descriptions by
          referencing vast amounts of stored information from the internet.
          {/* DALL-E is an artificial intelligence model that can generate images
          when you feed it textual descriptions. To accomplish this, it
          translates billions of text bits from the internet into an abstraction
          of stored information, which it then uses as a reference tool of
          describable things for generating those images. */}
        </Text>
      </View>

      <View className="bg-purple-400 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../assets/images/smartai.png')}
            style={{height: hp(5), width: hp(5)}}
          />
          <Text
            style={{fontSize: wp(5)}}
            className="font-semibold text-blue-700">
            SMART-AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-900">
          AI systems learn by analyzing large labeled datasets to identify
          patterns, which they use to make predictions.
          {/* In general, AI systems work by ingesting large amounts of labeled
          training data, analyzing that data for correlations and patterns, and
          using these patterns to make predictions about future states. */}
        </Text>
      </View>

      {/* <TouchableOpacity>
        <Image
          className="rounded-full absolute bottom-10 -right-10"
          source={require('../assets/images/recordicon.png')}
          style={{width: hp(8), height: hp(8)}}
        />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({});
