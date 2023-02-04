import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  ImageBackground,
  Text,
} from "react-native";

interface VoucherProps {
  image: ImageSourcePropType;
  title?: string;
  value: string;
  action: () => void;
}

const Voucher = ({ image, title, value, action }: VoucherProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
      <ImageBackground
        source={image}
        style={styles.wrapper}
        imageStyle={{ borderRadius: 6 }}
        resizeMode="cover"
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    width: 100,
    height: 100,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 12,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    color: "white",
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
export default Voucher;
