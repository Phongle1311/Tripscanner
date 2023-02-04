import { View, Image, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";
import MenuContainer from "../../components/home/MenuContainer/MenuContainer";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Hotel, Attraction, Flight, Restaurant } from "../../assets/index";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
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
    <ScrollView>
      <HomeHeader primaryText="Go wander" secondaryText="with Tripscanner" />

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
      <View>
        <Image
          source={require("../../assets/tet_background.png")}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
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
});

export default HomeScreen;
