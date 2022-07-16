import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CatalogScreen from "../screens/catalogScreen";
import FeedScreen from "../screens/feedScreen";

const Stack = createBottomTabNavigator();

const Navigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Catalog" component={CatalogScreen} />
    </Stack.Navigator>
  );
};

export { Navigator };
