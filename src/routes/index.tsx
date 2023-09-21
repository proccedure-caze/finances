import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../screens/Dashboard";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={defaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
