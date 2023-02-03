import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

interface MenuContainerProps {
  image: string;
  name: string;
  action: () => void;
}

const MenuContainer = ({ image, name, action }: MenuContainerProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.container}>
      <View style={styles.image}>
        <Image source={require(image)} />
      </View>

      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {},
  text: {},
});

export default MenuContainer;
