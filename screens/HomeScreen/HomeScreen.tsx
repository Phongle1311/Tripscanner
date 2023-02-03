import { View, StyleSheet, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-ExtraBoldItalic": require("./../../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <HomeHeader primaryText="Go travel" secondaryText="with us ..." />

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    marginTop: 40,
  },
});

export default HomeScreen;
