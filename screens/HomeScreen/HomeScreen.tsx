import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
} from "react-native";
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
import { FontAwesome, Feather } from "@expo/vector-icons";
import AttractionsData, { getAttractionData } from "../../api/GetAttraction";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const swingAnim = useRef(new Animated.Value(0)).current;
  const [attractionData, setAttractionData] = useState<AttractionsData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  useEffect(() => {
    startShakingAnimation();
  }, [swingAnim]);

  useEffect(() => {
    setIsLoading(true);
    getAttractionData({}).then((data) => {
      data && setAttractionData(data);
      console.log(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

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

      <ScrollView horizontal={true} style={{ paddingHorizontal: 4 }}>
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
      <View style={{ marginTop: 16 }}>
        <View style={styles.popularHeader}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Popular</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text onPress={() => {}}>Explore more</Text>
            <FontAwesome
              name="chevron-right"
              size={16}
              color="green"
              style={{ marginLeft: 8 }}
            />
          </View>
        </View>

        {isLoading ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        ) : attractionData && attractionData.length ? (
          <View style={styles.popularContainer}>
            {attractionData.map((data) => (
              <Text>data.data</Text>
            ))}
          </View>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Feather name="wifi-off" size={42} color="black" />
            <Text>
              {attractionData != null ? attractionData.length : "null"}
            </Text>
          </View>
        )}
      </View>
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
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  popularContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 20,
  },
});

export default HomeScreen;
