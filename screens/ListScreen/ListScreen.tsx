import React, { useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import ItemComponent from "../../components/home/ItemComponent/ItemComponent";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getData, ResponseData } from "../../api/GetData";

const ListScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "List">) => {
  const { title, image, description, type, params } = route.params;
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataArray, setDataArray] = useState<ResponseData[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
    setIsLoading(true);
    getData({ type: type, ...params }).then((data) => {
      data && setDataArray(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        <Image source={image} />
        <View style={styles.headerText}>
          <Text style={styles.headerTitle}>{title}</Text>
          <Text style={styles.headerDesc}>{description}</Text>
        </View>
      </View>

      <View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />

          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="filter" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {isLoading ? (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="#0B646B" />
          </View>
        ) : dataArray && dataArray.length ? (
          <View style={styles.list}>
            {dataArray.map((data, index) => (
              <ItemComponent
                image={
                  data?.photo?.images?.medium?.url ||
                  "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                }
                name={data.name}
                location={data.location_string}
                key={index}
                action={() => navigation.navigate("Detail", { data: data })}
              />
            ))}
          </View>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Feather name="wifi-off" size={42} color="black" />
            <Text>Fail to connect server</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerText: {
    position: "absolute",
    justifyContent: "flex-start",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  headerDesc: {
    fontSize: 16,
    color: "white",
  },
  searchContainer: {
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 4,
    shadowColor: "red",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  filterButton: {
    marginLeft: 12,
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    paddingVertical: 8,
  },
});
export default ListScreen;
