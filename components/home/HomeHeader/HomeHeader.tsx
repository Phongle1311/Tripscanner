import { View, Image, Text, StyleSheet } from "react-native";

interface HomeHeaderProps {
  primaryText: string;
  secondaryText?: string;
}

const HomeHeader = ({ primaryText, secondaryText }: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.primaryText]}>{primaryText}</Text>

        <Image
          source={require("./../../../assets/app_icon.png")}
          style={styles.logo}
        />
      </View>

      {secondaryText && (
        <Text style={[styles.text, styles.secondaryText]}>{secondaryText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 24,
    backgroundColor: "#2b9fdc",
    // height: 160,
    paddingTop: 42,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontFamily: "PlayfairDisplay-ExtraBoldItalic",
    color: "white",
  },
  primaryText: {
    flex: 3,
    fontSize: 36,
  },
  secondaryText: {
    fontSize: 28,
    marginRight: 52,
    textAlign: "right",
  },
  logo: {
    width: 60,
    height: 60,
    flex: 1,
    resizeMode: "contain",
  },
});

export default HomeHeader;
