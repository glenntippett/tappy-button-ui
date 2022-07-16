import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

// https://stackoverflow.com/questions/47742280/how-to-define-entry-point-for-react-native-app
export default registerRootComponent(App);
