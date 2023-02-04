import { View, Image, StyleSheet, ScrollView, Animated } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";
import MenuContainer from "../../components/home/MenuContainer/MenuContainer";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Hotel,
  Attraction,
  Flight,
  Restaurant,
  Voucher1,
  Voucher3,
  Voucher2,
} from "../../assets/index";
import Voucher from "../../components/home/Voucher/Voucher";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const swingAnim = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    startShakingAnimation();
  }, [swingAnim]);

  const startShakingAnimation = () => {
    Animated.sequence([
      Animated.timing(swingAnim, {
        toValue: 15,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(swingAnim, {
        toValue: -15,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(swingAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => startShakingAnimation());
  };

  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-ExtraBoldItalic": require("./../../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
      <HomeHeader primaryText="Go wander," secondaryText="Trip Scanner" />

      {/* Menu actions */}
      <View style={styles.menuWrapper}>
        <MenuContainer
          image={Hotel}
          name="Hotel"
          action={() => navigation.navigate("List")}
        />

        <MenuContainer
          image={Restaurant}
          name="Restaurant"
          action={() => navigation.navigate("List")}
        />

        <MenuContainer
          image={Flight}
          name="Flight"
          action={() => navigation.navigate("List")}
        />

        <MenuContainer
          image={Attraction}
          name="Attraction"
          action={() => navigation.navigate("List")}
        />
      </View>

      {/* Voucher and discount */}
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/banner.png")}
          style={styles.bannerImage}
          resizeMode="contain"
        />

        <Animated.Image
          source={require("../../assets/hand.png")}
          style={[
            styles.hand,
            {
              transform: [
                {
                  rotate: swingAnim.interpolate({
                    inputRange: [-15, 15],
                    outputRange: ["-15deg", "15deg"],
                  }),
                },
              ],
            },
          ]}
          resizeMode="contain"
        />
      </View>

      <ScrollView horizontal={true}>
        <Voucher
          image={Voucher1}
          title="TET Gift"
          value="- 5%"
          action={() => {}}
        />
        <Voucher
          image={Voucher3}
          title="Flash sale"
          value="- 199K"
          action={() => {}}
        />
        <Voucher
          image={Voucher2}
          title="Super sale"
          value="- 15%"
          action={() => {}}
        />
        <Voucher
          image={Voucher3}
          title="Online booking"
          value="- 3%"
          action={() => {}}
        />
        <Voucher
          image={Voucher2}
          title="Refund"
          value="20k"
          action={() => {}}
        />
        <Voucher
          image={Voucher1}
          title="Voucher"
          value="100k"
          action={() => {}}
        />
      </ScrollView>

      {/* Popular */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  imageWrapper: {
    height: 220,
  },
  bannerImage: {
    flex: 1,
    width: "100%",
  },
  hand: {
    position: "absolute",
    flex: 1,
    width: 140,
    height: 160,
    bottom: 20,
    right: -48,
  },
});

export default HomeScreen;
