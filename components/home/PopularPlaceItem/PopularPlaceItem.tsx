import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface PopularPlaceItemProps {
  image: string;
  name: string;
  location?: string;
  key: number;
}

const PopularPlaceItem = ({
  image,
  name,
  location,
  key,
}: PopularPlaceItemProps) => {
  // key == 1 && console.log(name);
  console.log(image);
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      {name && (
        <Text style={styles.name}>
          {name?.length > 14 ? `${name.slice(0, 14)}..` : name}
        </Text>
      )}
      {location && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FontAwesome name="map-marker" size={20} color="#8597A2" />
          <Text style={styles.location}>
            {location?.length > 18 ? `${location.slice(0, 18)}...` : location}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 8,
    flexBasis: "46%",
    overflow: "hidden",
    marginHorizontal: "2%",
    marginBottom: "4%",
    backgroundColor: "white",
    borderRadius: 8,
    width: "100%",
    shadowColor: "red",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 4,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    fontStyle: "italic",
    marginLeft: 8,
  },
});
export default PopularPlaceItem;
