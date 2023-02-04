import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./screens/DetailScreen/DetailScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ListScreen from "./screens/ListScreen/ListScreen";

export type RootStackParamList = {
  Home: undefined;
  List: undefined;
  Detail: { sort: "latest" | "top" } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
