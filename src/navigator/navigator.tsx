import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderboardScreen from "../screens/leaderboardScreen";
import FeedScreen from "../screens/feedScreen";

const Stack = createBottomTabNavigator();

const Navigator = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Stack.Navigator>
  );
};

export { Navigator };
