import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { NotFound } from "../../../assets/index";

interface MenuContainerProps {
  image: ImageSourcePropType;
  name: string;
  action: () => void;
}

const MenuContainer = ({ image, name, action }: MenuContainerProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={image || NotFound} style={styles.image} />
      </View>

      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageWrapper: {
    backgroundColor: "#2b9fdc",
    padding: 6,
    borderRadius: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {},
});

export default MenuContainer;
