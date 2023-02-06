import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  FontAwesome,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { RootStackParamList } from "../../App";

const DetailScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Detail">) => {
  const { data } = route.params;
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView>
      {/* Header */}
      <ImageBackground
        source={{ uri: data.photo?.images?.large.url }}
        style={{ width: "100%", height: 200 }}
      >
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <MaterialIcons name="favorite" size={24} color="white" />
          ) : (
            <MaterialIcons name="favorite-outline" size={24} color="white" />
          )}
        </TouchableOpacity>

        <View style={styles.closingBox}>
          <Text>{data.is_closed ? "Closed" : "Open now"}</Text>
        </View>
      </ImageBackground>

      <Text style={styles.nameText}>{data.name}</Text>
      <Text style={styles.locationText}>{data.location_string}</Text>

      {/* Rate and Review */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 12,
          flexWrap: "wrap",
        }}
      >
        {data?.rating && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "green",
                marginRight: 8,
              }}
            >
              <FontAwesome name="star" size={24} color="white" />
            </TouchableOpacity>
            <Text>{data.rating + " stars"}</Text>
          </View>
        )}

        {data?.num_reviews && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "green",
                marginRight: 8,
              }}
            >
              <Feather name="pen-tool" size={24} color="white" />
            </TouchableOpacity>
            <Text>{data.num_reviews + " reviews"}</Text>
          </View>
        )}

        {data?.price && (
          <View style={styles.rateItem}>
            <TouchableOpacity
              style={{
                padding: 4,
                borderRadius: 8,
                backgroundColor: "green",
                marginRight: 8,
              }}
            >
              <Ionicons name="pricetag" size={22} color="white" />
            </TouchableOpacity>
            <Text>{data.price}</Text>
          </View>
        )}
      </View>

      {/* Tags */}
      {data.cuisine && data.cuisine.length > 0 && (
        <View>
          <Text style={styles.title}>Tags</Text>
          <View
            style={{
              marginHorizontal: 12,
              marginVertical: 4,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {data.cuisine.map((cuisine: any) => (
              <TouchableOpacity style={styles.cuisine}>
                <Text>{cuisine.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* Description */}
      <Text style={styles.title}>Description</Text>
      <Text style={{ marginHorizontal: 12 }}>
        {data.description || "No description yet!"}
      </Text>

      {/* Ranking */}
      {data.ranking && (
        <View>
          <Text style={styles.title}>Ranking</Text>
          <View
            style={[styles.box, { flexDirection: "row", alignItems: "center" }]}
          >
            <View
              style={{
                padding: 8,
                borderRadius: 12,
                backgroundColor: "#F64F5C",
              }}
            >
              <Ionicons name="md-medal" size={24} color="white" />
            </View>
            <Text style={{ marginLeft: 12, fontSize: 18, fontWeight: "bold" }}>
              {data.ranking}
            </Text>
          </View>
        </View>
      )}

      {/* Contact */}
      {(data.address || data.phone || data.website) && (
        <View>
          <Text style={styles.title}>Contact</Text>
          <View style={styles.box}>
            {data.email && (
              <View style={styles.itemBox}>
                <TouchableOpacity style={styles.contactItem}>
                  <Ionicons name="mail" size={28} color="white" />
                </TouchableOpacity>
                <Text>
                  {data.email?.length > 28
                    ? `${data.email.slice(0, 28)}..`
                    : data.email}
                </Text>
              </View>
            )}

            {data.address && (
              <View style={styles.itemBox}>
                <TouchableOpacity style={styles.contactItem}>
                  <Entypo name="address" size={28} color="white" />
                </TouchableOpacity>
                <Text>
                  {data.address?.length > 28
                    ? `${data.address.slice(0, 28)}..`
                    : data.address}
                </Text>
              </View>
            )}

            {data.phone && (
              <View style={styles.itemBox}>
                <TouchableOpacity style={styles.contactItem}>
                  <Entypo name="old-phone" size={28} color="white" />
                </TouchableOpacity>
                <Text>{data.phone}</Text>
              </View>
            )}

            {data.website && (
              <View style={styles.itemBox}>
                <TouchableOpacity style={styles.contactItem}>
                  <MaterialIcons name="web" size={28} color="white" />
                </TouchableOpacity>
                <Text>
                  {data.website?.length > 28
                    ? `${data.website.slice(0, 28)}..`
                    : data.website}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}

      {/* Empty view */}
      <View style={{ marginBottom: 200 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    position: "absolute",
    top: 36,
    right: 20,
    padding: 4,
  },
  closingBox: {
    position: "absolute",
    right: 20,
    bottom: 20,
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 6,
    backgroundColor: "#A9B620DE",
  },
  nameText: {
    fontSize: 24,
    marginTop: 16,
    marginHorizontal: 12,
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 16,
    fontStyle: "italic",
    marginHorizontal: 12,
    marginBottom: 12,
  },
  rateItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 12,
    color: "#666",
  },
  cuisine: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
    backgroundColor: "#F5C869",
  },
  box: {
    marginHorizontal: 12,
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#F5C8694B",
  },
  itemBox: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  contactItem: {
    backgroundColor: "green",
    borderRadius: 12,
    padding: 8,
    marginRight: 8,
  },
});

export default DetailScreen;
