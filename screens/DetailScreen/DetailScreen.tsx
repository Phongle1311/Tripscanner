import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../../App";

const DetailScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Detail">) => {
  const { data } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return <Text></Text>;
};

export default DetailScreen;
