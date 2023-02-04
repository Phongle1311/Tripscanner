import {
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
  Image,
  Text,
} from "react-native";

interface PopularPlaceItemProps {
  image: ImageSourcePropType;
  name: string;
  location?: string;
}

const PopularPlaceItem = ({ image, name, location }: PopularPlaceItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={image} resizeMode="cover" />
      {name && (
        <Text>{name?.length > 14 ? `${name.slice(0, 14)}...` : name}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 4,
  },
});
export default PopularPlaceItem;
